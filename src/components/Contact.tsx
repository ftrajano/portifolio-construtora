import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para começar seu projeto? Fale conosco e solicite um orçamento 
            personalizado sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium border-none">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Solicite seu Orçamento
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome Completo
                  </label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  E-mail
                </label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Tipo de Projeto
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Construção Residencial</option>
                  <option>Construção Comercial</option>
                  <option>Reforma</option>
                  <option>Ampliação</option>
                  <option>Projeto Arquitetônico</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Descrição do Projeto
                </label>
                <Textarea 
                  placeholder="Descreva detalhadamente seu projeto..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Solicitar Orçamento Gratuito
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 shadow-soft border-none">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Endereço
                  </h4>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo, SP - CEP: 01310-100
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-none">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Telefone
                  </h4>
                  <p className="text-muted-foreground">
                    (11) 9999-8888<br />
                    (11) 3333-4444
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-none">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    E-mail
                  </h4>
                  <p className="text-muted-foreground">
                    contato@construtorapro.com.br<br />
                    orcamento@construtorapro.com.br
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-none">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;