import { CheckCircle2, BookOpen, Lightbulb } from "lucide-react";

export default function Sobre() {
  const highlights = [
    {
      icon: BookOpen,
      title: "Aprendizado Prático",
      description:
        "Projeto acadêmico desenvolvido na Sprint 3 de Front-end Design Engineering, aplicando conceitos reais de desenvolvimento.",
    },
    {
      icon: Lightbulb,
      title: "Desenvolvimento Moderno",
      description:
        "Uso de React, TypeScript e TailwindCSS para criação de uma SPA moderna, responsiva e escalável.",
    },
    {
      icon: CheckCircle2,
      title: "Qualidade de Código",
      description:
        "Componentização reutilizável, boas práticas de estrutura e foco em manutenção e legibilidade.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre o Projeto SorriSmart - Odontologia Digital
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Um projeto acadêmico voltado à odontologia digital, demonstrando a construção de uma aplicação moderna com React e boas práticas de front-end.
          </p>
        </div>
      </section>


      <section className="py-20 md:py-32">
        <div className="container space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">O que é o SorriSmart?</h2>

              <p className="text-lg text-muted-foreground mb-4">
                O SorriSmart é uma aplicação acadêmica que simula um sistema de odontologia digital,
                construída como uma Single Page Application (SPA).
              </p>

              <p className="text-lg text-muted-foreground mb-4">
                O projeto demonstra a migração de uma aplicação tradicional para uma interface moderna,
                responsiva e componentizada.
              </p>

              <p className="text-lg text-muted-foreground">
                Ele serve como portfólio técnico, evidenciando domínio em desenvolvimento front-end moderno.
              </p>
            </div>


            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-border">
              <div className="space-y-4">

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Planejamento</h4>
                    <p className="text-sm text-muted-foreground">
                      Definição da estrutura e arquitetura do sistema.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Desenvolvimento</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementação com React, TypeScript e TailwindCSS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Entrega</h4>
                    <p className="text-sm text-muted-foreground">
                      Aplicação funcional, responsiva e documentada.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div>
            <h2 className="text-4xl font-bold mb-12 text-center">
              Destaques do Projeto
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}