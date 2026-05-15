export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="font-bold text-lg mb-4">SorriSmart</h3>
            <p className="text-sm text-muted-foreground">
              Projeto de Front-end Design Engineering com React, Vite e TypeScript.
            </p>
          </div>


          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/integrantes" className="text-muted-foreground hover:text-foreground transition-colors">Integrantes</a></li>
              <li><a href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>


        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} SorriSmart. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
