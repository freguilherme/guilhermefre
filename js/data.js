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
    "Desenvolvedor Sênior com foco em GeneXus e PL/SQL, atuando na evolução de plataformas corporativas, integrações e performance. Também crio produtos SaaS com IA e sites com a identidade visual de pessoas e empresas.",
  sobre: [
    "Minha especialidade é reduzir complexidade, otimizar rotinas críticas e transformar código em soluções simples, escaláveis e sustentáveis.",
    "Tenho experiência prática em desenvolvimento Web e Mobile com GeneXus, integrações via APIs REST/SOAP e Webhooks, rotinas PL/SQL em Oracle (procedures, functions e packages) e sustentação de sistemas corporativos com análise de causa raiz.",
    "Fora do dia a dia corporativo, criei sozinho um SaaS com IA para terapeutas autônomos e clínicas, e desenvolvo sites sob medida com a identidade visual de cada cliente.",
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
    "banco de dados": ["PL/SQL", "Oracle", "SQL Tuning", "MySQL", "DBeaver"],
    "desenvolvimento": ["GeneXus", "K2BTools", "C#", "FoxPro"],
    "integrações": ["APIs REST", "SOAP", "Webhooks"],
    "web & ferramentas": ["HTML", "CSS", "JavaScript", "Git", "Clean Code"],
  },

  projetos: [
    {
      nome: "OT Manager",
      status: "em desenvolvimento",
      descricao:
        "SaaS com inteligência artificial para gestão de terapeutas autônomos e clínicas de grande porte. Projeto criado por mim de ponta a ponta — do produto ao código.",
      tags: ["SaaS", "IA", "Saúde", "Produto próprio"],
      demo: "https://ot-manager-frontend.vercel.app/",
      demoLabel: "conhecer o projeto ↗",
    },
    {
      nome: "Giovanna Luvizotto",
      status: "site no ar",
      descricao:
        "Site profissional sob medida, construído com a identidade visual da cliente. Exemplo dos sites que desenvolvo para pessoas e empresas.",
      tags: ["Site", "Identidade visual", "Responsivo"],
      demo: "https://www.giovannaluvizotto.com.br/",
      demoLabel: "ver o site ↗",
    },
    {
      nome: "Este portfólio",
      status: "site no ar",
      descricao:
        "Portfólio em página única com visual inspirado no VS Code, feito com HTML, CSS e JavaScript puros.",
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
