import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  pergunta: string;
  resposta: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      pergunta: "O que é uma SPA (Single Page Application)?",
      resposta: "Uma SPA é uma aplicação web que carrega uma única página HTML e atualiza dinamicamente o conteúdo sem recarregar a página. React com React Router é perfeito para criar SPAs modernas e responsivas.",
    },
    {
      id: 2,
      pergunta: "Por que usar TypeScript?",
      resposta: "TypeScript adiciona tipagem estática ao JavaScript, permitindo detectar erros em tempo de desenvolvimento e melhorando a qualidade do código. Também oferece melhor autocompletar e documentação automática.",
    },
    {
      id: 3,
      pergunta: "Qual é a vantagem do Vite no desenvolvimento do projeto?",
      resposta: "Vite oferece build significativamente mais rápido graças ao uso de ES modules nativos. Tem HMR (Hot Module Replacement) mais rápido e uma experiência de desenvolvimento muito mais ágil.",
    },
    {
      id: 4,
      pergunta: "Como o TailwindCSS ajuda na interface do SorriSmart?",
      resposta: "TailwindCSS é um framework CSS utility-first que fornece classes pré-definidas para estilização. Permite criar designs modernos sem escrever CSS customizado, mantendo o código limpo e consistente.",
    },
    {
      id: 5,
      pergunta: "O que é React Hook Form no contexto do projeto?",
      resposta: "React Hook Form é uma biblioteca para gerenciar formulários em React com validação eficiente. Reduz re-renders desnecessários e oferece uma API simples para trabalhar com formulários complexos.",
    },
    {
      id: 6,
      pergunta: "Como funciona a navegação na aplicação SorriSmart?",
      resposta: "Em uma SPA, a navegação é feita no cliente usando bibliotecas como React Router. Wouter é uma alternativa leve que oferece roteamento simples e eficiente sem necessidade de backend.",
    },
    {
      id: 7,
      pergunta: "Qual é a importância da responsividade em uma aplicação de odontologia digital?",
      resposta: "A responsividade garante que a aplicação funcione bem em todos os dispositivos (mobile, tablet, desktop). Com TailwindCSS, é fácil implementar breakpoints e criar layouts que se adaptam automaticamente.",
    },
    {
      id: 8,
      pergunta: "Como foi pensado o deploy da aplicação SorriSmart?",
      resposta: "Existem várias opções: Vercel, Netlify, GitHub Pages, AWS S3, etc. A maioria oferece integração com Git para deploy automático. Basta fazer build com npm run build e fazer upload dos arquivos estáticos.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen">

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Respostas às dúvidas mais comuns sobre o projeto SorriSmart e sua aplicação em odontologia digital.
          </p>
        </div>
      </section>


      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/50 transition-colors text-left"
                >
                  <h3 className="font-semibold text-lg">{faq.pergunta}</h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>


                {openId === faq.id && (
                  <div className="px-6 py-4 border-t border-border bg-background/50">
                    <p className="text-muted-foreground leading-relaxed">{faq.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>


          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border">
            <h3 className="text-xl font-bold mb-2">Não encontrou sua pergunta?</h3>
            <p className="text-muted-foreground mb-4">
              Se você tem dúvidas que não foram respondidas aqui, entre em contato conosco através da página de contato.
            </p>
            <a
              href="/contato"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ir para Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
