interface NavigationProps {
  scrollToSection: (section: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PineWood39
          </h1>
          <div className="flex gap-6">
            {['home', 'catalog', 'calculator', 'portfolio', 'about', 'blog', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm hover:text-primary transition-colors capitalize"
              >
                {section === 'home' ? 'Главная' : 
                 section === 'catalog' ? 'Каталог' :
                 section === 'calculator' ? 'Калькулятор' :
                 section === 'portfolio' ? 'Портфолио' :
                 section === 'about' ? 'О нас' :
                 section === 'blog' ? 'Блог' : 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}