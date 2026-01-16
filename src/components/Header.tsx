import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { openTelegram } from "@/lib/utils";

export const Header = () => {
  const isMobile = useIsMobile();
  const [textColor, setTextColor] = useState("#FFFDE0");
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    consentDataProcessing: false,
    consentMarketing: false,
  });

  // Проверяем наличие экрана загрузки (для всех устройств)
  useEffect(() => {
    const checkLoading = () => {
      const loader = document.querySelector('[class*="z-[9999]"]');
      setIsLoading(!!loader);
    };

    // Проверяем каждые 100ms
    const interval = setInterval(checkLoading, 100);

    // Также проверяем при изменении DOM
    const observer = new MutationObserver(checkLoading);
    observer.observe(document.body, { childList: true, subtree: true });

    // Начальная проверка
    checkLoading();

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateTextColor = () => {
      // Получаем все секции и элементы страницы
      const sections = document.querySelectorAll("section, footer, main > div");
      const headerHeight = 100;

      let currentElement: Element | null = null;
      let minDistance = Infinity;

      // Находим элемент, который находится ближе всего к шапке
      sections.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - headerHeight);

        // Проверяем, находится ли элемент в области видимости шапки
        if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
          if (distance < minDistance) {
            minDistance = distance;
            currentElement = element;
          }
        }
      });

      // Если не нашли элемент под шапкой, берем первый видимый
      if (!currentElement) {
        sections.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerHeight && rect.top >= 0) {
            if (Math.abs(rect.top - headerHeight) < minDistance) {
              minDistance = Math.abs(rect.top - headerHeight);
              currentElement = element;
            }
          }
        });
      }

      if (currentElement) {
        const elementId = currentElement.id;
        const elementTag = currentElement.tagName.toLowerCase();
        const elementClasses = currentElement.className;

        // Определяем цвет на основе фона элемента
        // NotFound страница имеет светлый фон (bg-muted)
        if (
          elementClasses.includes("bg-muted") ||
          elementClasses.includes("bg-white") ||
          elementClasses.includes("bg-gray-50")
        ) {
          setTextColor("#2A2A2A"); // Темный текст для светлого фона
        }
        // HeroSection - темный фон (видео)
        else if (
          elementId === "hero" ||
          elementClasses.includes("bg-[#D4C4B0]") ||
          currentElement.querySelector("video")
        ) {
          setTextColor("#FFFDE0"); // Светлый текст для темного фона
        }
        // AboutSection - темный фон (#2A2A2A)
        else if (
          elementId === "about" ||
          elementClasses.includes("bg-[#2A2A2A]")
        ) {
          setTextColor("#FFFDE0"); // Светлый текст для темного фона
        }
        // VideosSection - темный фон (видео)
        else if (elementId === "videos") {
          setTextColor("#FFFDE0"); // Светлый текст для темного фона
        }
        // Footer - темный фон (#2A2A2A)
        else if (
          elementTag === "footer" ||
          elementClasses.includes("bg-[#2A2A2A]")
        ) {
          setTextColor("#FFFDE0"); // Светлый текст для темного фона
        }
        // По умолчанию - светлый текст (для темных фонов)
        else {
          setTextColor("#FFFDE0");
        }
      }
    };

    // Используем Intersection Observer для отслеживания видимых секций
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px 0px 0px", // Учитываем высоту шапки
      threshold: [0, 0.1, 0.5, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      // Находим секцию, которая больше всего видна в области шапки
      let mostVisible: IntersectionObserverEntry | null = null;
      let maxRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisible = entry;
        }
      });

      if (mostVisible) {
        updateTextColor();
      }
    }, observerOptions);

    // Отслеживаем все секции и основные элементы
    const sections = document.querySelectorAll("section, footer, main > div");
    sections.forEach((section) => observer.observe(section));

    // Обновляем цвет при скролле
    window.addEventListener("scroll", updateTextColor, { passive: true });
    window.addEventListener("resize", updateTextColor);

    // Начальное состояние
    updateTextColor();

    return () => {
      window.removeEventListener("scroll", updateTextColor);
      window.removeEventListener("resize", updateTextColor);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Скрываем Header во время загрузки (для всех устройств)
  if (isLoading) {
    return null;
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    // После отправки можно закрыть форму и сбросить данные
    setIsFormOpen(false);
    setFormData({
      name: "",
      email: "",
      description: "",
      consentDataProcessing: false,
      consentMarketing: false,
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const suggestInterviewHandler = () => {
    const { VITE_TG_ACCOUNT } = import.meta.env;
    if (VITE_TG_ACCOUNT) {
      openTelegram(VITE_TG_ACCOUNT);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[100000] flex items-center justify-between px-[30px] md:px-12 pt-4 md:pt-8 pb-2 md:pb-4 gap-2"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 100000,
          pointerEvents: "auto",
        }}
      >
        {/* Logo */}
        <div
          className="text-[20px] md:text-[30px] !font-light font-geologica transition-colors duration-300 leading-[100%] md:leading-normal"
          style={{ color: textColor }}
        >
          Елена Езопова
        </div>

        {/* Burger Menu Button - только для мобильных */}
        {isMobile ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen((prev) => !prev);
            }}
            className="flex items-center justify-center w-10 h-10 relative z-[100001]"
            style={{ color: textColor, pointerEvents: "auto" }}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        ) : (
          /* Button - только для десктопа */
          <Button
            variant="elegant"
            className="bg-[#E8DDD0] text-[#2A2A2A] hover:bg-[#D4C4B0] border-none rounded-[40px] font-geologica text-[24px] !font-extralight flex-shrink-0 h-[60px] w-[340px] px-[20px] py-[26px]"
            onClick={suggestInterviewHandler}
          >
            предложить интервью
          </Button>
        )}
      </div>

      {/* Mobile Menu Sheet */}
      {isMobile && (
        <Sheet open={isMenuOpen} onOpenChange={(open) => setIsMenuOpen(open)}>
          <SheetContent
            side="right"
            className="w-full bg-[#2A2A2A] text-[#FFFDE0] p-0 [&>button]:hidden"
          >
            <div className="flex flex-col items-center h-full gap-8 px-4 relative">
              {/* Menu Items */}
              <div
                className="flex flex-col items-center gap-8"
                style={{ paddingTop: "100px", marginTop: 0 }}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[20px] font-geologica !font-light text-[#FFFDE0] transition-opacity hover:opacity-70"
                >
                  о проекте
                </button>

                <button
                  onClick={() => scrollToSection("videos")}
                  className="text-[20px] font-geologica !font-light text-[#FFFDE0] transition-opacity hover:opacity-70"
                >
                  смотреть видео
                </button>

                <Button
                  variant="elegant"
                  className="bg-[#E8DDD0] text-[#2A2A2A] hover:bg-[#D4C4B0] border-none rounded-[40px] font-geologica text-[20px] !font-extralight h-[44px] px-6"
                  onClick={suggestInterviewHandler}
                >
                  предложить интервью
                </Button>
              </div>

              {/* Social Links */}
              <div
                className="flex flex-col items-center gap-4 absolute left-0 right-0"
                style={{ bottom: "20px", paddingBottom: "30px" }}
              >
                <a
                  href="https://www.youtube.com/@elena.ezopova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-geologica !font-light text-[#FFFDE0] transition-opacity hover:opacity-70"
                >
                  youtube
                </a>
                <a
                  href="https://vk.com/elenaezopova.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-geologica !font-light text-[#FFFDE0] transition-opacity hover:opacity-70"
                >
                  вконтакте
                </a>
                <a
                  href="https://dzen.ru/ezopova_elena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-geologica !font-light text-[#FFFDE0] transition-opacity hover:opacity-70"
                >
                  дзен
                </a>
                <a
                  href="https://rutube.ru/channel/41496674/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-geologica !font-light text-[#FFFDE0] transition-opacity hover:opacity-70"
                >
                  рутуб
                </a>
                <a
                  href="https://t.me/s/elenalatyshofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-geologica !font-light text-[#FFFDE0] transition-opacity hover:opacity-70"
                >
                  telegram
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}

      {/* Form Dialog/Sheet */}
      {isMobile ? (
        <Sheet open={isFormOpen} onOpenChange={setIsFormOpen}>
          <SheetContent
            side="bottom"
            className="bg-[#2A2A2A] text-[#FFFDE0] p-6 max-h-[90vh] overflow-y-auto [&>button]:hidden rounded-t-[24px]"
          >
            <div className="relative">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute right-0 top-0 text-[#FFFDE0] opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Закрыть форму"
              >
                <X className="w-6 h-6" />
              </button>

              <DialogHeader className="mb-6">
                <DialogTitle className="text-[24px] font-geologica !font-light text-[#FFFDE0] text-center">
                  Предложить интервью
                </DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-[#FFFDE0] font-geologica !font-light"
                  >
                    Имя
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="bg-[#1A1A1A] border-[#FFFDE0]/20 text-[#FFFDE0] placeholder:text-[#FFFDE0]/50 focus:border-[#FFFDE0]/50 rounded-[12px]"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-[#FFFDE0] font-geologica !font-light"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-[#1A1A1A] border-[#FFFDE0]/20 text-[#FFFDE0] placeholder:text-[#FFFDE0]/50 focus:border-[#FFFDE0]/50 rounded-[12px]"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-[#FFFDE0] font-geologica !font-light"
                  >
                    Описание
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    required
                    className="bg-[#1A1A1A] border-[#FFFDE0]/20 text-[#FFFDE0] placeholder:text-[#FFFDE0]/50 focus:border-[#FFFDE0]/50 min-h-[120px] rounded-[12px]"
                    placeholder="Расскажите о себе и почему вы хотите дать интервью"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent-marketing"
                      checked={formData.consentMarketing}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "consentMarketing",
                          checked as boolean
                        )
                      }
                      className="border-[#FFFDE0]/50 data-[state=checked]:bg-[#E8DDD0] data-[state=checked]:border-[#E8DDD0] mt-1 rounded-[4px]"
                    />
                    <Label
                      htmlFor="consent-marketing"
                      className="text-[14px] text-[#FFFDE0] font-geologica !font-light leading-relaxed cursor-pointer"
                    >
                      Я согласен(а) получать информационные и рекламные
                      предложения по Email
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent-data"
                      checked={formData.consentDataProcessing}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "consentDataProcessing",
                          checked as boolean
                        )
                      }
                      required
                      className="border-[#FFFDE0]/50 data-[state=checked]:bg-[#E8DDD0] data-[state=checked]:border-[#E8DDD0] mt-1 rounded-[4px]"
                    />
                    <Label
                      htmlFor="consent-data"
                      className="text-[14px] text-[#FFFDE0] font-geologica !font-light leading-relaxed cursor-pointer"
                    >
                      Я согласен(а) на обработку персональных данных
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="elegant"
                  className="w-full bg-[#E8DDD0] text-[#2A2A2A] hover:bg-[#D4C4B0] border-none rounded-[40px] font-geologica text-[18px] !font-extralight h-[50px]"
                >
                  Отправить
                </Button>
              </form>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="bg-[#2A2A2A] text-[#FFFDE0] border-[#FFFDE0]/20 max-w-[600px] rounded-[24px] sm:rounded-[24px]">
            <DialogHeader>
              <DialogTitle className="text-[28px] font-geologica !font-light text-[#FFFDE0] text-center">
                Предложить интервью
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name-desktop"
                  className="text-[#FFFDE0] font-geologica !font-light"
                >
                  Имя
                </Label>
                <Input
                  id="name-desktop"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="bg-[#1A1A1A] border-[#FFFDE0]/20 text-[#FFFDE0] placeholder:text-[#FFFDE0]/50 focus:border-[#FFFDE0]/50 rounded-[12px]"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email-desktop"
                  className="text-[#FFFDE0] font-geologica !font-light"
                >
                  Email
                </Label>
                <Input
                  id="email-desktop"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-[#1A1A1A] border-[#FFFDE0]/20 text-[#FFFDE0] placeholder:text-[#FFFDE0]/50 focus:border-[#FFFDE0]/50 rounded-[12px]"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="description-desktop"
                  className="text-[#FFFDE0] font-geologica !font-light"
                >
                  Описание
                </Label>
                <Textarea
                  id="description-desktop"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  required
                  className="bg-[#1A1A1A] border-[#FFFDE0]/20 text-[#FFFDE0] placeholder:text-[#FFFDE0]/50 focus:border-[#FFFDE0]/50 min-h-[120px] rounded-[12px]"
                  placeholder="Расскажите о себе и почему вы хотите дать интервью"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent-marketing-desktop"
                    checked={formData.consentMarketing}
                    onCheckedChange={(checked) =>
                      handleInputChange("consentMarketing", checked as boolean)
                    }
                    className="border-[#FFFDE0]/50 data-[state=checked]:bg-[#E8DDD0] data-[state=checked]:border-[#E8DDD0] mt-1 rounded-[4px]"
                  />
                  <Label
                    htmlFor="consent-marketing-desktop"
                    className="text-[14px] text-[#FFFDE0] font-geologica !font-light leading-relaxed cursor-pointer"
                  >
                    Я согласен(а) получать информационные и рекламные
                    предложения по Email
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent-data-desktop"
                    checked={formData.consentDataProcessing}
                    onCheckedChange={(checked) =>
                      handleInputChange(
                        "consentDataProcessing",
                        checked as boolean
                      )
                    }
                    required
                    className="border-[#FFFDE0]/50 data-[state=checked]:bg-[#E8DDD0] data-[state=checked]:border-[#E8DDD0] mt-1 rounded-[4px]"
                  />
                  <Label
                    htmlFor="consent-data-desktop"
                    className="text-[14px] text-[#FFFDE0] font-geologica !font-light leading-relaxed cursor-pointer"
                  >
                    Я согласен(а) на обработку персональных данных
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                variant="elegant"
                className="w-full bg-[#E8DDD0] text-[#2A2A2A] hover:bg-[#D4C4B0] border-none rounded-[40px] font-geologica text-[20px] !font-extralight h-[50px]"
              >
                Отправить
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
