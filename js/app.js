(() => {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const isMobile = () => matchMedia("(max-width: 820px)").matches;

  /* ---------- helpers de syntax highlight ---------- */
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const span = (cls) => (x) => `<span class="${cls}">${esc(x)}</span>`;
  const k = span("k"), s = (x) => span("s")(`"${x}"`), n = span("n"), p = span("p"), f = span("f"), t = span("t"), c = span("c"), u = span("u");
  const link = (url, label = `"${url}"`) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>`;
  const ind = (lvl) => "  ".repeat(lvl);
  const arr = (items) => u("[") + items.map((i) => s(i)).join(u(", ")) + u("]");
  const bar = (v) => {
    const size = isMobile() ? 10 : 20;
    const on = Math.round((v / 100) * size);
    return `<span class="bar"><span class="on">${"█".repeat(on)}</span><span class="off">${"░".repeat(size - on)}</span></span>`;
  };

  const linkedin = D.links.linkedin;

  /* ---------- arquivos ---------- */
  const FILES = [
    { name: "README.md", icon: "M↓", color: "#519aba", desc: "início", view: readme },
    { name: "sobre.ts", icon: "TS", color: "#3178c6", desc: "quem sou eu", view: sobre },
    { name: "experiencia.json", icon: "{}", color: "#cbcb41", desc: "trajetória profissional", view: experiencia },
    { name: "stack.config.js", icon: "JS", color: "#f1e05a", desc: "tecnologias que domino", view: stack },
    { name: "projetos.jsx", icon: "⚛", color: "#61dafb", desc: "projetos executados", view: projetos },
    { name: "contato.sh", icon: "$", color: "#89e051", desc: "LinkedIn e contato", view: contato },
  ];
  const byName = (name) => FILES.find((x) => x.name.toLowerCase() === String(name).toLowerCase());

  function readme() {
    const quick = FILES.slice(1)
      .map((x) => `<button data-open="${x.name}"><b style="color:${x.color}">${esc(x.icon)}&nbsp; ${esc(x.name)}</b><span>${esc(x.desc)}</span></button>`)
      .join("");
    return {
      html: `<div class="preview">
        <div class="hero">
          <div class="hi">// olá, mundo! eu sou</div>
          <h1>${esc(D.nome)}</h1>
          <h2><span id="typed"></span><span class="cursor"></span></h2>
          <p>${esc(D.resumo)}</p>
          <div class="btns">
            <button class="btn primary" data-open="projetos.jsx">▶ Ver projetos</button>
            <a class="btn" href="${esc(linkedin)}" target="_blank" rel="noopener">in/ Meu LinkedIn ↗</a>
            ${D.links.github ? `<a class="btn" href="${esc(D.links.github)}" target="_blank" rel="noopener">⌥ GitHub ↗</a>` : ""}
          </div>
        </div>
        <div class="section-title">// EXPLORE OS ARQUIVOS</div>
        <div class="quick">${quick}</div>
        <div class="section-title">// DICA: use o terminal abaixo — digite <span style="color:var(--accent)">help</span> ou pressione Ctrl+K</div>
      </div>`,
      after: startTyping,
    };
  }

  function sobre() {
    const L = [
      c("// sobre.ts — quem sou eu"),
      "",
      `${k("interface")} ${t("Dev")} ${u("{")}`,
      `${ind(1)}${p("nome")}${u(":")} ${t("string")}${u(";")}`,
      `${ind(1)}${p("cargo")}${u(":")} ${t("string")}${u(";")}`,
      `${ind(1)}${p("local")}${u(":")} ${t("string")}${u(";")}`,
      `${ind(1)}${p("disponivel")}${u(":")} ${t("boolean")}${u(";")}`,
      `${ind(1)}${p("foco")}${u(":")} ${t("string")}${u("[];")}`,
      u("}"),
      "",
      `${k("export const")} ${p("guilherme")}${u(":")} ${t("Dev")} ${u("= {")}`,
      `${ind(1)}${p("nome")}${u(":")} ${s(D.nome)}${u(",")}`,
      `${ind(1)}${p("cargo")}${u(":")} ${s(D.cargo)}${u(",")}`,
      `${ind(1)}${p("local")}${u(":")} ${s(D.local)}${u(",")}`,
      `${ind(1)}${p("disponivel")}${u(":")} ${k(String(!!D.disponivel))}${u(",")}`,
      `${ind(1)}${p("foco")}${u(":")} ${arr(D.foco)}${u(",")}`,
      u("};"),
      "",
      c("/**"),
      ...D.sobre.map((l) => c(` * ${l}`)),
      c(" */"),
      `${k("export function")} ${f("conectar")}${u("() {")}`,
      `${ind(1)}${k("return")} ${link(linkedin)}${u(";")} ${c("// ← clique para abrir")}`,
      u("}"),
    ];
    return { lines: L };
  }

  function experiencia() {
    const L = [`${u("{")}`, `${ind(1)}${p('"experiencia"')}${u(": [")}`];
    D.experiencia.forEach((e, i) => {
      const last = i === D.experiencia.length - 1;
      L.push(
        `${ind(2)}${u("{")}`,
        `${ind(3)}${p('"cargo"')}${u(":")} ${s(e.cargo)}${u(",")}`,
        `${ind(3)}${p('"empresa"')}${u(":")} ${f(`"${e.empresa}"`)}${u(",")}`,
        `${ind(3)}${p('"periodo"')}${u(":")} ${n(`"${e.periodo}"`)}${u(",")}`,
        `${ind(3)}${p('"descricao"')}${u(":")} ${s(e.descricao)}${u(",")}`,
        `${ind(3)}${p('"stack"')}${u(":")} ${arr(e.stack || [])}`,
        `${ind(2)}${u(last ? "}" : "},")}`
      );
    });
    L.push(`${ind(1)}${u("],")}`, `${ind(1)}${p('"perfilCompleto"')}${u(":")} ${link(linkedin)}`, u("}"));
    return { lines: L };
  }

  function stack() {
    const L = [c("// stack.config.js — tecnologias que domino"), c("// nível de proficiência: 0 ─────────────── 100"), "", `${k("export default")} ${u("{")}`];
    const cats = Object.entries(D.stack);
    cats.forEach(([cat, items], ci) => {
      const w = Math.max(...items.map((i) => i.nome.length)) + (isMobile() ? 1 : 4);
      L.push(`${ind(1)}${p(cat)}${u(": {")}`);
      items.forEach((it) => {
        const key = /^[A-Za-z_$][\w$]*$/.test(it.nome) ? it.nome : `"${it.nome}"`;
        const pad = " ".repeat(Math.max(1, w - key.length));
        L.push(`${ind(2)}${f(key)}${u(":")}${pad}${n(String(it.nivel).padStart(3))}${u(",")} <span class="nowrap">${c("//")} ${bar(it.nivel)}</span>`);
      });
      L.push(`${ind(1)}${u(ci === cats.length - 1 ? "}" : "},")}`);
    });
    L.push(u("};"));
    return { lines: L };
  }

  function projetos() {
    const cards = D.projetos
      .map((pr, i) => {
        const links = [pr.repo && `<a href="${esc(pr.repo)}" target="_blank" rel="noopener">⌥ código ↗</a>`, pr.demo && `<a href="${esc(pr.demo)}" target="_blank" rel="noopener">▶ demo ↗</a>`]
          .filter(Boolean)
          .join("");
        return `<article class="card">
          <div class="card-top"><span>&lt;Projeto id={${i + 1}} /&gt;</span><span>📁</span></div>
          <h3>${esc(pr.nome)}</h3>
          <p>${esc(pr.descricao)}</p>
          <div class="tags">${(pr.tags || []).map((tg) => `<span class="tag">${esc(tg)}</span>`).join("")}</div>
          ${links ? `<div class="card-links">${links}</div>` : ""}
        </article>`;
      })
      .join("");
    return {
      html: `<div class="preview">
        <div class="code" style="padding:0 0 18px;margin-left:-16px">
          <div class="ln"><span class="c0">${k("export default function")} ${f("Projetos")}${u("() {")}</span></div>
          <div class="ln"><span class="c0">${ind(1)}${k("return")} ${u("<")}${t("Grid")} ${p("itens")}${u("={")}${n(String(D.projetos.length))}${u("} />")}${u(";")} ${c("// preview renderizado ↓")}</span></div>
          <div class="ln"><span class="c0">${u("}")}</span></div>
        </div>
        <div class="cards">${cards}</div>
        <div class="btns"><a class="btn" href="${esc(linkedin)}" target="_blank" rel="noopener">Mais detalhes no LinkedIn ↗</a></div>
      </div>`,
    };
  }

  function contato() {
    const L = [
      c("#!/usr/bin/env bash"),
      c("# contato.sh — vamos conversar!"),
      "",
      `${p("LINKEDIN")}${u("=")}${link(linkedin)}`,
    ];
    if (D.links.github) L.push(`${p("GITHUB")}${u("=")}${link(D.links.github)}`);
    if (D.links.email) L.push(`${p("EMAIL")}${u("=")}${link("mailto:" + D.links.email, `"${D.links.email}"`)}`);
    L.push(
      "",
      `${f("echo")} ${s("Meu perfil profissional completo está no LinkedIn 👇")}`,
      `${f("open")} ${u('"')}${p("$LINKEDIN")}${u('"')}`
    );
    return {
      lines: L,
      footer: `<div class="preview" style="padding-top:0"><div class="btns" style="margin-top:0">
        <a class="btn primary" href="${esc(linkedin)}" target="_blank" rel="noopener">▶ ./contato.sh — abrir LinkedIn</a>
        ${D.links.email ? `<a class="btn" href="mailto:${esc(D.links.email)}">✉ Enviar e-mail</a>` : ""}
      </div></div>`,
    };
  }

  /* ---------- digitação no README ---------- */
  let typingTimer;
  function startTyping() {
    clearTimeout(typingTimer);
    const el = $("#typed");
    if (!el) return;
    const words = [D.cargo, ...D.foco];
    let w = 0, i = 0, del = false;
    const tick = () => {
      if (!document.body.contains(el)) return;
      const word = words[w];
      i += del ? -1 : 1;
      el.textContent = word.slice(0, i);
      let delay = del ? 35 : 70;
      if (!del && i === word.length) { del = true; delay = 1800; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; delay = 300; }
      typingTimer = setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- estado do editor ---------- */
  let open = ["README.md"];
  let active = "README.md";

  function renderTree() {
    $("#tree").innerHTML = FILES.map(
      (x) => `<li><button data-open="${x.name}" class="${x.name === active ? "active" : ""}">
        <span class="ficon" style="color:${x.color}">${esc(x.icon)}</span>${esc(x.name)}</button></li>`
    ).join("");
  }

  function renderTabs() {
    $("#tabs").innerHTML = open
      .map((name) => {
        const x = byName(name);
        return `<div class="tab ${name === active ? "active" : ""}" role="tab" data-open="${name}">
          <span class="ficon" style="color:${x.color}">${esc(x.icon)}</span>${esc(name)}
          <button class="x" data-close="${name}" aria-label="Fechar ${esc(name)}">✕</button></div>`;
      })
      .join("");
    $(".tab.active")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  function renderEditor() {
    const x = byName(active);
    const v = x.view();
    const body = v.html
      ? v.html
      : `<div class="code">${v.lines.map((l) => `<div class="ln"><span class="c0">${l || " "}</span></div>`).join("")}</div>${v.footer || ""}`;
    const ed = $("#editor");
    ed.innerHTML = body;
    ed.scrollTop = 0;
    v.after?.();
    $("#breadcrumb").innerHTML = `guilhermefre › <b>${esc(x.name)}</b>`;
    $("#title").textContent = `${x.name} — guilhermefre`;
    $("#sbFile").textContent = x.name.split(".").pop().toUpperCase();
    document.title = `${x.name} · ${D.nome}`;
  }

  function openFile(name, { push = true } = {}) {
    const x = byName(name);
    if (!x) return false;
    if (!open.includes(x.name)) open.push(x.name);
    active = x.name;
    renderTabs();
    renderTree();
    renderEditor();
    if (push && location.hash !== `#/${x.name}`) history.replaceState(null, "", `#/${x.name}`);
    if (isMobile()) toggleExplorer(false);
    return true;
  }

  function closeFile(name) {
    const idx = open.indexOf(name);
    if (idx === -1) return;
    open.splice(idx, 1);
    if (!open.length) open = ["README.md"];
    if (active === name) active = open[Math.max(0, idx - 1)] || open[0];
    openFile(active);
  }

  function toggleExplorer(force) {
    const el = $("#explorer");
    const show = force ?? el.classList.contains("closed");
    el.classList.toggle("closed", !show);
    $("#toggleExplorer").classList.toggle("active", show);
  }

  function toggleTerminal(force) {
    const el = $("#panel");
    const show = force ?? el.classList.contains("closed");
    el.classList.toggle("closed", !show);
    if (show && !isMobile()) $("#termIn").focus();
  }

  /* ---------- terminal ---------- */
  const out = $("#termOut");
  const termIn = $("#termIn");
  const hist = [];
  let hi = 0;

  const print = (html, cls = "") => {
    const d = document.createElement("div");
    if (cls) d.className = cls;
    d.innerHTML = html;
    out.appendChild(d);
    $("#term").scrollTop = $("#term").scrollHeight;
  };

  const COMMANDS = {
    help: () =>
      print(
        [
          "Comandos disponíveis:",
          "  <span class='t-ok'>ls</span>                lista os arquivos",
          "  <span class='t-ok'>open</span> &lt;arquivo&gt;    abre um arquivo (ou: cat, code)",
          "  <span class='t-ok'>whoami</span>            quem sou eu",
          "  <span class='t-ok'>sobre | experiencia | stack | projetos | contato</span>",
          "  <span class='t-ok'>linkedin</span>          abre meu perfil profissional",
          "  <span class='t-ok'>github</span>            abre meu GitHub",
          "  <span class='t-ok'>clear</span>             limpa o terminal",
        ].join("\n")
      ),
    ls: () => print(FILES.map((x) => `<span style="color:${x.color}">${esc(x.name)}</span>`).join("   ")),
    whoami: () => print(`${esc(D.nome)} — ${esc(D.cargo)} · ${esc(D.local)}\n<span class="t-dim">${esc(D.resumo)}</span>`),
    open: (arg) => {
      if (!arg) return print("uso: open &lt;arquivo&gt;", "t-err");
      if (!openFile(arg)) print(`arquivo não encontrado: ${esc(arg)}`, "t-err");
    },
    linkedin: () => {
      print(`abrindo <a href="${esc(linkedin)}" target="_blank" rel="noopener">${esc(linkedin)}</a> …`, "t-ok");
      window.open(linkedin, "_blank", "noopener");
    },
    github: () => {
      if (!D.links.github) return print("github não configurado", "t-err");
      print(`abrindo ${esc(D.links.github)} …`, "t-ok");
      window.open(D.links.github, "_blank", "noopener");
    },
    clear: () => (out.innerHTML = ""),
    date: () => print(new Date().toLocaleString("pt-BR")),
    pwd: () => print("/home/visitante/guilhermefre"),
    echo: (arg) => print(esc(arg)),
    sudo: () => print("visitante não está no arquivo sudoers. Este incidente será reportado. 😄", "t-err"),
    exit: () => toggleTerminal(false),
  };
  COMMANDS.cat = COMMANDS.code = COMMANDS.vim = COMMANDS.open;
  const ALIASES = { sobre: "sobre.ts", experiencia: "experiencia.json", stack: "stack.config.js", projetos: "projetos.jsx", contato: "contato.sh", readme: "README.md", home: "README.md" };

  function run(raw) {
    const line = raw.trim();
    print(`<span class="prompt"><b class="u">visitante</b>@<b class="h">guilhermefre</b>:<b class="d">~</b>$</span> ${esc(line)}`);
    if (!line) return;
    hist.push(line);
    hi = hist.length;
    const [cmd, ...rest] = line.split(/\s+/);
    const arg = rest.join(" ");
    const key = cmd.toLowerCase();
    if (COMMANDS[key]) COMMANDS[key](arg);
    else if (ALIASES[key]) openFile(ALIASES[key]);
    else if (byName(key)) openFile(key);
    else print(`comando não encontrado: ${esc(cmd)} — digite <span class="t-ok">help</span>`, "t-err");
  }

  termIn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { run(termIn.value); termIn.value = ""; }
    else if (e.key === "ArrowUp") { e.preventDefault(); if (hi > 0) termIn.value = hist[--hi]; }
    else if (e.key === "ArrowDown") { e.preventDefault(); hi = Math.min(hist.length, hi + 1); termIn.value = hist[hi] || ""; }
    else if (e.key === "Tab") {
      e.preventDefault();
      const parts = termIn.value.split(" ");
      const last = parts.pop().toLowerCase();
      const pool = parts.length ? FILES.map((x) => x.name) : [...Object.keys(COMMANDS), ...Object.keys(ALIASES)];
      const m = pool.filter((x) => x.toLowerCase().startsWith(last));
      if (m.length === 1) termIn.value = [...parts, m[0]].join(" ");
      else if (m.length > 1) print(m.join("   "), "t-dim");
    } else if (e.key === "l" && e.ctrlKey) { e.preventDefault(); COMMANDS.clear(); }
  });
  $("#term").addEventListener("click", () => { if (!getSelection().toString()) termIn.focus(); });

  /* ---------- command palette ---------- */
  const palette = $("#palette"), pIn = $("#paletteIn"), pList = $("#paletteList");
  const ACTIONS = [
    ...FILES.map((x) => ({ label: x.name, hint: x.desc, run: () => openFile(x.name) })),
    { label: "> Abrir LinkedIn", hint: "perfil profissional", run: () => window.open(linkedin, "_blank", "noopener") },
    { label: "> Alternar terminal", hint: "Ctrl+`", run: () => toggleTerminal() },
    { label: "> Alternar explorador", hint: "Ctrl+B", run: () => toggleExplorer() },
  ];
  let pItems = [], pSel = 0;
  function renderPalette() {
    const q = pIn.value.toLowerCase().replace(/^>\s*/, "");
    pItems = ACTIONS.filter((a) => (a.label + a.hint).toLowerCase().includes(q));
    pSel = Math.min(pSel, Math.max(0, pItems.length - 1));
    pList.innerHTML = pItems.map((a, i) => `<li class="${i === pSel ? "sel" : ""}" data-i="${i}">${esc(a.label)}<span>${esc(a.hint)}</span></li>`).join("");
  }
  function showPalette(show) {
    palette.hidden = !show;
    if (show) { pIn.value = ""; pSel = 0; renderPalette(); pIn.focus(); }
  }
  pIn.addEventListener("input", () => { pSel = 0; renderPalette(); });
  pIn.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); pSel = (pSel + 1) % (pItems.length || 1); renderPalette(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); pSel = (pSel - 1 + pItems.length) % (pItems.length || 1); renderPalette(); }
    else if (e.key === "Enter" && pItems[pSel]) { showPalette(false); pItems[pSel].run(); }
    else if (e.key === "Escape") showPalette(false);
  });
  pList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (li) { showPalette(false); pItems[+li.dataset.i].run(); }
  });
  palette.addEventListener("click", (e) => { if (e.target === palette) showPalette(false); });

  /* ---------- eventos globais ---------- */
  document.addEventListener("click", (e) => {
    const close = e.target.closest("[data-close]");
    if (close) { e.stopPropagation(); return closeFile(close.dataset.close); }
    const o = e.target.closest("[data-open]");
    if (o) openFile(o.dataset.open);
  });
  document.addEventListener("auxclick", (e) => {
    const tab = e.target.closest(".tab");
    if (tab && e.button === 1) closeFile(tab.dataset.open);
  });
  document.addEventListener("keydown", (e) => {
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key.toLowerCase() === "k") { e.preventDefault(); showPalette(palette.hidden); }
    else if (mod && e.key.toLowerCase() === "p") { e.preventDefault(); showPalette(true); }
    else if (mod && e.key.toLowerCase() === "b") { e.preventDefault(); toggleExplorer(); }
    else if (e.ctrlKey && e.key === "`") { e.preventDefault(); toggleTerminal(); }
    else if (e.key === "Escape" && !palette.hidden) showPalette(false);
  });
  $("#toggleExplorer").addEventListener("click", () => toggleExplorer());
  $("#scrim").addEventListener("click", () => toggleExplorer(false));
  $("#toggleTerminal").addEventListener("click", () => toggleTerminal());
  $("#closeTerminal").addEventListener("click", () => toggleTerminal(false));
  $("#paletteBtn").addEventListener("click", () => showPalette(true));
  let wasMobile = isMobile();
  window.addEventListener("resize", () => {
    if (isMobile() !== wasMobile) { wasMobile = isMobile(); if (active === "stack.config.js") renderEditor(); }
  });
  window.addEventListener("hashchange", () => openFile(decodeURIComponent(location.hash.slice(2)), { push: false }));

  /* ---------- init ---------- */
  $("#actLinkedin").href = linkedin;
  $("#sbLinkedin").href = linkedin;
  $("#sbStatus").innerHTML = D.disponivel ? `<span class="pulse"></span>open to work` : "✓ pronto";
  if (isMobile()) { toggleExplorer(false); toggleTerminal(false); }

  const fromHash = decodeURIComponent(location.hash.slice(2));
  if (!(fromHash && openFile(fromHash, { push: false }))) openFile("README.md", { push: false });

  print(`<span class="t-dim">Bem-vindo(a)! Digite</span> <span class="t-ok">help</span> <span class="t-dim">para ver os comandos ou</span> <span class="t-ok">linkedin</span> <span class="t-dim">para ver meu perfil profissional.</span>`);
})();
