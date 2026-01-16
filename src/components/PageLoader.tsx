import * as React from "react";

interface LoadingContextType {
  setResourceLoaded: (resource: string) => void;
  isComplete: boolean;
  isLoading: boolean;
}

const LoadingContext = React.createContext<LoadingContextType | null>(null);

export const useLoading = () => {
  const context = React.useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within PageLoaderProvider");
  }
  return context;
};

interface PageLoaderProps {
  children: React.ReactNode;
}

export const PageLoaderProvider = ({ children }: PageLoaderProps) => {
  const [progress, setProgress] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [loadedResources, setLoadedResources] = React.useState<Set<string>>(new Set());

  // Список всех ресурсов для загрузки
  const totalResources = 14; // видео + 1 фото + 12 изображений карусели (hero-video + about-photo + videos-carousel-1 до videos-carousel-12)

  const setResourceLoaded = (resource: string) => {
    setLoadedResources((prev) => {
      // Проверяем, не загружен ли уже этот ресурс
      if (prev.has(resource)) {
        return prev;
      }

      const newSet = new Set(prev);
      newSet.add(resource);
      const newProgress = Math.min(Math.floor((newSet.size / totalResources) * 100), 100);
      setProgress(newProgress);

      if (newSet.size >= totalResources) {
        // Запускаем анимацию исчезновения и сразу скрываем лоадер
        setIsAnimating(true);
        // Минимальная задержка только для плавности анимации
        setTimeout(() => {
          setIsLoading(false);
        }, 200); // Минимальная задержка для плавного перехода
      }

      return newSet;
    });
  };

  // Таймаут для предотвращения зависания - если через 8 секунд не все загрузилось, показываем страницу
  React.useEffect(() => {
    const maxTimeout = setTimeout(() => {
      if (isLoading) {
        setIsAnimating(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }, 8000);

    return () => clearTimeout(maxTimeout);
  }, [isLoading]);

  // Убираем минимальное время - сразу показываем контент после 100%
  // useEffect удален - больше не нужен

  return (
    <LoadingContext.Provider value={{ setResourceLoaded, isComplete: !isLoading, isLoading }}>
      {isLoading && (
        <div 
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#D4C4B0] pointer-events-auto transition-all duration-200 ease-in-out ${
            isAnimating ? 'opacity-0 scale-150 blur-xl' : 'opacity-100 scale-100 blur-0'
          }`}
        >
          <div className="text-center">
            <div className={`text-[48px] md:text-[80px] font-geologica !font-light text-[#FFFDE0] transition-all duration-200 ${
              isAnimating ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}>
              {progress}%
            </div>
          </div>
        </div>
      )}
      <div 
        className={`transition-all duration-200 ease-in-out ${
          isLoading && !isAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

