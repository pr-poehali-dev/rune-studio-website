import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Gamepad2" className="h-8 w-8 text-primary" />
          <span className="font-montserrat font-bold text-2xl">
            Rune Studio
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="font-roboto font-medium hover:text-primary transition-colors"
          >
            Главная
          </a>
          <a
            href="#about"
            className="font-roboto font-medium hover:text-primary transition-colors"
          >
            О студии
          </a>
          <a
            href="#games"
            className="font-roboto font-medium hover:text-primary transition-colors"
          >
            Игры
          </a>
          <a
            href="#blog"
            className="font-roboto font-medium hover:text-primary transition-colors"
          >
            Блог
          </a>
          <a
            href="#contact"
            className="font-roboto font-medium hover:text-primary transition-colors"
          >
            Контакты
          </a>
        </nav>

        <Button className="md:hidden" variant="ghost" size="icon">
          <Icon name="Menu" className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
