import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: "Edifício Residencial Luxury",
      category: "Residencial",
      description: "Prédio de alto padrão com 15 andares, 60 apartamentos e área de lazer completa.",
      area: "12.000m²",
      year: "2023",
    },
    {
      image: project2,
      title: "Casa Moderna Premium",
      category: "Casa",
      description: "Residência contemporânea com design exclusivo e tecnologias sustentáveis.",
      area: "450m²",
      year: "2023",
    },
    {
      image: project3,
      title: "Centro Empresarial",
      category: "Comercial",
      description: "Complexo comercial com 8 andares para escritórios e áreas de convivência.",
      area: "8.500m²",
      year: "2022",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Projetos Realizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e veja a qualidade 
            que entregamos em cada obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-none"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <strong className="text-primary mr-1">Área:</strong> 
                    {project.area}
                  </span>
                  <span className="flex items-center">
                    <strong className="text-primary mr-1">Ano:</strong>
                    {project.year}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;