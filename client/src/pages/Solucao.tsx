export default function Solucao() {


  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solução Técnica - Odontologia Digital</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Detalhes da arquitetura, tecnologias e implementação do projeto acadêmico SorriSmart aplicado à odontologia digital.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container space-y-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Arquitetura da Solução</h2>
            <div className="p-8 rounded-xl border border-border bg-card">
              <div className="space-y-4 text-muted-foreground">
                <p>
                 A aplicação foi desenvolvida como uma Single Page Application (SPA) voltada ao contexto de odontologia digital,
                 utilizando React com Vite como build tool.
                </p>
                <p>
                  O roteamento é gerenciado pelo Wouter, permitindo navegação suave entre páginas do sistema sem recarregar a
                  aplicação, simulando uma experiência de plataforma odontológica moderna.
                </p>
                <p>
                  A estilização é feita exclusivamente com TailwindCSS, garantindo consistência visual e responsividade completa
                  em um sistema voltado à experiência do usuário na área de saúde bucal.
                </p>
              </div>
            </div>
          </div>


          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6">Processo de Desenvolvimento Acadêmico</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3">
                  1
                </div>
                <h3 className="font-bold mb-2">Planejamento</h3>
                <p className="text-sm text-muted-foreground">
                  Análise de requisitos e definição da arquitetura do sistema de odontologia digital SorriSmart.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3">
                  2
                </div>
                <h3 className="font-bold mb-2">Implementação</h3>
                <p className="text-sm text-muted-foreground">
                  Implementação de componentes, páginas e funcionalidades utilizando React e TypeScript.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3">
                  3
                </div>
                <h3 className="font-bold mb-2">Testes e Deploy</h3>
                <p className="text-sm text-muted-foreground">
                  Testes de responsividade, validação e publicação da aplicação acadêmica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
