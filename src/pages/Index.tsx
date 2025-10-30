import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const portfolioItems = [
    {
      id: 1,
      title: 'Корпоративный фильм',
      category: 'Коммерческая съёмка',
      thumbnail: 'https://cdn.poehali.dev/projects/8620292b-017e-471e-8e03-c82fc66f98b2/files/22e6d940-74d2-4d3a-9bc4-149b3d2c3e1f.jpg'
    },
    {
      id: 2,
      title: 'Музыкальный клип',
      category: 'Креативное видео',
      thumbnail: 'https://cdn.poehali.dev/projects/8620292b-017e-471e-8e03-c82fc66f98b2/files/a266e445-c23d-4f42-9a35-9e9db30f93b8.jpg'
    },
    {
      id: 3,
      title: 'Документальный проект',
      category: 'Документалистика',
      thumbnail: 'https://cdn.poehali.dev/projects/8620292b-017e-471e-8e03-c82fc66f98b2/files/50b05137-6efb-4590-8999-63943bde9b71.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">VIDEOGRAPHER</h1>
            <div className="flex gap-8">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Создаю истории
                <br />
                <span className="text-primary">через видео</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Профессиональная видеосъёмка и монтаж для коммерческих проектов, музыкальных клипов и документальных фильмов
              </p>
              <Button size="lg" className="mt-4">
                <a href="#portfolio">Смотреть работы</a>
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/8620292b-017e-471e-8e03-c82fc66f98b2/files/22e6d940-74d2-4d3a-9bc4-149b3d2c3e1f.jpg"
                alt="Видеограф за работой"
                className="rounded-lg w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Портфолио</h3>
            <p className="text-muted-foreground">Избранные работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary mb-2">{item.category}</p>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Связаться со мной</h3>
            <p className="text-muted-foreground">Готов обсудить ваш проект</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 border-border bg-card">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h5 className="font-semibold mb-1">Email</h5>
                    <p className="text-muted-foreground">hello@videographer.com</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-border bg-card">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h5 className="font-semibold mb-1">Телефон</h5>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </Card>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-secondary border-border min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Videographer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
