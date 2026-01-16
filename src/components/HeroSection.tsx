import { useLoading } from "@/components/PageLoader";
import heroVideo from "@/assets/gifka.webm";

export const HeroSection = () => {
  const { setResourceLoaded } = useLoading();

  return (
    <section id="hero" className="relative h-screen flex flex-col bg-[#D4C4B0] overflow-hidden md:snap-none snap-start">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onCanPlayThrough={(e) => {
            // onCanPlayThrough означает, что видео готово к воспроизведению без остановок
            const video = e.currentTarget;
            if (video.readyState >= 3) { // HAVE_FUTURE_DATA или выше
              setResourceLoaded("hero-video");
            }
          }}
          onLoadedData={(e) => {
            // Дополнительная проверка: если видео уже готово, помечаем как загруженное
            const video = e.currentTarget;
            if (video.readyState >= 4) { // HAVE_ENOUGH_DATA - видео полностью готово
              setResourceLoaded("hero-video");
            }
          }}
        />
      </div>

      {/* Main Title - Centered, 90px from bottom */}
      <div className="relative z-10 flex-1 flex items-end justify-center px-[30px] md:px-6 pb-8 md:pb-[90px]">
        <h1 className="text-[38px] md:text-[80px] !font-light text-[#FFFDE0] leading-[0.9] md:leading-[1.1] font-geologica tracking-tight text-center">
          психолог экстраординарных людей
        </h1>
      </div>
    </section>
  );
};
