import { useLoading } from "@/components/PageLoader";
import aboutPhoto from "@/assets/about-photo.jpg";

export const AboutSection = () => {
  const { setResourceLoaded } = useLoading();

  return (
    <section id="about" className="relative z-10 grid md:grid-cols-2 h-screen md:h-screen min-h-screen md:min-h-screen overflow-hidden">
      {/* Right Panel - Portrait Photo */}
      <div className="relative h-[50vh] md:h-full order-1 md:order-2 overflow-hidden isolate">
        <img
          src={aboutPhoto}
          alt="Елена Езопова"
          className="w-full h-full object-cover md:object-center object-[70%_center]"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0) scale(1.01)',
            willChange: 'transform',
            imageRendering: 'auto',
            WebkitTransform: 'translateZ(0) scale(1.01)'
          }}
          onLoad={() => setResourceLoaded("about-photo")}
        />
      </div>

      {/* Left Panel - Dark Gray Background */}
      <div className="bg-[#2A2A2A] px-[30px] md:px-12 py-8 md:py-20 flex flex-col justify-center order-2 md:order-1 overflow-hidden min-h-[50vh] md:min-h-full">
        <div className="max-w-[600px] mx-auto w-full">
          <h2 className="text-[38px] md:text-[80px] !font-light text-[#FFFDE0] leading-[0.9] md:leading-[1.1] font-geologica mb-6 md:mb-[80px]">
            о проекте
          </h2>
          
          <div className="space-y-4 md:space-y-[40px] text-[16px] md:text-[24px] text-[#FFFDE0] leading-relaxed font-geologica !font-thin">
            <p>
              Проект Елены Езоповой — для тех, кто стремится к самореализации и хочет вывести работу и жизнь на новый уровень.
            </p>
            
            <p>
              В канале — интервью, подкасты, кейсы и советы по энергии, мотивации, отношениям и эффективности.
            </p>
            
            <p>
              Главная цель — не поддержка, а запуск глубокой личной трансформации к осознанному счастью и жизни без выгорания.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
