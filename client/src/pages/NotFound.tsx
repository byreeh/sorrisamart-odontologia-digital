import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card>
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-1">
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Ops! Página não encontrada
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Poxa! A página que você está procurando não existe. :(
            <br />
            Ela pode ter sido movida ou simplesmente não existir mais por aqui.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar para Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
