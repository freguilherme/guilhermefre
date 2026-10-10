(() => {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);

  /* ---------- helpers ---------- */
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const span = (cls) => (x) => `<span class="${cls}">${esc(x)}</span>`;
  const k = span("k"), n = span("n"), p = span("p"), f = span("f"), t = span("t"), c = span("c"), u = span("u");
  const s = (x) => span("s")(`"${x}"`);
  const ind = (lvl) => "  ".repeat(lvl);
  const arr = (items) => u("[") + items.map(s).join(u(", ")) + u("]");
  const ext = (url, html, cls = "") => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener">${html}</a>`;
  const linkedin = D.links.linkedin;

  // hash curto e determinístico, estilo commit do git
  const hash = (str) => {
    let h = 5381;
    for (const ch of str) h = ((h << 5) + h + ch.charCodeAt(0)) >>> 0;
    return h.toString(16).padStart(7, "0").slice(0, 7);
  };

  const SECTIONS = [
    { id: "inicio", file: "README.md", label: "Início", icon: "M↓", color: "#519aba" },
    { id: "sobre", file: "sobre.ts", label: "Sobre", icon: "TS", color: "#3178c6" },
    { id: "experiencia", file: "experiencia.json", label: "Experiência", icon: "{}", color: "#cbcb41" },
    { id: "stack", file: "stack.config.js", label: "Tecnologias", icon: "JS", color: "#f1e05a" },
    { id: "projetos", file: "projetos.jsx", label: "Projetos", icon: "⚛", color: "#61dafb" },
    { id: "contato", file: "contato.sh", label: "Contato", icon: "$", color: "#89e051" },
  ];
  const sec = (id) => SECTIONS.find((x) => x.id === id);
  const ficon = (x) => `<span class="ficon" style="color:${x.color}">${esc(x.icon)}</span>`;

  /* ---------- componentes ---------- */
  const codeWindow = (title, icon, lines, { numbered = true, cls = "" } = {}) => `
    <div class="window ${cls}">
      <div class="window-bar">
        <span class="dots" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="window-title">${icon || ""}${esc(title)}</span>
      </div>
      <div class="code ${numbered ? "" : "no-ln"}">${lines.map((l) => `<div class="ln"><span class="c0">${l || " "}</span></div>`).join("")}</div>
    </div>`;

  const sectionHead = (id, num, title, subtitle) => {
    const x = sec(id);
    return `<header class="sec-head reveal">
      <span class="sec-file">${ficon(x)}${esc(x.file)}</span>
      <h2><span class="num">${num}.</span> ${esc(title)}</h2>
      ${subtitle ? `<p class="sec-sub">// ${esc(subtitle)}</p>` : ""}
    </header>`;
  };

  /* ---------- seções ---------- */
  function hero() {
    const prompt = `<span class="pr">➜</span> <span class="pd">~</span>`;
    const term = [
      `${prompt} whoami`,
      `<span class="out">${esc(D.nome)} · ${esc(D.cargo)}</span>`,
      `${prompt} cat foco.txt`,
      ...D.foco.map((x) => `<span class="out">▸ ${esc(x)}</span>`),
      `${prompt} ./contato.sh --linkedin`,
      `<span class="out ok">✓ ${ext(linkedin, "abrir perfil profissional ↗")}</span>`,
      `${prompt} <span class="cursor"></span>`,
    ];
    return `<section id="inicio" class="hero">
      <div class="hero-text reveal">
        <div class="hi">// olá, mundo! eu sou</div>
        <h1>${esc(D.nome)}</h1>
        <h2 class="typed-line"><span id="typed">${esc(D.cargo)}</span><span class="cursor"></span></h2>
        <p class="lead">${esc(D.resumo)}</p>
        <div class="btns">
          ${ext(linkedin, "in/ Ver meu LinkedIn ↗", "btn primary")}
          <a class="btn" href="#projetos">▶ Ver projetos</a>
          ${D.links.github ? ext(D.links.github, "⌥ GitHub ↗", "btn") : ""}
        </div>
        ${D.disponivel ? `<p class="status-pill"><span class="pulse"></span>Disponível para novas oportunidades</p>` : ""}
      </div>
      <div class="hero-visual reveal">${codeWindow("bash — guilhermefre", "", term, { numbered: false, cls: "terminal" })}</div>
      <a class="scroll-hint" href="#sobre" aria-label="Rolar para Sobre">↓</a>
    </section>`;
  }

  function sobre() {
    const obj = [
      `${k("const")} ${p("guilherme")} ${u("= {")}`,
      `${ind(1)}${p("cargo")}${u(":")} ${s(D.cargo)}${u(",")}`,
      `${ind(1)}${p("local")}${u(":")} ${s(D.local)}${u(",")}`,
      `${ind(1)}${p("foco")}${u(":")} ${arr(D.foco)}${u(",")}`,
      `${ind(1)}${p("disponivel")}${u(":")} ${k(String(!!D.disponivel))}${u(",")}`,
      u("};"),
    ];
    return `<section id="sobre" class="section">
      ${sectionHead("sobre", "01", "Sobre mim", "quem sou eu e como trabalho")}
      <div class="grid-2">
        <div class="prose reveal">${D.sobre.map((x) => `<p>${esc(x)}</p>`).join("")}</div>
        <div class="reveal">${codeWindow("sobre.ts", ficon(sec("sobre")), obj)}</div>
      </div>
    </section>`;
  }

  function experiencia() {
    const items = D.experiencia
      .map(
        (e, i) => `<li class="commit reveal">
          <span class="node ${i === 0 ? "head" : ""}" aria-hidden="true"></span>
          <div class="commit-meta">
            <span class="hash">${hash(e.empresa + e.cargo)}</span>
            ${i === 0 ? `<span class="badge">HEAD → atual</span>` : ""}
            <span class="period">${esc(e.periodo)}</span>
          </div>
          <h3>${esc(e.cargo)} <span class="at">@ ${esc(e.empresa)}</span></h3>
          <p>${esc(e.descricao)}</p>
          <div class="tags">${(e.stack || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
        </li>`
      )
      .join("");
    return `<section id="experiencia" class="section">
      ${sectionHead("experiencia", "02", "Experiência", "git log --oneline da minha carreira")}
      <ol class="timeline">${items}</ol>
    </section>`;
  }

  function stack() {
    const cards = Object.entries(D.stack)
      .map(
        ([cat, items]) => `<div class="skill-card reveal">
          <div class="skill-head">${f(cat)}<span class="u">: {</span></div>
          <ul>${items
            .map(
              (it) => `<li>
                <span class="skill-name">${esc(it.nome)}</span>
                <span class="meter" role="img" aria-label="${esc(it.nome)}: ${it.nivel}%"><span style="--v:${it.nivel}%"></span></span>
                <span class="n">${it.nivel}</span>
              </li>`
            )
            .join("")}</ul>
          <div class="u">}</div>
        </div>`
      )
      .join("");
    return `<section id="stack" class="section">
      ${sectionHead("stack", "03", "Tecnologias", "ferramentas que uso no dia a dia")}
      <div class="skills">${cards}</div>
    </section>`;
  }

  function projetos() {
    const cards = D.projetos
      .map((pr, i) => {
        const links = [pr.repo && ext(pr.repo, "⌥ código ↗"), pr.demo && ext(pr.demo, "▶ ver online ↗")].filter(Boolean).join("");
        return `<article class="card reveal">
          <div class="card-top"><span>&lt;Projeto id={${i + 1}} /&gt;</span><span aria-hidden="true">📁</span></div>
          <h3>${esc(pr.nome)}</h3>
          <p>${esc(pr.descricao)}</p>
          <div class="tags">${(pr.tags || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
          ${links ? `<div class="card-links">${links}</div>` : ""}
        </article>`;
      })
      .join("");
    return `<section id="projetos" class="section">
      ${sectionHead("projetos", "04", "Projetos", "alguns trabalhos que já entreguei")}
      <div class="cards">${cards}</div>
    </section>`;
  }

  function contato() {
    const prompt = `<span class="pr">➜</span> <span class="pd">~</span>`;
    const lines = [
      `${prompt} ./contato.sh`,
      `<span class="out">Vamos conversar? Meu perfil profissional completo,</span>`,
      `<span class="out">com experiências e recomendações, está no LinkedIn.</span>`,
    ];
    return `<section id="contato" class="section contact">
      ${sectionHead("contato", "05", "Contato", "bora trabalhar juntos")}
      <div class="contact-box reveal">
        ${codeWindow("bash — contato.sh", "", lines, { numbered: false, cls: "terminal" })}
        <div class="btns center">
          ${ext(linkedin, "in/ Conectar no LinkedIn ↗", "btn primary btn-lg")}
          ${D.links.github ? ext(D.links.github, "⌥ GitHub ↗", "btn btn-lg") : ""}
          ${D.links.email ? `<a class="btn btn-lg" href="mailto:${esc(D.links.email)}">✉ ${esc(D.links.email)}</a>` : ""}
        </div>
      </div>
    </section>`;
  }

  /* ---------- render ---------- */
  $("#content").innerHTML = [hero(), sobre(), experiencia(), stack(), projetos(), contato()].join("");
  $("#tabs").innerHTML = SECTIONS.map(
    (x) => `<a class="tab" href="#${x.id}" data-id="${x.id}" title="${esc(x.file)}">${ficon(x)}<span>${esc(x.label)}</span></a>`
  ).join("");
  $("#navLinkedin").href = linkedin;
  $("#sbStatus").innerHTML = D.disponivel ? `<span class="pulse"></span>open to work` : "✓ pronto";
  $("#sbCopy").textContent = `© ${new Date().getFullYear()} ${D.nome} · feito com café e código`;

  /* ---------- aba ativa conforme a rolagem ---------- */
  const tabs = [...document.querySelectorAll(".tab")];
  const setActive = (id) => {
    tabs.forEach((tb) => tb.classList.toggle("active", tb.dataset.id === id));
    tabs.find((tb) => tb.dataset.id === id)?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };
  const spy = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  SECTIONS.forEach((x) => spy.observe(document.getElementById(x.id)));
  setActive("inicio");

  /* ---------- animação de entrada ---------- */
  const reveal = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
    }),
    { rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

  /* ---------- efeito de digitação ---------- */
  const typed = $("#typed");
  const words = [D.cargo, ...D.foco];
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches && words.length > 1) {
    let w = 0, i = words[0].length, del = true;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      typed.textContent = word.slice(0, i);
      let delay = del ? 35 : 70;
      if (!del && i === word.length) { del = true; delay = 2000; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; delay = 300; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 2500);
  }
})();
