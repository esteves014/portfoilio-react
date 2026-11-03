# Portfólio - Vitor Miguel

Portfólio pessoal feito com React + Vite e Bootstrap.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento com HMR
- `npm run build`: gera a versão de produção em `dist/`
- `npm run preview`: serve localmente o build de produção
- `npm run lint`: analisa o código com o Oxlint
- `npm test`: roda os testes com o Vitest

## Estrutura

```
public/          arquivos estáticos servidos na raiz (imagens dos projetos, CV)
src/
  assets/        imagens importadas pelo código/CSS
  components/    seções do site
  data/          conteúdo em JSON (projetos, habilidades, contatos...)
  App.jsx
  main.jsx       ponto de entrada
index.html
vite.config.js
```
