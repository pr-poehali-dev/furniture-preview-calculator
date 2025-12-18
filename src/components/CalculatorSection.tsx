import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CalculatorSectionProps {
  dimensions: { width: number; height: number };
  setDimensions: (dimensions: { width: number; height: number }) => void;
  deliveryDistance: number;
  setDeliveryDistance: (distance: number) => void;
  selectedMaterial: string;
  setSelectedMaterial: (material: string) => void;
}

export default function CalculatorSection({
  dimensions,
  setDimensions,
  deliveryDistance,
  setDeliveryDistance,
  selectedMaterial,
  setSelectedMaterial
}: CalculatorSectionProps) {
  const calculatePrice = () => {
    const basePrice = 5000;
    const materialMultiplier = selectedMaterial === 'premium' ? 1.5 : selectedMaterial === 'standard' ? 1.2 : 1;
    const furniturePrice = (dimensions.width * dimensions.height * basePrice) / 10000 * materialMultiplier;
    const deliveryPrice = deliveryDistance * 50;
    return { furniture: Math.round(furniturePrice), delivery: deliveryPrice, total: Math.round(furniturePrice + deliveryPrice) };
  };

  const prices = calculatePrice();

  return (
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
  );
}
