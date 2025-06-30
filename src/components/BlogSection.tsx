import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Новый движок для создания RPG",
      excerpt:
        "Разрабатываем собственный игровой движок с упором на создание глубоких ролевых игр...",
      date: "25 июня 2025",
      category: "Технологии",
      readTime: "5 мин",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Анонс: Mystic Realms",
      excerpt:
        "Представляем нашу новую игру в жанре фэнтези с открытым миром и нелинейным сюжетом...",
      date: "22 июня 2025",
      category: "Анонсы",
      readTime: "3 мин",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Искусственный интеллект в играх",
      excerpt:
        "Как мы внедряем ИИ для создания более реалистичного поведения НПС в наших проектах...",
      date: "18 июня 2025",
      category: "Разработка",
      readTime: "7 мин",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-card/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Блог разработки
          </h2>
          <p className="font-roboto text-xl text-muted-foreground max-w-2xl mx-auto">
            Следите за процессом создания игр, новостями студии и техническими
            инсайтами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/90 text-white"
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="font-roboto">{post.date}</span>
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="font-montserrat font-semibold text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="font-roboto text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
                >
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Icon name="BookOpen" className="mr-2 h-5 w-5" />
            Все записи блога
          </Button>
        </div>
      </div>
    </section>
  );
}
