# Roma Hospitalar

One page institucional da Roma Hospitalar — “Distribuindo saúde, entregando resultado”.

## Stack
Next.js (App Router), TypeScript, Tailwind CSS e Lucide React. Sem banco de dados.

## Desenvolvimento
```bash
npm install
npm run dev
```
Acesse http://localhost:4700.

## Produção com PM2
```bash
npm install
npm run build
npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
```

## Contato
Copie `.env.example` para `.env.local` (desenvolvimento) ou `.env.production.local` (produção) e informe um telefone WhatsApp (somente números com DDI) e/ou e-mail comercial reais. Sem esses dados, os botões de contato não criam links fictícios.

## Assets
O logotipo é representado em SVG no componente `Brand`. Substitua pelos arquivos vetoriais oficiais quando disponíveis para garantir fidelidade exata à marca.

## Arquivos da marca

Coloque os arquivos oficiais em `public/marca/logo_roma.png` e `public/marca/favicon_roma.png` (nomes exatos, inclusive maiúsculas/minúsculas). O logo é utilizado no cabeçalho e no rodapé; o favicon é definido no metadata do Next.js. Esta pasta possui um `.gitkeep` para existir no clone antes do envio das imagens.
