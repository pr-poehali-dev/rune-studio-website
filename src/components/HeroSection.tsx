import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40 animation-delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse opacity-30 animation-delay-2000" />
      </div>

      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-6xl md:text-8xl mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            RUNE STUDIO
          </h1>

          <p className="font-roboto text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Создаем захватывающие игры, которые меняют представление о
            виртуальных мирах
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Смотреть игры
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Users" className="mr-2 h-5 w-5" />О команде
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-primary mb-2">
                5+
              </div>
              <div className="font-roboto text-sm text-muted-foreground">
                Игр выпущено
              </div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-accent mb-2">
                100K+
              </div>
              <div className="font-roboto text-sm text-muted-foreground">
                Игроков
              </div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-primary mb-2">
                3
              </div>
              <div className="font-roboto text-sm text-muted-foreground">
                Года опыта
              </div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-accent mb-2">
                15+
              </div>
              <div className="font-roboto text-sm text-muted-foreground">
                Наград
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
