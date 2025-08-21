import { Building, Home, Wrench, Ruler, Truck, Hammer } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Construção Residencial",
      description: "Casas, sobrados e condomínios residenciais com acabamento de primeira qualidade.",
    },
    {
      icon: Building,
      title: "Construção Comercial",
      description: "Prédios comerciais, escritórios e estabelecimentos comerciais sob medida.",
    },
    {
      icon: Wrench,
      title: "Reformas e Ampliações",
      description: "Modernização completa ou parcial de imóveis residenciais e comerciais.",
    },
    {
      icon: Ruler,
      title: "Projetos Arquitetônicos",
      description: "Desenvolvimento de projetos personalizados com nossa equipe de arquitetos.",
    },
    {
      icon: Truck,
      title: "Terraplanagem",
      description: "Preparação de terrenos e movimentação de terra para grandes projetos.",
    },
    {
      icon: Hammer,
      title: "Acabamentos Premium",
      description: "Acabamentos de luxo com materiais de alta qualidade e mão de obra especializada.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-construction-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em construção civil, desde o projeto 
            até a entrega final, com qualidade e pontualidade garantidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-white border-none"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;