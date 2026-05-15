import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Formulário enviado:", data);
    setEnviado(true);
    reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <div className="min-h-screen">

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tem dúvidas ou sugestões? Envie uma mensagem para o nosso time.
          </p>
        </div>
      </section>


      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-8">Informações de Contato</h2>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">contato@sorrismart.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(11) XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localização</h3>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>


              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="font-semibold mb-2">Tempo de Resposta</h3>
                <p className="text-sm text-muted-foreground">
                  Respondemos todas as mensagens em até 24 horas úteis.
                </p>
              </div>
            </div>


            <div className="lg:col-span-2">
              <div className="p-8 rounded-xl border border-border bg-card">
                {enviado && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                    <p className="font-semibold">Mensagem enviada com sucesso!</p>
                    <p className="text-sm">Obrigado por entrar em contato. Responderemos em breve.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nome Completo</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      {...register("nome", { required: "Nome é obrigatório" })}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
                  </div>


                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      {...register("email", {
                        required: "Email é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email inválido",
                        },
                      })}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

 
                  <div>
                    <label className="block text-sm font-semibold mb-2">Telefone</label>
                    <input
                      type="tel"
                      placeholder="(11) 98765-4321"
                      {...register("telefone", { required: "Telefone é obrigatório" })}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
                  </div>


                  <div>
                    <label className="block text-sm font-semibold mb-2">Assunto</label>
                    <select
                      {...register("assunto", { required: "Assunto é obrigatório" })}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida sobre o projeto</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="feedback">Feedback</option>
                      <option value="outro">Outro</option>
                    </select>
                    {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>}
                  </div>


                  <div>
                    <label className="block text-sm font-semibold mb-2">Mensagem</label>
                    <textarea
                      placeholder="Sua mensagem aqui..."
                      rows={5}
                      {...register("mensagem", { required: "Mensagem é obrigatória" })}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
                  </div>


                  <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 text-primary-foreground"
                  >
                    <Send size={20} />
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
