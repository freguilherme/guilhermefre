# guilhermefre — portfólio

Portfólio pessoal em página única com visual inspirado no VS Code: menu em abas, janelas de código com syntax highlight, linha do tempo estilo `git log` e status bar.

## Estrutura

```
index.html      # layout da "IDE"
css/style.css   # tema e responsividade
js/data.js      # ✏️ SEU CONTEÚDO (nome, experiência, stack, projetos, links)
js/app.js       # renderização das seções e animações
```

Para atualizar o conteúdo, edite apenas `js/data.js` (os itens marcados com `TODO` são exemplos).

## Rodando localmente

Abra o `index.html` no navegador, ou:

```bash
python3 -m http.server 8000
```

## Publicando no GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → selecione a branch e a pasta `/ (root)`.
