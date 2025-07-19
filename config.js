// Configuração para integração com planilha real
// Substitua estas configurações com os dados reais da sua planilha

const SHEET_CONFIG = {
    // Opção 1: Google Sheets (Recomendado)
    googleSheets: {
        enabled: false, // Mude para true quando tiver a planilha Google
        sheetId: 'SEU_ID_AQUI', // Substitua pelo ID real
        sheetName: 'TRANSFERÊNCIA PCP - 2025',
        apiUrl: 'https://docs.google.com/spreadsheets/d/{sheetId}/gviz/tq?sheet={sheetName}&tqx=out:json',
        
        // Mapeamento das colunas da planilha
        columns: {
            isa: 0,
            dataCarga: 1,
            rota: 2,
            tipoVeiculo: 3,
            planejadoChegadaTZX: 4,
            planejadoSaidaTZX: 5,
            planejadoChegadaFC: 6,
            idViagem: 7,
            sm: 8,
            caf: 9,
            pallets: 10,
            vol: 11,
            chegadaOrigem: 12,
            saidaOrigem: 13,
            chegadaDestino: 14,
            finalizado: 15,
            baixaCAF: 16,
            transportadora: 17,
            motorista: 18,
            placa: 19,
            status: 20
        }
    },

    // Opção 2: Microsoft Graph API (SharePoint)
    sharePoint: {
        enabled: false, // Mude para true quando configurado
        siteUrl: 'https://texcourierltda-my.sharepoint.com',
        filePath: '/personal/vithoria_teles_totalexpress_com_br/Documents/TRANSFERÊNCIA PCP - 2025.xlsx',
        apiUrl: 'https://graph.microsoft.com/v1.0/sites/{site-id}/drive/items/{item-id}/workbook/worksheets/{worksheet-name}/usedRange',
        
        // Configuração de autenticação necessária
        auth: {
            clientId: 'SEU_CLIENT_ID',
            tenantId: 'SEU_TENANT_ID',
            redirectUri: 'http://localhost:8080'
        }
    },

    // Opção 3: CSV público (mais simples)
    csv: {
        enabled: false, // Mude para true quando tiver CSV
        url: 'https://seu-dominio.com/dados.csv',
        delimiter: ','
    },

    // Configuração das transportadoras
    transportadoras: {
        'INNOVATION': { color: '#3B82F6', fcs: ['GR8', 'GR9'] },
        'GARBERG': { color: '#10B981', fcs: ['GR8', 'GR9', 'XC9'] },
        'FULL FLEX': { color: '#8B5CF6', fcs: ['GR8', 'GR9', 'XC9'] },
        'PACHECO': { color: '#F59E0B', fcs: ['GR8', 'GR9', 'XC9'] },
        'FRATELLI': { color: '#EF4444', fcs: ['GR8', 'GR9', 'XC9'] },
        'SANPOR': { color: '#06B6D4', fcs: ['GR8', 'GR9'] },
        'PRC TRANSPORTES': { color: '#84CC16', fcs: ['GR8', 'GR9', 'XC9'] }
    },

    // Configuração de filtros
    filters: {
        fcs: ['GR8', 'GR9', 'XC9'],
        status: ['Em Trânsito', 'Carregando', 'Finalizado', 'Aguardando'],
        tiposVeiculo: ['Truck', 'Van', 'Carreta', 'Bitrem']
    }
};

// Função template para integração real
async function fetchRealData() {
    try {
        // Implementação para Google Sheets
        if (SHEET_CONFIG.googleSheets.enabled) {
            const url = SHEET_CONFIG.googleSheets.apiUrl
                .replace('{sheetId}', SHEET_CONFIG.googleSheets.sheetId)
                .replace('{sheetName}', SHEET_CONFIG.googleSheets.sheetName);
            
            const response = await fetch(url);
            const data = await response.text();
            const jsonData = JSON.parse(data.substring(47, data.length - 2));
            
            return jsonData.table.rows.map(row => ({
                isa: row.c[SHEET_CONFIG.googleSheets.columns.isa]?.v || '',
                dataCarga: row.c[SHEET_CONFIG.googleSheets.columns.dataCarga]?.v || '',
                rota: row.c[SHEET_CONFIG.googleSheets.columns.rota]?.v || '',
                transportadora: row.c[SHEET_CONFIG.googleSheets.columns.transportadora]?.v || '',
                tipoVeiculo: row.c[SHEET_CONFIG.googleSheets.columns.tipoVeiculo]?.v || '',
                motorista: row.c[SHEET_CONFIG.googleSheets.columns.motorista]?.v || '',
                placa: row.c[SHEET_CONFIG.googleSheets.columns.placa]?.v || '',
                pallets: parseInt(row.c[SHEET_CONFIG.googleSheets.columns.pallets]?.v || 0),
                vol: parseInt(row.c[SHEET_CONFIG.googleSheets.columns.vol]?.v || 0),
                status: row.c[SHEET_CONFIG.googleSheets.columns.status]?.v || 'Aguardando'
            }));
        }

        // Implementação para SharePoint
        if (SHEET_CONFIG.sharePoint.enabled) {
            // Requer autenticação OAuth2
            const token = await getSharePointToken();
            const response = await fetch(SHEET_CONFIG.sharePoint.apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return await response.json();
        }

        // Implementação para CSV
        if (SHEET_CONFIG.csv.enabled) {
            const response = await fetch(SHEET_CONFIG.csv.url);
            const csvText = await response.text();
            return parseCSV(csvText, SHEET_CONFIG.csv.delimiter);
        }

        // Fallback para dados simulados
        return generateSimulatedData();
        
    } catch (error) {
        console.error('Erro ao buscar dados reais:', error);
        return generateSimulatedData();
    }
}

// Função auxiliar para parse CSV
function parseCSV(csvText, delimiter = ',') {
    const lines = csvText.split('\n');
    const headers = lines[0].split(delimiter);
    return lines.slice(1).map(line => {
        const values = line.split(delimiter);
        const obj = {};
        headers.forEach((header, index) => {
            obj[header.trim()] = values[index]?.trim() || '';
        });
        return obj;
    });
}

// Função para gerar token SharePoint (requer configuração)
async function getSharePointToken() {
    // Implementação OAuth2 necessária
    return 'SEU_TOKEN_AQUI';
}

// Exportar para uso
window.SHEET_CONFIG = SHEET_CONFIG;
window.fetchRealData = fetchRealData;
