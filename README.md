# Sistema de Rastreamento de Veículos Amazon FC

Sistema completo de rastreamento de veículos para rotas Amazon com origem TZX e destinos nos Fulfillment Centers GR8, GR9 e XC9.

## 🚀 Como Usar

### Opção 1: Arquivo HTML Simples (Recomendado)
1. **Baixe o arquivo `index.html`**
2. **Abra diretamente no navegador** - funciona offline!
3. **Ou use um servidor local**:
   ```bash
   python3 -m http.server 8080
   # Acesse: http://localhost:8080
   ```

### Opção 2: Next.js (Avançado)
1. **Instale dependências**:
   ```bash
   npm install
   ```
2. **Execute o servidor**:
   ```bash
   npm run dev
   # Acesse: https://g5wjsg-8000.csb.app/
   ```

## 📋 Funcionalidades

### 🏢 Regras de Negócio Amazon
- **INNOVATION**: Atende GR8, GR9 (não atende XC9)
- **GARBERG**: Atende todos os FC (GR8, GR9, XC9)
- **FULL FLEX**: Atende todos os FC
- **PACHECO**: Atende todos os FC
- **FRATELLI**: Atende todos os FC
- **SANPOR**: Atende GR8, GR9 (não atende XC9)
- **PRC TRANSPORTES**: Atende todos os FC

### 📊 Recursos
- ✅ Dashboard com estatísticas em tempo real
- ✅ Filtros por FC, Transportadora e Status
- ✅ Tabela completa com todos os campos da planilha Excel
- ✅ Dados simulados realistas (30 registros)
- ✅ Interface 100% em português
- ✅ Design responsivo e moderno

### 📈 Campos Exibidos
- ISA, Data da Carga, Rota
- Transportadora (com cores identificativas)
- Tipo de Veículo, Motorista, Placa
- Pallets, Volume, Status

## 🎯 Para GitHub Pages

### Opção 1: Upload Direto
1. Faça upload do arquivo `index.html` para seu repositório GitHub
2. Ative GitHub Pages nas configurações do repositório
3. Acesse: `https://seu-usuario.github.io/seu-repositorio/`

### Opção 2: Usando GitHub Desktop
1. Clone este repositório
2. Faça upload do arquivo `index.html`
3. Commit e push
4. Ative GitHub Pages

## 🔧 Tecnologias Usadas
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos e responsivos
- **JavaScript** - Funcionalidade dinâmica
- **Next.js** - Versão avançada (opcional)

## 📱 Compatibilidade
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Desktop, Tablet, Mobile
- ✅ Funciona offline
- ✅ Sem dependências externas

## 🎨 Cores das Transportadoras
- INNOVATION: Azul (#3B82F6)
- GARBERG: Verde (#10B981)
- FULL FLEX: Roxo (#8B5CF6)
- PACHECO: Laranja (#F59E0B)
- FRATELLI: Vermelho (#EF4444)
- SANPOR: Ciano (#06B6D4)
- PRC TRANSPORTES: Verde-lima (#84CC16)

## 📊 Estatísticas
- Total de viagens: 30 (simuladas)
- Status dinâmicos: Em Trânsito, Carregando, Finalizado, Aguardando
- Dados baseados na estrutura real da planilha Excel

## 🚀 Deploy Rápido
Para hospedar imediatamente:
1. Faça fork deste repositório
2. Vá para Settings → Pages
3. Selecione "Deploy from a branch"
4. Escolha a branch main
5. Clique em Save
6. Acesse a URL gerada!

## 📞 Suporte
O sistema está pronto para uso e pode ser hospedado em qualquer servidor web ou serviço de hospedagem.
