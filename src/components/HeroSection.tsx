import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.poehali.dev/projects/730c0016-0a53-4519-9b2f-7ba6b7072ef2/files/79c5b8fa-fd19-4b0e-a97f-98cfb88d851f.jpg"
          alt="Kitchen background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary">
              <Icon name="Sparkles" className="w-3 h-3 mr-1" />
              Премиум качество
            </Badge>
            <h2 className="text-6xl font-extrabold mb-6 leading-tight">
              Мебель вашей
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                мечты
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Создаём уникальные решения для кухонь, гардеробных, прихожих и детских комнат. 
              Индивидуальный подход и безупречное качество с 2010 года.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('calculator')}>
                <Icon name="Calculator" className="w-5 h-5 mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('catalog')}>
                <Icon name="Layout" className="w-5 h-5 mr-2" />
                Посмотреть каталог
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="text-[200px] leading-none opacity-20">🏠</div>
            <div className="absolute top-0 right-0 text-[120px] animate-bounce">✨</div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {[
            { icon: 'Award', title: '14+ лет', desc: 'На рынке' },
            { icon: 'Users', title: '500+', desc: 'Довольных клиентов' },
            { icon: 'CheckCircle2', title: '100%', desc: 'Гарантия качества' },
            { icon: 'Clock', title: '14 дней', desc: 'Средний срок' },
          ].map((stat, idx) => (
            <Card key={idx} className="hover-lift border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6 text-center">
                <Icon name={stat.icon as any} className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="text-3xl font-bold mb-1">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}