import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
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

// Функция для преобразования URL vkvideo.ru в embed URL
const getVKEmbedUrl = (vkUrl: string): string => {
  // Извлекаем owner_id и video_id из URL вида https://vkvideo.ru/video-212269574_456239439
  const match = vkUrl.match(/video-(\d+)_(\d+)/);
  if (match) {
    const ownerId = match[1];
    const videoId = match[2];
    // Используем формат для embed VK видео (oid отрицательный для групп)
    // VK не поддерживает параметры для скрытия контролов, поэтому используем CSS overlay
    return `https://vk.com/video_ext.php?oid=-${ownerId}&id=${videoId}&hash=&autoplay=1`;
  }
  return vkUrl;
};

// Функция для получения VK видео URL из массива links
const getVKVideoUrl = (links: { platform: string; url: string }[]): string | null => {
  const vkLink = links.find(link => link.platform.toLowerCase().includes("vk"));
  return vkLink ? getVKEmbedUrl(vkLink.url) : null;
};


export const VideosSection = () => {
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
  const [failedVideos, setFailedVideos] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const preloadedCarouselImages = useRef<Set<number>>(new Set());

  // Получаем текущее видео и VK URL для использования в useEffect
  // Добавляем проверку на валидность индекса
  const currentVideo = videos[selectedVideo] || videos[0];
  const currentVKUrl = currentVideo ? getVKVideoUrl(currentVideo.links) : null;

  // Проверка доступности VK при загрузке страницы
  // Делаем один запрос для проверки - если VK недоступен, показываем изображения для всех видео
  useEffect(() => {
    const checkVKAvailability = async () => {
      try {
        // Пробуем загрузить маленький ресурс с VK
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        await fetch('https://vk.com/favicon.ico', {
          mode: 'no-cors',
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        // VK доступен - ничего не делаем
      } catch (error) {
        // VK недоступен - помечаем все видео как неудачные
        console.log('VK is not available in this region, falling back to images');
        const allVideoIds = new Set(videos.map(v => v.id));
        setFailedVideos(allVideoIds);
      }
    };
    
    checkVKAvailability();
  }, []);

  // Дополнительная проверка: если iframe не загрузился за 5 секунд
  useEffect(() => {
    if (!currentVKUrl || !currentVideo || failedVideos.has(currentVideo.id)) return;

    const timeout = setTimeout(() => {
      const iframe = document.querySelector(`iframe[src="${currentVKUrl}"]`) as HTMLIFrameElement;
      if (iframe) {
        try {
          const rect = iframe.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) {
            setFailedVideos(prev => new Set(prev).add(currentVideo.id));
          }
        } catch (e) {
          // Cross-origin error
        }
      } else {
        setFailedVideos(prev => new Set(prev).add(currentVideo.id));
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentVKUrl, currentVideo?.id, failedVideos, selectedVideo]);

  // Проверка загрузки всех VK видео в мобильной карусели
  useEffect(() => {
    if (isMobile) {
      const timeouts: NodeJS.Timeout[] = [];
      
      videos.forEach((video) => {
        const vkUrl = getVKVideoUrl(video.links);
        if (vkUrl && !failedVideos.has(video.id)) {
          const timeout = setTimeout(() => {
            const iframe = document.querySelector(`iframe[src="${vkUrl}"]`) as HTMLIFrameElement;
            if (iframe) {
              try {
                const rect = iframe.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) {
                  setFailedVideos(prev => new Set(prev).add(video.id));
                }
              } catch (e) {
                // Cross-origin - это нормально для VK
              }
            }
          }, 5000);
          
          timeouts.push(timeout);
        }
      });

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [isMobile, failedVideos]);

  // Предзагрузка всех изображений карусели (desktop и mobile)
  // Считаем изображение загруженным, когда загрузилась хотя бы одна версия (desktop или mobile)
  useEffect(() => {
    const preloadDesktop = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10, carousel11, carousel12];
    const preloadMobile = [carousel1Mobile, carousel2Mobile, carousel3Mobile, carousel4Mobile, carousel5Mobile, carousel6Mobile, carousel7Mobile, carousel8Mobile, carousel9Mobile, carousel10Mobile, carousel11Mobile, carousel12Mobile];
    
    const markImageLoaded = (index: number) => {
      if (!preloadedCarouselImages.current.has(index)) {
        preloadedCarouselImages.current.add(index);
        setResourceLoaded(`videos-carousel-${index + 1}`);
      }
    };
    
    // Загружаем desktop версии
    preloadDesktop.forEach((imgSrc, index) => {
      const img = new Image();
      img.onload = () => {
        markImageLoaded(index);
      };
      img.onerror = () => {
        setTimeout(() => {
          markImageLoaded(index);
        }, 2000);
      };
      img.src = imgSrc;
    });
    
    // Загружаем mobile версии
    preloadMobile.forEach((imgSrc, index) => {
      const img = new Image();
      img.onload = () => {
        markImageLoaded(index);
      };
      img.onerror = () => {
        setTimeout(() => {
          markImageLoaded(index);
        }, 2000);
      };
      img.src = imgSrc;
    });
  }, [setResourceLoaded]);

  const updateMaxScroll = () => {
    if (carouselRef.current) {
      const max = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      setMaxScroll(max);
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
    const timer = setTimeout(updateMaxScroll, 100);
    return () => clearTimeout(timer);
  }, [videos.length]);

  const startProgressTimer = (totalTime: number = 10000) => {
    setTimerProgress(0);
    const interval = 50;
    const steps = totalTime / interval;
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

  // Автоматическое переключение категорий
  useEffect(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }

    if (videos.length === 0) {
      return;
    }

    const intervalTime = isMobile ? 3000 : 10000;
    const progressTime = isMobile ? 3000 : 10000;

    autoPlayTimerRef.current = setInterval(() => {
      setSelectedVideo((prev) => (prev + 1) % videos.length);
    }, intervalTime);

    startProgressTimer(progressTime);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [videos.length, isMobile]);

  useEffect(() => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }
    setTimerProgress(0);
    if (videos.length > 0) {
      const progressTime = isMobile ? 3000 : 10000;
      startProgressTimer(progressTime);
    }
  }, [selectedVideo, isMobile, videos.length]);

  const handleVideoClick = (index: number) => {
    setSelectedVideo(index);
    resetAutoPlayTimer();
  };

  const resetAutoPlayTimer = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }
    setTimerProgress(0);
    
    if (videos.length > 0) {
      const intervalTime = isMobile ? 3000 : 10000;
      const progressTime = isMobile ? 3000 : 10000;
      
      autoPlayTimerRef.current = setInterval(() => {
        setSelectedVideo((prev) => (prev + 1) % videos.length);
      }, intervalTime);
      
      startProgressTimer(progressTime);
    }
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
      resetAutoPlayTimer();
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="videos" 
      className="relative h-screen"
      style={{ 
        overflow: 'hidden',
        overflowX: 'hidden',
        position: 'relative',
        height: '100vh',
        width: '100%',
        maxWidth: '100vw',
        backgroundColor: isMobile ? '#000' : 'transparent',
        boxSizing: 'border-box',
      }}
    >
      {/* Основной экран с текущим видео - для мобильных и десктопа */}
      {isMobile ? (
        <div className="absolute inset-0">
          {currentVideo ? (
            <img
              src={currentVideo.imageMobile}
              alt={currentVideo.title}
              className="w-full h-full object-cover"
              onLoad={() => {
                if (currentVideo) {
                  setResourceLoaded(`vk-video-${currentVideo.id}`);
                }
              }}
            />
          ) : null}
        </div>
      ) : (
        <div className="absolute inset-0">
          {currentVideo && currentVKUrl && !failedVideos.has(currentVideo.id) ? (
            <div className="w-full h-full absolute inset-0">
              <iframe
                src={currentVKUrl}
                className="w-full h-full"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; encrypted-media"
                onLoad={() => {
                  if (currentVideo) {
                    setResourceLoaded(`vk-video-${currentVideo.id}`);
                  }
                }}
                onError={() => {
                  if (currentVideo) {
                    setFailedVideos(prev => new Set(prev).add(currentVideo.id));
                    setResourceLoaded(`vk-video-${currentVideo.id}`);
                  }
                }}
              />
            </div>
          ) : currentVideo ? (
            <img
              src={currentVideo.image}
              alt={currentVideo.title}
              className="w-full h-full object-cover"
              onLoad={() => {
                if (currentVideo) {
                  setResourceLoaded(`vk-video-${currentVideo.id}`);
                }
              }}
            />
          ) : null}
        </div>
      )}

      {/* Text Overlay - для мобильных и десктопа */}
      {currentVideo && (
        <div 
          className={`absolute ${isMobile ? 'bottom-[100px] left-4 right-4' : 'bottom-[180px] left-[95px] right-auto pb-[90px]'} z-10`}
        >
          <h2 className={`${isMobile ? 'text-[26px]' : 'text-[20px] md:text-[80px]'} !font-light text-[#FFFDE0] mb-4 md:mb-4 font-geologica ${isMobile ? 'leading-[100%]' : 'leading-[100%] md:leading-tight'}`}>
            {currentVideo.title}
          </h2>
          <p className={`${isMobile ? 'text-[20px] mb-4' : 'text-[16px] md:text-[24px] mb-4 md:mb-[60px]'} text-[#FFFDE0] font-geologica !font-thin`}>
            {currentVideo.description}
          </p>
          
          {/* Блок с подложкой для кнопок - только для мобильных */}
          {isMobile && (
            <div 
              className="rounded-[16px] mt-4"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                padding: '1.25rem',
                boxSizing: 'border-box',
              }}
            >
              <h3 className="text-[18px] !font-light text-[#FFFDE0] mb-3 font-geologica leading-[100%] text-center w-full">
                Смотри на
              </h3>
              
              {/* Video Platform Buttons */}
              <div 
                className="flex flex-wrap gap-[10px]"
                style={{ 
                  width: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  gap: '0.625rem',
                }}
              >
                {currentVideo.links.map((link, idx) => (
                  <Button
                    key={idx}
                    variant="elegant"
                    className="bg-transparent text-[#FFFDE0] border-2 border-[#FFFDE0] hover:bg-[#FFFDE0]/10 rounded-[40px] px-4 h-[44px] text-[16px] font-geologica !font-extralight"
                    style={{ 
                      flex: '1 1 auto',
                      minWidth: 'fit-content',
                      maxWidth: '100%',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    {link.platform}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Video Platform Buttons - только для десктопа */}
          {!isMobile && (
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
          )}
        </div>
      )}


      {/* Carousel - для мобильных и десктопа */}
      <div className={`absolute ${isMobile ? 'bottom-4 left-4 right-4 h-[80px]' : 'bottom-[90px] left-[95px] right-0 h-[118px]'}`} style={isMobile ? { height: '80px', maxHeight: '80px', overflow: 'hidden' } : {}}>
        <div className={`relative h-full flex ${isMobile ? 'items-start' : 'items-start pt-3 md:pt-3'}`}>
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
            className={`flex-1 overflow-x-auto scrollbar-hide h-full ${isMobile ? 'overflow-y-hidden items-start' : 'overflow-y-visible items-center'}`}
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              ...(isMobile ? { 
                height: '80px',
                maxHeight: '80px',
                overflowY: 'hidden'
              } : {})
            }}
            onScroll={(e) => {
              setScrollLeft(e.currentTarget.scrollLeft);
              resetAutoPlayTimer();
            }}
          >
            <div className={`flex ${isMobile ? 'gap-2 pl-1 h-[64px] items-start' : 'gap-3 md:gap-[20px] pl-1 md:pl-1 h-full items-start pt-1 md:pt-1'}`}>
              {videos.map((video, index) => {
                const videoVKUrl = getVKVideoUrl(video.links);
                return (
                  <div
                    key={video.id}
                    className={`flex-shrink-0 ${isMobile ? 'w-[104px] h-[64px]' : 'w-[104px] h-[64px] md:w-[164px] md:h-[94px]'} transition-all relative ${isMobile ? 'rounded-[12px]' : 'rounded-[12px] md:rounded-[16px]'} ${
                      index === selectedVideo
                        ? "scale-105 border-2 border-white"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <button
                      onClick={() => handleVideoClick(index)}
                      className={`w-full h-full ${isMobile ? 'rounded-[12px]' : 'rounded-[12px] md:rounded-[16px]'} overflow-hidden relative`}
                    >
                      {videoVKUrl && !failedVideos.has(video.id) && !isMobile ? (
                        <div className="w-full h-full absolute inset-0">
                          <iframe
                            src={videoVKUrl}
                            className="w-full h-full pointer-events-none"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; encrypted-media"
                            onLoad={() => {
                              // Проверяем загрузку миниатюр
                            }}
                            onError={() => {
                              setFailedVideos(prev => new Set(prev).add(video.id));
                            }}
                          />
                        </div>
                      ) : (
                        <img
                          src={isMobile ? video.imageMobile : video.image}
                          alt={video.title}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: isMobile ? 'center top' : 'center center' }}
                        />
                      )}
                      {index === selectedVideo && !isMobile && (
                        <div 
                          className="absolute inset-0 bg-white/30 transition-all duration-75 ease-linear pointer-events-none"
                          style={{
                            clipPath: `inset(0 ${100 - timerProgress}% 0 0)`
                          }}
                        />
                      )}
                    </button>
                  </div>
                );
              })}
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
