/* ============================================================
 *  EDITE AQUI — todo o conteúdo do portfólio fica neste arquivo.
 *  Os itens marcados com "TODO" são exemplos para você substituir.
 * ============================================================ */
window.PORTFOLIO = {
  nome: "Guilherme Fré",
  usuario: "guilhermefre",
  cargo: "Desenvolvedor Sênior",
  local: "Brasil", // TODO
  disponivel: true, // mostra "open to work" na status bar
  resumo:
    "Desenvolvo aplicações web do back ao front, com foco em código limpo, performance e uma boa experiência para quem usa.", // TODO
  sobre: [
    // TODO: parágrafos curtos sobre você
    "Sou apaixonado por transformar problemas em software que funciona bem e é fácil de manter.",
    "Gosto de trabalhar perto do produto, entender o negócio e entregar valor em ciclos curtos.",
    "Fora do código, estou sempre estudando novas ferramentas e arquiteturas.",
  ],
  foco: ["APIs e back-end", "Interfaces web", "Arquitetura e boas práticas"], // TODO

  links: {
    linkedin: "https://www.linkedin.com/in/freguilherme",
    github: "https://github.com/freguilherme",
    email: "", // opcional, ex.: "voce@email.com"
  },

  // TODO: sua experiência, da mais recente para a mais antiga
  experiencia: [
    {
      cargo: "Desenvolvedor Full Stack",
      empresa: "Empresa Atual",
      periodo: "2023 — atual",
      descricao: "Desenvolvimento de novas features, APIs REST e manutenção de sistemas em produção.",
      stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    },
    {
      cargo: "Desenvolvedor Back-end",
      empresa: "Empresa Anterior",
      periodo: "2021 — 2023",
      descricao: "Integrações com serviços externos, automações e melhorias de performance.",
      stack: ["Node.js", "Docker", "AWS"],
    },
    {
      cargo: "Estagiário de Desenvolvimento",
      empresa: "Primeira Empresa",
      periodo: "2020 — 2021",
      descricao: "Suporte ao time de desenvolvimento, correção de bugs e testes.",
      stack: ["JavaScript", "HTML", "CSS"],
    },
  ],

  // TODO: tecnologias (nivel de 0 a 100)
  stack: {
    linguagens: [
      { nome: "TypeScript", nivel: 90 },
      { nome: "JavaScript", nivel: 90 },
      { nome: "Python", nivel: 70 },
      { nome: "SQL", nivel: 75 },
    ],
    frontend: [
      { nome: "React", nivel: 85 },
      { nome: "Next.js", nivel: 75 },
      { nome: "HTML/CSS", nivel: 90 },
    ],
    backend: [
      { nome: "Node.js", nivel: 85 },
      { nome: "PostgreSQL", nivel: 75 },
      { nome: "REST APIs", nivel: 85 },
    ],
    ferramentas: [
      { nome: "Git", nivel: 90 },
      { nome: "Docker", nivel: 70 },
      { nome: "AWS", nivel: 60 },
    ],
  },

  // TODO: seus projetos
  projetos: [
    {
      nome: "Projeto Alpha",
      descricao: "Plataforma web para gestão de tarefas com autenticação, dashboards e notificações em tempo real.",
      tags: ["React", "Node.js", "PostgreSQL"],
      repo: "https://github.com/freguilherme",
      demo: "",
    },
    {
      nome: "API Beta",
      descricao: "API REST escalável com documentação OpenAPI, testes automatizados e deploy com Docker.",
      tags: ["TypeScript", "Express", "Docker"],
      repo: "https://github.com/freguilherme",
      demo: "",
    },
    {
      nome: "Automação Gamma",
      descricao: "Scripts de automação que reduziram horas de trabalho manual em processos internos.",
      tags: ["Python", "Cron", "AWS"],
      repo: "",
      demo: "",
    },
  ],
};
