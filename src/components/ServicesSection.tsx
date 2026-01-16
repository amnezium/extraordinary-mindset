import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLoading } from "@/components/PageLoader";
import { useIsMobile } from "@/hooks/use-mobile";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";
import carousel8 from "@/assets/carousel-8.jpg";
import carousel9 from "@/assets/carousel-9.jpg";
import carousel10 from "@/assets/carousel-10.jpg";
import carousel11 from "@/assets/carousel-11.jpg";
import carousel12 from "@/assets/carousel-12.jpg";
import carousel1Mobile from "@/assets/carousel-1-mobile.jpg";
import carousel2Mobile from "@/assets/carousel-2-mobile.jpg";
import carousel3Mobile from "@/assets/carousel-3-mobile.jpg";
import carousel4Mobile from "@/assets/carousel-4-mobile.jpg";
import carousel5Mobile from "@/assets/carousel-5-mobile.jpg";
import carousel6Mobile from "@/assets/carousel-6-mobile.jpg";
import carousel7Mobile from "@/assets/carousel-7-mobile.jpg";
import carousel8Mobile from "@/assets/carousel-8-mobile.jpg";
import carousel9Mobile from "@/assets/carousel-9-mobile.jpg";
import carousel10Mobile from "@/assets/carousel-10-mobile.jpg";
import carousel11Mobile from "@/assets/carousel-11-mobile.jpg";
import carousel12Mobile from "@/assets/carousel-12-mobile.jpg";

interface VideoItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageMobile: string;
  links: { platform: string; url: string }[];
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Судьба и карма вымысел?",
    description: "Вадим Шевченко о том, что действительно определяет жизнь человека",
    image: carousel1,
    imageMobile: carousel1Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=yjWyejFUKo8" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239439" },
      { platform: "rutube", url: "https://rutube.ru/video/73af41f8b7483a57ce05b0578fa24e28/" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/6837364d45ba0a07c58ac174" },
    ],
  },
  {
    id: 2,
    title: "Манипуляции мужскими глазами",
    description: "Как используют женщин, за что любят и хотят?",
    image: carousel2,
    imageMobile: carousel2Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=QrN688v3dpI" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239390" },
    ],
  },
  {
    id: 3,
    title: "Я и не работаю, и с детьми время не провожу",
    description: "Влад Топалов про семью, отцовство и смысл жизни",
    image: carousel3,
    imageMobile: carousel3Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=qU8BtvQ81jA" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239375" },
    ],
  },
  {
    id: 4,
    title: "Измены: причины, последствия и как избежать",
    description: "Предательства в отношениях",
    image: carousel4,
    imageMobile: carousel4Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=XLvIl5RXxrA" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239394" },
      { platform: "rutube", url: "https://rutube.ru/video/19c311d71cac3353b939bd60ea3ff32a/" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/67c98cb900659e3003816094" },
    ],
  },
  {
    id: 5,
    title: "Шкипин Pro маркетинг",
    description: "Профессор Сколково про трушный маркетинг, позиционирование и лишние ценности",
    image: carousel5,
    imageMobile: carousel5Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=nfki7HuNYWY" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239450" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/6840bcf22e13f37eaaa1a066" },
    ],
  },
  {
    id: 6,
    title: "Главный секрет крепких отношений",
    description: "Александр Колмановский об эмпатии и любви",
    image: carousel6,
    imageMobile: carousel6Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=j2WXHrwkjjY" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239337" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/6698ef1460b58211c34084d0" },
    ],
  },
  {
    id: 7,
    title: "Как верить в любовь после абьюза?",
    description: "София Стужук о достигаторстве и сомнениях",
    image: carousel7,
    imageMobile: carousel7Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=J9vGpr3WvNo" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239351" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/66a2312f409c1476ea97da45" },
    ],
  },
  {
    id: 8,
    title: "Как страхи управляют нами?",
    description: "Михаил Филяев о психосоматике, энергии и мышлении",
    image: carousel8,
    imageMobile: carousel8Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=s2x_UCA_20Y" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239391" },
      { platform: "rutube", url: "https://rutube.ru/video/99ab5c25a6ad5d00ca3c7bc8e3d8d677/" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/67b60a5083dc047ea1c94881" },
    ],
  },
  {
    id: 9,
    title: "Оскар Хартманн - честный разговор с миллиардером",
    description: "О бизнесе, семье, рисках и доверии",
    image: carousel9,
    imageMobile: carousel9Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=njbWDRWlBUc" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239393" },
      { platform: "rutube", url: "https://rutube.ru/video/24257404e6117759c447bd6f4cf741b0/" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/67c19a8249c7a50faa8fd430" },
    ],
  },
  {
    id: 10,
    title: "Марк Бартон - почему жертвами становятся?",
    description: "О комплексах, бизнесе и музыке",
    image: carousel10,
    imageMobile: carousel10Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=10UeojlLAdQ" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239368" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/6734ee0c20eee55150724e77" },
    ],
  },
  {
    id: 11,
    title: "Как сохранить вдохновение?",
    description: "Александр Цыпкин о мотивации и страхах",
    image: carousel11,
    imageMobile: carousel11Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=1zqTo--qxF8" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239264" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/66586cd5ebc61c24b201c8d1" },
    ],
  },
  {
    id: 12,
    title: "Перестань врать себе",
    description: "Анфиса Чехова про честность, тело и внутреннюю силу",
    image: carousel12,
    imageMobile: carousel12Mobile,
    links: [
      { platform: "youtube", url: "https://www.youtube.com/watch?v=XCKWuusAi8E" },
      { platform: "vk video", url: "https://vkvideo.ru/video-212269574_456239485" },
      { platform: "rutube", url: "https://rutube.ru/video/07d5b263844acfa46bdf0769e0db508d/" },
      { platform: "dzen", url: "https://dzen.ru/video/watch/688178b1898baf5b3a5479c3" },
    ],
  },
];

