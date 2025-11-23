import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";

interface StickyTabsProps {
  activeCard: string;
  onCardChange: (cardId: string) => void;
}

const tabData = [
  {
    id: "מארחים",
    title: "מארחים",
    subtitle: "יש לי מקום להציע",
    bgColor: "bg-[#7f6cff]",
    iconSrc: "/bedicon.svg",
    lineSrc: "/line-13.svg",
    titleSize: "text-[38px]",
    subtitleSize: "text-[21px]",
  },
  {
    id: "מתארחים",
    title: "מתארחים",
    subtitle: "אני רוצה לחפש לינה",
    bgColor: "bg-[#1fd1cc]",
    iconSrc: "/locationicon.svg",
    lineSrc: "/line-12.svg",
    titleSize: "text-[31px]",
    subtitleSize: "text-[21px]",
  },
];

export const StickyTabs = ({ activeCard, onCardChange }: StickyTabsProps): JSX.Element => {
  const [isSticky, setIsSticky] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (placeholderRef.current) {
        const rect = placeholderRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={placeholderRef} className="h-0 absolute w-full top-[450px] md:top-[633px]" />

      <div
        className={`w-full transition-all duration-300 ${
          isSticky
            ? "fixed top-[64px] md:top-0 left-0 right-0 z-40 py-0 md:py-4"
            : "absolute left-0 right-0 top-[300px] md:top-[436px]"
        }`}
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center gap-[27.7px]">
          {tabData.map((tab) => {
            const isActive = activeCard === tab.id;
            const height = isActive && !isSticky ? "h-[197px]" : !isSticky ? "h-[148px]" : "h-[110px]";
            const width = isSticky ? "w-[240px]" : "w-[231.26px]";

            return (
              <div key={tab.id} className="relative">
                <Card
                  onClick={() => onCardChange(tab.id)}
                  className={`
                    ${width}
                    ${height}
                    ${tab.bgColor}
                    rounded-[10px]
                    shadow-[0px_6px_11px_#00000040]
                    border-0
                    cursor-pointer
                    hover:opacity-90
                    transition-all
                    duration-300
                  `}
                >
                  <CardContent className="p-0 h-full">
                    {isSticky ? (
                      <div className="flex flex-col items-center justify-center h-full gap-0.5">
                        <img
                          className="w-[45px] h-[45px]"
                          alt={tab.title}
                          src={tab.iconSrc}
                        />
                        <div className="[font-family:'Secular_One',Helvetica] font-normal text-white text-[28px] text-center whitespace-nowrap [direction:rtl]">
                          {tab.title}
                        </div>
                      </div>
                    ) : (
                      <div className={`${isActive ? 'mt-[17px]' : 'mt-[23px]'} w-[187.86px] ${isActive ? 'h-[157.87px]' : 'h-[100.87px]'} ml-[23.6px] relative transition-all duration-300`}>
                        <div className={`w-[96.34%] h-[19.65%] top-[45.42%] left-0 [font-family:'Secular_One',Helvetica] ${tab.titleSize} tracking-[0] leading-[44.1px] absolute font-normal text-white text-center whitespace-nowrap [direction:rtl]`}>
                          {tab.title}
                        </div>

                        <img
                          className="absolute w-[41.50%] h-[39.27%] top-0 left-[27.53%]"
                          alt="Icon"
                          src={tab.iconSrc}
                        />

                        <div className={`w-[97.11%] h-[14.73%] top-[85.27%] left-0 [font-family:'IBM_Plex_Sans',Helvetica] ${tab.subtitleSize} tracking-[-0.21px] leading-[28.4px] absolute font-normal text-white text-center whitespace-nowrap [direction:rtl]`}>
                          {tab.subtitle}
                        </div>

                        <img
                          className={`absolute ${isActive ? 'top-[120px]' : 'top-[79px]'} left-0 w-[184px] h-px object-cover transition-all duration-300`}
                          alt="Line"
                          src={tab.lineSrc}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
                {isSticky && isActive && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2"
                    style={{
                      bottom: '-12px',
                      width: 0,
                      height: 0,
                      borderLeft: '12px solid transparent',
                      borderRight: '12px solid transparent',
                      borderTop: `12px solid ${tab.id === 'מארחים' ? '#7f6cff' : '#1fd1cc'}`
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-center gap-4 px-4">
          {tabData.map((tab) => {
            const isActive = activeCard === tab.id;
            const height = isActive && !isSticky ? "h-[180px]" : !isSticky ? "h-[140px]" : "h-[90px]";
            const width = isSticky ? "w-[150px]" : "w-[160px]";

            return (
              <div key={tab.id} className="relative">
                <Card
                  onClick={() => onCardChange(tab.id)}
                  className={`
                    ${width}
                    ${height}
                    ${tab.bgColor}
                    rounded-[10px]
                    shadow-[0px_6px_11px_#00000040]
                    border-0
                    cursor-pointer
                    hover:opacity-90
                    transition-all
                    duration-300
                  `}
                >
                  <CardContent className="p-0 h-full flex flex-col items-center justify-center px-3">
                    {isSticky ? (
                      <>
                        <img
                          className="w-[36px] h-[36px] mb-2"
                          alt={tab.title}
                          src={tab.iconSrc}
                        />
                        <div className="[font-family:'Secular_One',Helvetica] font-normal text-white text-[22px] text-center [direction:rtl]">
                          {tab.title}
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          className="w-[50px] h-[50px] mb-3"
                          alt={tab.title}
                          src={tab.iconSrc}
                        />
                        <div className="[font-family:'Secular_One',Helvetica] font-normal text-white text-[26px] text-center [direction:rtl] mb-1">
                          {tab.title}
                        </div>
                        <div className="w-[80%] h-px bg-white/30 mb-2" />
                        <div className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[15px] text-center [direction:rtl] leading-tight">
                          {tab.subtitle}
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
                {isSticky && isActive && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2"
                    style={{
                      bottom: '-10px',
                      width: 0,
                      height: 0,
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderTop: `10px solid ${tab.id === 'מארחים' ? '#7f6cff' : '#1fd1cc'}`
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
