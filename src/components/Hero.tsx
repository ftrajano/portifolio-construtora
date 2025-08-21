import { Button } from "./ui/button";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construção moderna profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Construindo o
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              {" "}Futuro
            </span>
            <br />
            da sua Família
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Mais de 25 anos transformando sonhos em realidade. Construção residencial, 
            comercial e reformas com qualidade garantida e prazo cumprido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="gold" size="lg" className="text-lg">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary">
              Ver Projetos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-construction-gold mr-2" />
                <span className="text-3xl font-bold text-white">25+</span>
              </div>
              <p className="text-white/80">Anos de Experiência</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-construction-gold mr-2" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/80">Projetos Entregues</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-construction-gold mr-2" />
                <span className="text-3xl font-bold text-white">100%</span>
              </div>
              <p className="text-white/80">No Prazo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;