export const ServicesSection = () => {
  const { setResourceLoaded } = useLoading();
  const isMobile = useIsMobile();
  const [selectedVideo, setSelectedVideo] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [timerProgress, setTimerProgress] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Состояния для свайпа с эффектом перелистывания
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Обновляем ширину экрана при монтировании и изменении размера
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Сбрасываем dragOffset после смены видео
  useEffect(() => {
    if (!isDragging && !isTransitioning) {
      setDragOffset(0);
    }
  }, [selectedVideo, isDragging, isTransitioning]);

  // Предзагрузка всех изображений карусели (desktop и mobile)
  useEffect(() => {
    const preloadDesktop = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10, carousel11, carousel12];
    const preloadMobile = [carousel1Mobile, carousel2Mobile, carousel3Mobile, carousel4Mobile, carousel5Mobile, carousel6Mobile, carousel7Mobile, carousel8Mobile, carousel9Mobile, carousel10Mobile, carousel11Mobile, carousel12Mobile];
    const preloadImages = [...preloadDesktop, ...preloadMobile];
    
    preloadImages.forEach((imgSrc, index) => {
      const img = new Image();
      img.onload = () => {
        const resourceIndex = index < 12 ? index + 1 : (index - 12) + 1;
        const resourceName = `carousel-${resourceIndex}`;
        setResourceLoaded(resourceName);
      };
      img.onerror = () => {
        // Если изображение не загрузилось, все равно отмечаем как загруженное через 2 секунды
        setTimeout(() => {
          const resourceIndex = index < 12 ? index + 1 : (index - 12) + 1;
          const resourceName = `carousel-${resourceIndex}`;
          setResourceLoaded(resourceName);
        }, 2000);
      };
      img.src = imgSrc;
    });
  }, [setResourceLoaded]);

  const updateMaxScroll = () => {
    if (carouselRef.current) {
      const max = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      setMaxScroll(max);
      // Обновляем scrollLeft если он больше maxScroll
      setScrollLeft((prev) => {
        if (prev > max) {
          return max;
        }
        return prev;
      });
    }
  };

  useEffect(() => {
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  useEffect(() => {
    // Небольшая задержка для того, чтобы DOM обновился
    const timer = setTimeout(updateMaxScroll, 100);
    return () => clearTimeout(timer);
  }, [videos.length]);

  // Автоматическое переключение категорий (только на десктопе)
  useEffect(() => {
    // Очищаем предыдущий таймер
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }

    // На мобильных отключаем автопереключение
    if (isMobile) {
      return;
    }

    // Создаем новый таймер для автоматического переключения
    autoPlayTimerRef.current = setInterval(() => {
      setSelectedVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // Переключение каждые 10 секунд

    // Запускаем прогресс-бар
    startProgressTimer();

    // Очищаем таймер при размонтировании
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [videos.length, isMobile]);

  // Сбрасываем и перезапускаем прогресс при изменении выбранного видео
  useEffect(() => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }
    setTimerProgress(0);
    startProgressTimer();
  }, [selectedVideo]);

  const handleVideoClick = (index: number) => {
    setSelectedVideo(index);
    resetAutoPlayTimer(); // Сбрасываем таймер при клике
  };

  const resetAutoPlayTimer = () => {
    // Сбрасываем таймер при взаимодействии пользователя
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }
    // Сбрасываем прогресс
    setTimerProgress(0);
    
    // Перезапускаем таймер
    autoPlayTimerRef.current = setInterval(() => {
      setSelectedVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    
    // Запускаем прогресс-бар
    startProgressTimer();
  };

  const startProgressTimer = () => {
    setTimerProgress(0);
    const interval = 50; // Обновляем каждые 50мс для плавности
    const totalTime = 10000; // 10 секунд
    const steps = totalTime / interval; // 200 шагов
    let currentStep = 0;

    progressTimerRef.current = setInterval(() => {
      currentStep++;
      const progress = (currentStep / steps) * 100;
      setTimerProgress(progress);
      
      if (currentStep >= steps) {
        if (progressTimerRef.current) {
          clearInterval(progressTimerRef.current);
        }
        setTimerProgress(0);
      }
    }, interval);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const currentScroll = carouselRef.current.scrollLeft;
      const newScrollLeft =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;
      const clampedScroll = Math.max(0, Math.min(newScrollLeft, maxScroll));
      carouselRef.current.scrollTo({ left: clampedScroll, behavior: "smooth" });
      resetAutoPlayTimer(); // Сбрасываем таймер при скролле
    }
  };

  // Обработчики свайпа в стиле Tinder
  const minSwipeDistance = 80; // Минимальное расстояние для переключения
  const rotationFactor = 0.1; // Фактор ротации
  const scaleFactor = 0.0005; // Фактор масштабирования

  const onTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    setIsDragging(false); // Не устанавливаем сразу, ждем определения направления
    setIsHorizontalSwipe(false);
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !touchStartX.current || !touchStartY.current) return;
    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;
    
    // Определяем, это горизонтальный или вертикальный скролл
    const absX = Math.abs(diffX);
    const absY = Math.abs(diffY);
    
    // Если уже определили горизонтальный свайп, продолжаем его
    if (isHorizontalSwipe) {
      e.preventDefault();
      // Инвертируем знак, чтобы карточка двигалась в ту же сторону, что и палец
      setDragOffset(-diffX);
      return;
    }
    
    // Увеличиваем порог для более точного определения направления
    const threshold = 15;
    
    // Если вертикальное движение явно больше горизонтального, это вертикальный скролл
    if (absY > absX && absY > threshold) {
      // Вертикальный скролл - полностью сбрасываем состояние и позволяем браузеру скроллить
      setIsHorizontalSwipe(false);
      setIsDragging(false);
      setDragOffset(0);
      touchStartX.current = null;
      touchStartY.current = null;
      // Не вызываем preventDefault, чтобы вертикальный скролл работал
      return;
    }
    
    // Если горизонтальное движение больше вертикального и превышает порог, это свайп
    if (absX > absY && absX > threshold) {
      // Горизонтальный свайп
      setIsHorizontalSwipe(true);
      setIsDragging(true);
      e.preventDefault(); // Предотвращаем вертикальный скролл при горизонтальном свайпе
      // Инвертируем знак, чтобы карточка двигалась в ту же сторону, что и палец
      setDragOffset(-diffX);
    }
    // Если движение меньше порога, не делаем ничего - позволяем браузеру решать
  };

  const onTouchEnd = () => {
    if (!isMobile || !touchStartX.current) return;
    
    // Если это был вертикальный скролл, не обрабатываем
    if (!isHorizontalSwipe) {
      setIsDragging(false);
      setIsHorizontalSwipe(false);
      touchStartX.current = null;
      touchStartY.current = null;
      return;
    }
    
    setIsDragging(false);
    const distance = Math.abs(dragOffset);
    // Теперь dragOffset инвертирован, поэтому логика обратная
    const isLeftSwipe = dragOffset < -minSwipeDistance; // Отрицательный dragOffset = палец влево = карточка влево
    const isRightSwipe = dragOffset > minSwipeDistance; // Положительный dragOffset = палец вправо = карточка вправо

    if (isLeftSwipe || isRightSwipe) {
      // Скрываем подсказку после первого свайпа
      setShowSwipeHint(false);
      
      // Переключаем видео - текущее улетает в направлении свайпа
      setIsTransitioning(true);
      const finalOffset = isLeftSwipe ? -screenWidth * 2 : screenWidth * 2;
      setDragOffset(finalOffset);
      
      // Переключаем видео после начала анимации улетания
      setTimeout(() => {
        if (isLeftSwipe) {
          // Свайп влево - следующее видео
          setSelectedVideo((prev) => (prev + 1) % videos.length);
        } else {
          // Свайп вправо - предыдущее видео
          setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length);
        }
        // Сбрасываем offset после переключения
        setTimeout(() => {
          setDragOffset(0);
          setIsTransitioning(false);
          setIsHorizontalSwipe(false); // Сбрасываем флаг после завершения
        }, 50);
      }, 150);
    } else {
      // Возвращаемся к текущему видео (spring back)
      setDragOffset(0);
      setIsHorizontalSwipe(false);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentVideo = videos[selectedVideo];
  const prevVideoIndex = (selectedVideo - 1 + videos.length) % videos.length;
  const nextVideoIndex = (selectedVideo + 1) % videos.length;
  const prevVideo = videos[prevVideoIndex];
  const nextVideo = videos[nextVideoIndex];

  // Вычисляем трансформации для эффекта Tinder
  const getCurrentVideoTransform = () => {
    if (!isMobile || screenWidth === 0) return {};
    // Ротация должна быть в том же направлении, что и движение (dragOffset уже инвертирован)
    const rotation = (dragOffset / screenWidth) * 15; // Максимальная ротация 15 градусов
    const scale = 1 - Math.abs(dragOffset) * scaleFactor; // Уменьшение при свайпе
    const opacity = isTransitioning && Math.abs(dragOffset) > screenWidth 
      ? Math.max(0, 1 - Math.abs(dragOffset) / (screenWidth * 2))
      : 1;
    return {
      transform: `translateX(${dragOffset}px) rotate(${rotation}deg) scale(${Math.max(0.95, scale)})`,
      opacity: opacity,
      transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out',
    };
  };

  // Определяем, какое видео показывать сзади
  const getBackgroundVideo = () => {
    if (dragOffset < 0) {
      // Свайп влево (палец влево, карточка уходит влево) - показываем следующее видео
      return nextVideo;
    } else if (dragOffset > 0) {
      // Свайп вправо (палец вправо, карточка уходит вправо) - показываем предыдущее видео
      return prevVideo;
    }
    return null;
  };

  return (
    <section 
      id="services" 
      className="relative z-0 h-screen overflow-x-hidden"
      style={{ touchAction: 'pan-y pinch-zoom' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main Background Images - эффект Tinder для мобильных */}
      {isMobile ? (
        <div className="absolute inset-0 overflow-hidden">
          {/* Фоновое видео (следующее/предыдущее) */}
          {getBackgroundVideo() && (
            <div 
              className="absolute inset-0"
              style={{
                transform: 'scale(0.96)',
                opacity: Math.min(0.7, Math.abs(dragOffset) / 150),
                filter: `blur(${Math.min(4, Math.abs(dragOffset) / 50)}px)`,
                transition: isDragging ? 'none' : 'opacity 0.3s ease-out, filter 0.3s ease-out',
              }}
            >
              <img
                src={getBackgroundVideo()!.imageMobile}
                alt={getBackgroundVideo()!.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Текущее видео - следует за пальцем */}
          <div 
            ref={containerRef}
            className="absolute inset-0 z-10"
            style={getCurrentVideoTransform()}
          >
            <img
              src={currentVideo.imageMobile}
              alt={currentVideo.title}
              className="w-full h-full object-cover"
              onLoad={() => {
                const imageSrc = currentVideo.imageMobile;
                if (!loadedImages.has(imageSrc)) {
                  setLoadedImages((prev) => {
                    const newSet = new Set(prev);
                    newSet.add(imageSrc);
                    return newSet;
                  });
                  const carouselImages = [carousel1Mobile, carousel2Mobile, carousel3Mobile, carousel4Mobile, carousel5Mobile, carousel6Mobile, carousel7Mobile, carousel8Mobile, carousel9Mobile, carousel10Mobile, carousel11Mobile, carousel12Mobile];
                  const index = carouselImages.indexOf(imageSrc);
                  if (index !== -1) {
                    setResourceLoaded(`carousel-${index + 1}`);
                  }
                }
              }}
            />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0">
          <img
            src={currentVideo.image}
            alt={currentVideo.title}
            className="w-full h-full object-cover"
            onLoad={() => {
              const imageSrc = currentVideo.image;
              if (!loadedImages.has(imageSrc)) {
                setLoadedImages((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(imageSrc);
                  return newSet;
                });
                const carouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10, carousel11, carousel12];
                const index = carouselImages.indexOf(imageSrc);
                if (index !== -1) {
                  setResourceLoaded(`carousel-${index + 1}`);
                }
              }
            }}
          />
        </div>
      )}

      {/* Text Overlay - на месте карусели в мобильной версии, 180px от bottom на десктопе */}
      <div className="absolute bottom-4 md:bottom-[180px] left-[30px] md:left-[95px] right-[30px] md:right-auto pb-4 md:pb-[90px] z-10">
        <h2 className="text-[20px] md:text-[80px] !font-light text-[#FFFDE0] mb-4 md:mb-4 font-geologica leading-[100%] md:leading-tight">
          {currentVideo.title}
        </h2>
        <p className="text-[16px] md:text-[24px] text-[#FFFDE0] mb-4 md:mb-[60px] font-geologica !font-thin">
          {currentVideo.description}
        </p>
        
        {/* Video Platform Buttons */}
        <div className="flex flex-wrap gap-[10px] md:gap-5">
          {currentVideo.links.map((link, idx) => (
            <Button
              key={idx}
              variant="elegant"
              className="bg-transparent text-[#FFFDE0] border-2 border-[#FFFDE0] hover:bg-[#FFFDE0]/10 rounded-[40px] px-4 md:px-6 h-[44px] md:h-[60px] text-[16px] md:text-[24px] font-geologica !font-extralight"
              onClick={() => window.open(link.url, "_blank")}
            >
              {link.platform}
            </Button>
          ))}
        </div>
      </div>

      {/* Swipe Hint - только для мобильных */}
      {isMobile && showSwipeHint && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-4 animate-pulse">
            {/* Левая стрелка */}
            <ChevronLeft className="w-6 h-6 text-[#FFFDE0] animate-bounce-x-left" />
            
            {/* Центральный текст */}
            <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm -mt-0.5">
              <span className="text-[#FFFDE0] text-[14px] font-geologica !font-light">
                свайп
              </span>
            </div>
            
            {/* Правая стрелка */}
            <ChevronRight className="w-6 h-6 text-[#FFFDE0] animate-bounce-x-right" />
          </div>
        </div>
      )}

      {/* Carousel - 90px from bottom, выровнена с заголовком и кнопками (скрыта на мобильных) */}
      <div className="hidden md:block absolute bottom-[90px] left-[95px] right-0 h-[118px]">
        <div className="relative h-full flex items-start pt-3 md:pt-3">
          {/* Left Arrow */}
          {scrollLeft > 0 && (
            <button
              onClick={() => scrollCarousel("left")}
              className="hidden md:flex absolute left-0 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 items-center justify-center transition-all rounded-full"
              aria-label="Предыдущие видео"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Carousel Container - Horizontal Scroll */}
          <div
            ref={carouselRef}
            className="flex-1 overflow-x-auto overflow-y-visible scrollbar-hide h-full items-center"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
            onScroll={(e) => {
              setScrollLeft(e.currentTarget.scrollLeft);
              resetAutoPlayTimer(); // Сбрасываем таймер при скролле
            }}
          >
            <div className="flex gap-3 md:gap-[20px] h-full items-start pt-1 md:pt-1 pl-1 md:pl-1">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`flex-shrink-0 w-[104px] h-[64px] md:w-[164px] md:h-[94px] transition-all relative rounded-[12px] md:rounded-[16px] ${
                    index === selectedVideo
                      ? "scale-105 border-2 border-white"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <button
                    onClick={() => handleVideoClick(index)}
                    className="w-full h-full rounded-[12px] md:rounded-[16px] overflow-hidden relative"
                  >
                    <img
                      src={isMobile ? video.imageMobile : video.image}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onLoad={() => {
                        const imageSrc = isMobile ? video.imageMobile : video.image;
                        if (!loadedImages.has(imageSrc)) {
                          setLoadedImages((prev) => {
                            const newSet = new Set(prev);
                            newSet.add(imageSrc);
                            return newSet;
                          });
                          // Отслеживаем все изображения карусели
                          const carouselImages = isMobile 
                            ? [carousel1Mobile, carousel2Mobile, carousel3Mobile, carousel4Mobile, carousel5Mobile, carousel6Mobile, carousel7Mobile, carousel8Mobile, carousel9Mobile, carousel10Mobile, carousel11Mobile, carousel12Mobile]
                            : [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10, carousel11, carousel12];
                          const index = carouselImages.indexOf(imageSrc);
                          if (index !== -1) {
                            setResourceLoaded(`carousel-${index + 1}`);
                          }
                        }
                      }}
                    />
                    {index === selectedVideo && (
                      <div 
                        className="absolute inset-0 bg-white/30 transition-all duration-75 ease-linear pointer-events-none"
                        style={{
                          clipPath: `inset(0 ${100 - timerProgress}% 0 0)`
                        }}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {scrollLeft < maxScroll - 10 && (
            <button
              onClick={() => scrollCarousel("right")}
              className="hidden md:flex absolute right-0 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 items-center justify-center transition-all rounded-full"
              aria-label="Следующие видео"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
