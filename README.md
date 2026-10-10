# guilhermefre — portfólio

Portfólio pessoal com visual de IDE (inspirado no VS Code): explorador de arquivos, abas, código com syntax highlight, terminal interativo e command palette.

## Estrutura

```
index.html      # layout da "IDE"
css/style.css   # tema e responsividade
js/data.js      # ✏️ SEU CONTEÚDO (nome, experiência, stack, projetos, links)
js/app.js       # lógica: abas, terminal, palette, renderização
```

Para atualizar o conteúdo, edite apenas `js/data.js` (os itens marcados com `TODO` são exemplos).

## Rodando localmente

Abra o `index.html` no navegador, ou:

```bash
python3 -m http.server 8000
```

## Publicando no GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → selecione a branch e a pasta `/ (root)`.

## Atalhos

- `Ctrl+K` / `Ctrl+P` — busca rápida
- `Ctrl+B` — mostrar/ocultar explorador
- `` Ctrl+` `` — mostrar/ocultar terminal
- No terminal: `help`, `ls`, `open <arquivo>`, `whoami`, `linkedin`, `clear`
