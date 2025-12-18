import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import CalculatorSection from '@/components/CalculatorSection';

const portfolioItems = [
  { id: 1, title: 'Квартира 85м² в ЖК "Лучи"', image: '🏢', category: 'Кухня + Гардеробная', year: '2024' },
  { id: 2, title: 'Частный дом 150м²', image: '🏡', category: 'Полная комплектация', year: '2024' },
  { id: 3, title: 'Студия 42м²', image: '🏘️', category: 'Кухня + Прихожая', year: '2023' },
  { id: 4, title: 'Таунхаус 120м²', image: '🏠', category: 'Детская + Ванная', year: '2023' },
];

const blogPosts = [
  { id: 1, title: 'Тренды корпусной мебели 2024', date: '15 декабря 2024', category: 'Тренды' },
  { id: 2, title: 'Как выбрать фурнитуру для кухни', date: '10 декабря 2024', category: 'Советы' },
  { id: 3, title: 'Организация пространства в гардеробной', date: '5 декабря 2024', category: 'Идеи' },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [furnitureType, setFurnitureType] = useState('kitchen');
  const [furnitureStyle, setFurnitureStyle] = useState('all');
  const [dimensions, setDimensions] = useState({ width: 300, height: 240 });
  const [deliveryDistance, setDeliveryDistance] = useState(10);
  const [selectedMaterial, setSelectedMaterial] = useState('premium');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      <CatalogSection 
        furnitureType={furnitureType}
        setFurnitureType={setFurnitureType}
        furnitureStyle={furnitureStyle}
        setFurnitureStyle={setFurnitureStyle}
      />
      
      <CalculatorSection
        dimensions={dimensions}
        setDimensions={setDimensions}
        deliveryDistance={deliveryDistance}
        setDeliveryDistance={setDeliveryDistance}
        selectedMaterial={selectedMaterial}
        setSelectedMaterial={setSelectedMaterial}
      />

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              <Icon name="Briefcase" className="w-3 h-3 mr-1" />
              Портфолио
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Реализованные решения для наших клиентов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((project) => (
              <Card key={project.id} className="hover-lift overflow-hidden border-border/50 bg-card/80 backdrop-blur">
                <div className="text-8xl py-8 text-center bg-muted/50">{project.image}</div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{project.year}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Icon name="Eye" className="w-4 h-4 mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary">
              <Icon name="Info" className="w-3 h-3 mr-1" />
              О нас
            </Badge>
            <h2 className="text-5xl font-bold mb-6">PineWood39</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы — команда профессионалов с 14-летним опытом создания корпусной мебели премиум-класса. 
              Каждый проект для нас уникален, и мы подходим к его реализации с максимальной ответственностью.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'Target', title: 'Индивидуальный подход', desc: 'Учитываем все пожелания клиента' },
              { icon: 'Gem', title: 'Премиум материалы', desc: 'Работаем только с проверенными поставщиками' },
              { icon: 'Shield', title: 'Гарантия качества', desc: '5 лет гарантии на всю продукцию' },
            ].map((feature, idx) => (
              <Card key={idx} className="text-center border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <Icon name={feature.icon as any} className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              <Icon name="BookOpen" className="w-3 h-3 mr-1" />
              Блог
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground">Советы и идеи от наших экспертов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover-lift border-border/50 bg-card/80 backdrop-blur">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" className="w-4 h-4" />
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Icon name="ArrowRight" className="w-4 h-4 mr-2" />
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary">
              <Icon name="MessageCircle" className="w-3 h-3 mr-1" />
              Контакты
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Ответим на все вопросы и поможем с выбором</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <Icon name="Phone" className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 19:00</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <Icon name="Mail" className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@mebelstudio.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <Icon name="MapPin" className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Примерная, 15</p>
                <p className="text-sm text-muted-foreground mt-1">Шоурум работает по записи</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <Icon name="Clock" className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                <p className="text-muted-foreground">Сб-Вс: 10:00 - 17:00</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" placeholder="Иван Иванов" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Input id="message" placeholder="Опишите ваш проект" />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" className="w-5 h-5 mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-muted/50 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 PineWood39. Все права защищены.</p>
          <p className="text-sm">Создание корпусной мебели премиум-класса с 2010 года</p>
        </div>
      </footer>
    </div>
  );
}