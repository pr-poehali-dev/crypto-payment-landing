import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо! Мы свяжемся с вами: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary">CryptoPay</h1>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-primary transition-colors">
              Тарифы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Оплата криптовалютой.<br />Без лишних комиссий.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Платформа для приема платежей в криптовалюте с минимальными комиссиями за транзакции. Просто, быстро, выгодно.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('pricing')} size="lg" className="text-lg px-8">
                  Начать
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="text-lg px-8">
                  Связаться
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Icon name="TrendingDown" size={24} />
                    <span className="text-3xl font-bold">0.5%</span>
                  </div>
                  <p className="text-sm text-gray-600">Минимальная комиссия</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Icon name="Shield" size={24} />
                    <span className="text-3xl font-bold">24/7</span>
                  </div>
                  <p className="text-sm text-gray-600">Защита средств</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Icon name="Zap" size={24} />
                    <span className="text-3xl font-bold">< 1 мин</span>
                  </div>
                  <p className="text-sm text-gray-600">Скорость транзакций</p>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a6bce5c2-b452-46df-811c-3195dc87f406/files/bd4aa8d7-5906-464e-8f80-7f8d7d82c99e.jpg" 
                alt="Crypto Payment Platform" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Прозрачные тарифы</h2>
            <p className="text-xl text-gray-600">Выберите план, который подходит именно вам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Старт</CardTitle>
                <CardDescription className="text-lg">Для малого бизнеса</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-secondary">0.8%</span>
                  <span className="text-gray-600 ml-2">за транзакцию</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>До 1000 транзакций/месяц</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Базовая поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>API доступ</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-primary text-white border-primary relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-xs font-bold">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Бизнес</CardTitle>
                <CardDescription className="text-blue-100 text-lg">Для растущих компаний</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">0.5%</span>
                  <span className="text-blue-100 ml-2">за транзакцию</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                    <span>До 10 000 транзакций/месяц</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                    <span>Приоритетная поддержка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                    <span>API + Webhooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="mt-1 flex-shrink-0" />
                    <span>Аналитика и отчеты</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Энтерпрайз</CardTitle>
                <CardDescription className="text-lg">Для корпораций</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-secondary">0.3%</span>
                  <span className="text-gray-600 ml-2">за транзакцию</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Неограниченно транзакций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Индивидуальная интеграция</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>SLA гарантии</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Связаться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Готовы начать? Оставьте email и мы свяжемся с вами</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваш@email.com"
                required
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <Button type="submit" size="lg" className="w-full text-lg py-6">
              Отправить заявку
            </Button>
          </form>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600">support@cryptopay.com</p>
            </div>
            <div>
              <Icon name="MessageCircle" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Telegram</h3>
              <p className="text-gray-600">@cryptopay_support</p>
            </div>
            <div>
              <Icon name="Clock" size={32} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Поддержка</h3>
              <p className="text-gray-600">24/7 онлайн</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">CryptoPay</h3>
            <p className="text-gray-300 mb-6">Платформа для оплаты товаров и услуг криптовалютой</p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="hover:text-primary transition-colors">О нас</a>
              <a href="#" className="hover:text-primary transition-colors">Документация</a>
              <a href="#" className="hover:text-primary transition-colors">Условия</a>
              <a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a>
            </div>
            <p className="text-sm text-gray-400">© 2024 CryptoPay. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
