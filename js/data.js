/* ============================================================
 *  EDITE AQUI — todo o conteúdo do portfólio fica neste arquivo.
 * ============================================================ */
window.PORTFOLIO = {
  nome: "Guilherme Fré",
  usuario: "guilhermefre",
  cargo: "Desenvolvedor Sênior",
  local: "São Pedro, SP — Brasil",
  disponivel: true, // mostra "open to work" na status bar
  resumo:
    "Desenvolvedor Sênior com foco em GeneXus e PL/SQL, atuando na evolução de plataformas corporativas, integrações e performance. Também criei o CRESCER, um SaaS com IA para clínicas de terapia, e desenvolvo sites com a identidade visual de pessoas e empresas.",
  sobre: [
    "Minha especialidade é reduzir complexidade, otimizar rotinas críticas e transformar código em soluções simples, escaláveis e sustentáveis.",
    "Tenho experiência prática em desenvolvimento Web e Mobile com GeneXus, integrações via APIs REST/SOAP e Webhooks, rotinas PL/SQL em Oracle (procedures, functions e packages) e sustentação de sistemas corporativos com análise de causa raiz.",
    "Fora do dia a dia corporativo, criei sozinho o CRESCER, um SaaS com IA para terapeutas autônomos e clínicas — React, Node.js, PostgreSQL e Stripe, com foco em segurança e LGPD —, e desenvolvo sites sob medida com a identidade visual de cada cliente.",
    "Trabalho com foco em clareza técnica, autonomia e resultados reais — não apenas entregas de tarefas.",
  ],
  foco: [
    "Performance e PL/SQL",
    "Integrações e APIs",
    "SaaS com IA",
    "Sites com identidade visual",
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/freguilherme",
    github: "https://github.com/freguilherme",
    email: "", // opcional, ex.: "voce@email.com"
  },

  // da mais recente para a mais antiga
  experiencia: [
    {
      cargo: "Desenvolvedor Sênior",
      empresa: "Cyncly",
      periodo: "set 2023 — atual",
      descricao:
        "Desenvolvimento de novas funcionalidades, evolução de módulos e sustentação da plataforma. Criação de APIs REST e Webhooks, desenvolvimento Web/Mobile com GeneXus, otimização de rotinas PL/SQL em Oracle com foco em performance e confiabilidade de dados, e suporte a um módulo CRM em C#.",
      stack: ["GeneXus", "PL/SQL", "Oracle", "REST", "Webhooks", "C#"],
    },
    {
      cargo: "Desenvolvedor Pleno",
      empresa: "Cyncly",
      periodo: "mai 2022 — set 2023",
      descricao:
        "Novas funcionalidades e evolução de módulos com GeneXus Web/Mobile, integrações via APIs REST, rotinas PL/SQL em Oracle e manutenção de código legado com análise de causa raiz (RCA).",
      stack: ["GeneXus", "PL/SQL", "Oracle", "REST"],
    },
    {
      cargo: "Desenvolvedor Web",
      empresa: "Cybelar",
      periodo: "mar 2021 — abr 2022",
      descricao:
        "Desenvolvimento Web com GeneXus e K2BTools, integrações via APIs REST, manutenção e evolução de código legado e melhoria contínua da plataforma.",
      stack: ["GeneXus", "K2BTools", "REST"],
    },
    {
      cargo: "Analista de Sistemas",
      empresa: "TOL Informática e Sistemas",
      periodo: "jan 2017 — mar 2021",
      descricao:
        "Desenvolvimento Windows com FoxPro para varejo e indústria, SQL com MySQL, testes e qualidade, suporte técnico e implantação de sistemas e hardwares para automação.",
      stack: ["FoxPro", "MySQL", "SQL"],
    },
  ],

  formacao: "Tecnólogo em Análise e Desenvolvimento de Sistemas — Universidade Paulista (2016–2017)",

  // tecnologias agrupadas por área
  stack: {
    "banco de dados": ["PL/SQL", "Oracle", "PostgreSQL", "SQL Tuning", "MySQL", "DBeaver"],
    "back-end": ["GeneXus", "Node.js", "Express", "C#", "K2BTools", "FoxPro"],
    "front-end": ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"],
    "integrações": ["APIs REST", "SOAP", "Webhooks", "Stripe", "WhatsApp Business"],
    "qualidade & deploy": ["Git", "GitHub Actions", "Vitest", "Playwright", "Vercel", "Clean Code"],
  },

  projetos: [
    {
      nome: "CRESCER",
      subtitulo: "SaaS para clínicas de terapia",
      destaque: true, // card largo, no topo
      status: "em desenvolvimento",
      descricao:
        "Agenda, prontuário e financeiro da clínica num lugar só — para fisioterapia, terapia ocupacional, fonoaudiologia e psicologia, de terapeutas autônomos a clínicas de grande porte. Criei sozinho, do produto à arquitetura, com IA gerando rascunhos de relatórios clínicos.",
      destaques: [
        "Multi-tenant com isolamento por clínica: filtro por empresa_id + Row Level Security no PostgreSQL",
        "LGPD by design: verificação em duas etapas (TOTP), sessão revogável e nenhum dado de paciente em logs",
        "Assinatura com Stripe: 3 planos, 14 dias grátis, troca de plano com cobrança proporcional",
        "Lembretes e confirmação de presença pelo WhatsApp Business e integração com Google Agenda",
        "Arquitetura em camadas verificada no CI, com testes de unidade, integração, E2E e mutação",
      ],
      metricas: [
        { valor: "~1.000", rotulo: "testes automatizados" },
        { valor: "216+", rotulo: "issues e PRs" },
        { valor: "3", rotulo: "planos de assinatura" },
      ],
      tags: ["React", "TypeScript", "Vite", "PWA", "Node.js", "Express", "PostgreSQL", "Stripe", "IA", "Vercel", "GitHub Actions", "Playwright", "Vitest", "Sentry"],
      demo: "https://ot-manager-frontend.vercel.app/",
      demoLabel: "conhecer o projeto ↗",
    },
    {
      nome: "Dra. Giovanna Luvizotto",
      subtitulo: "Site de fisioterapia pediátrica",
      status: "site no ar",
      descricao:
        "Site institucional de página única com a identidade visual da profissional: paleta derivada do cartão de visita, logo recortado do cartão e contato direto pelo WhatsApp.",
      destaques: [
        "Paleta e tipografia (Fraunces + Inter) criadas a partir do cartão de visita",
        "Logo extraído com Python (Pillow + NumPy) e fundo removido por chroma key",
        "Animações leves com IntersectionObserver, respeitando movimento reduzido",
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "Python", "Playwright", "Netlify"],
      demo: "https://www.giovannaluvizotto.com.br/",
      demoLabel: "ver o site ↗",
    },
    {
      nome: "Este portfólio",
      subtitulo: "Página única com visual de IDE",
      status: "site no ar",
      descricao:
        "Portfólio inspirado no VS Code, feito sem frameworks: conteúdo em um único arquivo de dados, animações leves e layout responsivo.",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/freguilherme/guilhermefre",
    },
  ],

  // chamada exibida abaixo dos projetos
  servico: {
    titulo: "Precisa de um site com a sua identidade visual?",
    texto: "Desenvolvo sites sob medida para profissionais e empresas, do layout à publicação.",
  },
};
