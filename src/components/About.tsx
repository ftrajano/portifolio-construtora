import { Shield, Clock, Users, Trophy } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Utilizamos apenas materiais de primeira linha e seguimos rigorosos padrões de qualidade.",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Cumprimos prazos estabelecidos com cronograma detalhado e acompanhamento constante.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais experientes e certificados em todas as áreas da construção civil.",
    },
    {
      icon: Trophy,
      title: "Excelência Reconhecida",
      description: "Premiada como melhor construtora da região pelos últimos 3 anos consecutivos.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-construction-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Sobre a ConstrutoraPro
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Fundada em 1998, a ConstrutoraPro nasceu com o objetivo de transformar 
              sonhos em realidade através de construções de excelência. Ao longo de 
              mais de duas décadas, construímos nossa reputação baseada na confiança, 
              qualidade e inovação.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é entregar projetos que superem expectativas, utilizando 
              as melhores práticas do mercado e tecnologias mais avançadas da construção 
              civil, sempre respeitando prazos e orçamentos acordados.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Anos no Mercado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50</div>
                <div className="text-muted-foreground">Profissionais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Nossos Valores
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 bg-white border-none shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;