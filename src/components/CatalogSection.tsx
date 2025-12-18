import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

interface CatalogSectionProps {
  furnitureType: string;
  setFurnitureType: (type: string) => void;
  furnitureStyle: string;
  setFurnitureStyle: (style: string) => void;
}

export default function CatalogSection({ 
  furnitureType, 
  setFurnitureType, 
  furnitureStyle, 
  setFurnitureStyle 
}: CatalogSectionProps) {
  const filteredFurniture = furnitureData.filter(item => 
    (furnitureType === 'all' || item.category === furnitureType) &&
    (furnitureStyle === 'all' || item.style === furnitureStyle)
  );

  return (
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
  );
}
