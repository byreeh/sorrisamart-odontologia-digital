import { Github, Linkedin, Mail} from "lucide-react";

interface TeamMember {
  id: number;
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  linkedin: string;
  github: string;
  email: string;
}

export default function Integrantes() {

  const integrantes: TeamMember[] = [
    {
      id: 1,
      nome: "Ilda Afonso",
      rm: "568233",
      turma: "1TDSPA",
      foto: "https://avatars.githubusercontent.com/u/144123734?v=4",
      linkedin: "https://linkedin.com/in/ildaafonso",
      github: "https://github.com/IldaAfonso",
      email: "afonso.ildaa@gmail.com"
    },
    {
      id: 2,
      nome: "Renata Lessa",
      rm: "568510",
      turma: "1TDSPR",
      foto: "https://avatars.githubusercontent.com/u/104004837?v=4",
      linkedin: "https://linkedin.com/in/reehlessa",
      github: "https://github.com/byreeh",
      email: "lessarenata@outlook.com"
    }
  ];

  return (
    <div className="min-h-screen">

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosso Time</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Conheça os integrantes do grupo responsáveis pelo desenvolvimento desta aplicação.
          </p>
        </div>
      </section>


    <section className="py-20 md:py-32">
      <div className="w-full max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {integrantes.map((membro) => (
            <div
              key={membro.id}
              className="group w-full rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{membro.nome}</h3>

                <p className="text-sm text-muted-foreground mb-5">
                  RM: {membro.rm} | Turma: {membro.turma}
                </p>

                <div className="flex gap-3 mb-4">
                  <a className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin size={20} />
                  </a>

                  <a className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github size={20} />
                  </a>

                  <a className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Mail size={20} />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground">
                  {membro.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
