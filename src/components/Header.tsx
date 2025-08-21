import { Building2, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">ConstrutoraPro</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>(11) 9999-8888</span>
            </div>
            <Button variant="hero" size="sm">
              Orçamento Grátis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;