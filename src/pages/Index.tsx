import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface FurnitureItem {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  style: string;
  description: string;
}

const furnitureData: FurnitureItem[] = [
  { id: 1, title: 'Современная кухня "Лофт"', category: 'kitchen', price: 185000, image: '🏠', style: 'modern', description: 'Минималистичный дизайн с акцентом на функциональность' },
  { id: 2, title: 'Классическая кухня "Прованс"', category: 'kitchen', price: 220000, image: '🍽️', style: 'classic', description: 'Изящные формы и натуральные материалы' },
  { id: 3, title: 'Шкаф-купе "Элегант"', category: 'wardrobe', price: 95000, image: '🚪', style: 'modern', description: 'Зеркальные двери и продуманное наполнение' },
  { id: 4, title: 'Гардеробная "Люкс"', category: 'wardrobe', price: 145000, image: '👔', style: 'luxury', description: 'Просторная система хранения премиум-класса' },
  { id: 5, title: 'Прихожая "Компакт"', category: 'hallway', price: 45000, image: '🎒', style: 'modern', description: 'Идеальное решение для небольших помещений' },
  { id: 6, title: 'Детская "Радуга"', category: 'kids', price: 125000, image: '🎨', style: 'modern', description: 'Яркая и безопасная мебель для детей' },
  { id: 7, title: 'Ванная "Аква"', category: 'bathroom', price: 78000, image: '🛁', style: 'modern', description: 'Влагостойкие материалы и стильный дизайн' },
  { id: 8, title: 'Кухня "Скандинавия"', category: 'kitchen', price: 195000, image: '☕', style: 'scandinavian', description: 'Светлые тона и натуральное дерево' },
];

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

  const calculatePrice = () => {
    const basePrice = 5000;
    const materialMultiplier = selectedMaterial === 'premium' ? 1.5 : selectedMaterial === 'standard' ? 1.2 : 1;
    const furniturePrice = (dimensions.width * dimensions.height * basePrice) / 10000 * materialMultiplier;
    const deliveryPrice = deliveryDistance * 50;
    return { furniture: Math.round(furniturePrice), delivery: deliveryPrice, total: Math.round(furniturePrice + deliveryPrice) };
  };

  const prices = calculatePrice();

  const filteredFurniture = furnitureData.filter(item => 
    (furnitureType === 'all' || item.category === furnitureType) &&
    (furnitureStyle === 'all' || item.style === furnitureStyle)
  );

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MebelStudio
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

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
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

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              <Icon name="Package" className="w-3 h-3 mr-1" />
              Каталог
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Готовые решения</h2>
            <p className="text-xl text-muted-foreground">Выберите готовый проект или создайте свой уникальный</p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
              <TabsTrigger value="all" onClick={() => setFurnitureType('all')}>Все</TabsTrigger>
              <TabsTrigger value="kitchen" onClick={() => setFurnitureType('kitchen')}>Кухни</TabsTrigger>
              <TabsTrigger value="wardrobe" onClick={() => setFurnitureType('wardrobe')}>Шкафы</TabsTrigger>
              <TabsTrigger value="hallway" onClick={() => setFurnitureType('hallway')}>Прихожие</TabsTrigger>
              <TabsTrigger value="kids" onClick={() => setFurnitureType('kids')}>Детские</TabsTrigger>
              <TabsTrigger value="bathroom" onClick={() => setFurnitureType('bathroom')}>Ванные</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex gap-4 mb-8">
            <Select value={furnitureStyle} onValueChange={setFurnitureStyle}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Стиль" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все стили</SelectItem>
                <SelectItem value="modern">Современный</SelectItem>
                <SelectItem value="classic">Классический</SelectItem>
                <SelectItem value="luxury">Люкс</SelectItem>
                <SelectItem value="scandinavian">Скандинавский</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFurniture.map((item) => (
              <Card key={item.id} className="hover-lift overflow-hidden border-border/50 bg-card/80 backdrop-blur">
                <CardHeader className="pb-4">
                  <div className="text-7xl mb-4 text-center">{item.image}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{item.style}</Badge>
                    <span className="text-2xl font-bold text-primary">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary">
              <Icon name="Calculator" className="w-3 h-3 mr-1" />
              Калькулятор
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Рассчитайте стоимость</h2>
            <p className="text-xl text-muted-foreground">Получите предварительную смету за 2 минуты</p>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle>Параметры мебели</CardTitle>
              <CardDescription>Укажите размеры и характеристики</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Тип мебели</Label>
                <Select defaultValue="kitchen">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen">Кухня</SelectItem>
                    <SelectItem value="wardrobe">Шкаф/Гардеробная</SelectItem>
                    <SelectItem value="hallway">Прихожая</SelectItem>
                    <SelectItem value="kids">Детская</SelectItem>
                    <SelectItem value="bathroom">Ванная</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Ширина (см): {dimensions.width}</Label>
                  <Slider
                    value={[dimensions.width]}
                    onValueChange={(val) => setDimensions({ ...dimensions, width: val[0] })}
                    min={100}
                    max={600}
                    step={10}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Высота (см): {dimensions.height}</Label>
                  <Slider
                    value={[dimensions.height]}
                    onValueChange={(val) => setDimensions({ ...dimensions, height: val[0] })}
                    min={180}
                    max={300}
                    step={10}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Материалы</Label>
                <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Эконом (ЛДСП)</SelectItem>
                    <SelectItem value="standard">Стандарт (МДФ)</SelectItem>
                    <SelectItem value="premium">Премиум (Массив)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Расстояние доставки (км): {deliveryDistance}</Label>
                <Slider
                  value={[deliveryDistance]}
                  onValueChange={(val) => setDeliveryDistance(val[0])}
                  min={0}
                  max={100}
                  step={5}
                />
              </div>

              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-lg mb-4">Предварительная смета</h3>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Изготовление мебели:</span>
                  <span className="font-semibold">{prices.furniture.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка:</span>
                  <span className="font-semibold">{prices.delivery.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-xl">
                  <span className="font-bold">Итого:</span>
                  <span className="font-bold text-primary">{prices.total.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Icon name="Send" className="w-5 h-5 mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

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
            <h2 className="text-5xl font-bold mb-6">MebelStudio</h2>
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
          <p className="mb-2">© 2024 MebelStudio. Все права защищены.</p>
          <p className="text-sm">Создание корпусной мебели премиум-класса с 2010 года</p>
        </div>
      </footer>
    </div>
  );
}
