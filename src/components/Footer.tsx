import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer 
      className="bg-[#2A2A2A] px-[30px] md:px-12 h-[240px] md:h-[420px] flex flex-col justify-center items-center text-center relative"
      style={{ zIndex: 5 }}
    >
      <div className="flex flex-wrap justify-center gap-[10px] md:gap-5 mb-4 md:mb-8">
        <Button 
          variant="elegant"
          className="bg-transparent text-[#FFFDE0] border-2 border-[#FFFDE0] hover:bg-[#FFFDE0]/10 rounded-[40px] px-4 md:px-6 h-[44px] md:h-[60px] text-[16px] md:text-[24px] font-geologica !font-extralight"
          onClick={() => window.open("https://www.youtube.com/@elena.ezopova", "_blank")}
        >
          youtube
        </Button>
        <Button 
          variant="elegant"
          className="bg-transparent text-[#FFFDE0] border-2 border-[#FFFDE0] hover:bg-[#FFFDE0]/10 rounded-[40px] px-4 md:px-6 h-[44px] md:h-[60px] text-[16px] md:text-[24px] font-geologica !font-extralight"
          onClick={() => window.open("https://vk.com/elenaezopova.official", "_blank")}
        >
          вконтакте
        </Button>
        <Button 
          variant="elegant"
          className="bg-transparent text-[#FFFDE0] border-2 border-[#FFFDE0] hover:bg-[#FFFDE0]/10 rounded-[40px] px-4 md:px-6 h-[44px] md:h-[60px] text-[16px] md:text-[24px] font-geologica !font-extralight"
          onClick={() => window.open("https://dzen.ru/ezopova_elena", "_blank")}
        >
          дзен
        </Button>
        <Button 
          variant="elegant"
          className="bg-transparent text-[#FFFDE0] border-2 border-[#FFFDE0] hover:bg-[#FFFDE0]/10 rounded-[40px] px-4 md:px-6 h-[44px] md:h-[60px] text-[16px] md:text-[24px] font-geologica !font-extralight"
          onClick={() => window.open("https://rutube.ru/channel/41496674/", "_blank")}
        >
          рутуб
        </Button>
        <Button 
          variant="elegant"
          className="bg-transparent text-[#FFFDE0] border-2 border-[#FFFDE0] hover:bg-[#FFFDE0]/10 rounded-[40px] px-4 md:px-6 h-[44px] md:h-[60px] text-[16px] md:text-[24px] font-geologica !font-extralight"
          onClick={() => window.open("https://t.me/s/elenalatyshofficial", "_blank")}
        >
          telegram
        </Button>
      </div>
      <h3 className="text-[38px] md:text-[80px] !font-light text-[#FFFDE0] font-geologica leading-[0.9] md:leading-normal">
        подписывайтесь на соцсети
      </h3>
    </footer>
  );
};

