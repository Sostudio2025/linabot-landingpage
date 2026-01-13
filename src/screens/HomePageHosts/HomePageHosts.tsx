import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { useContent, ContentType } from "../../hooks/useContent";
import { Button } from "../../components/ui/button";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { StickyTabs } from "../../components/StickyTabs";


export const HomePageHosts = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeType, setActiveType] = useState<ContentType>("מארחים");
  const { content, loading } = useContent(activeType);
  const pendingScrollRef = useRef<string | null>(null);

  const handleCardChange = (cardId: string) => {
    setActiveType(cardId as ContentType);
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string; switchTab?: string } | null;
    if (state?.switchTab) {
      setActiveType(state.switchTab as ContentType);
    }
    if (state?.scrollTo) {
      pendingScrollRef.current = state.scrollTo;
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Scroll to target section after content is loaded
  useEffect(() => {
    if (!loading && content && pendingScrollRef.current) {
      const targetId = pendingScrollRef.current;
      pendingScrollRef.current = null;
      setTimeout(() => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  }, [loading, content]);

  // Listen for switchTab custom event from navigation
  useEffect(() => {
    const handleSwitchTab = (e: CustomEvent) => {
      setActiveType(e.detail as ContentType);
    };
    window.addEventListener('switchTab', handleSwitchTab as EventListener);
    return () => window.removeEventListener('switchTab', handleSwitchTab as EventListener);
  }, []);

  if (loading || !content) {
    return (
      <div className="bg-white overflow-hidden w-full relative flex items-center justify-center h-screen">
        <div className="text-xl">טוען...</div>
      </div>
    );
  }
  return (
    <div className="bg-white overflow-hidden w-full relative">
      <HeroSection
        heroTitle={content.hero.title}
        backgroundImage={content.hero.backgroundImage}
      />

      <StickyTabs activeCard={activeType} onCardChange={handleCardChange} />

      <section id="about" className="relative w-full flex flex-col items-center py-8 md:py-16 pt-16 md:pt-32 px-4 transition-opacity duration-500 animate-in fade-in" key={activeType}>
        <div className="w-full max-w-[884px] [font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[28px] md:text-[40px] text-center tracking-[0] leading-[1.16] [direction:rtl] animate-fade-in-up">
          {content.intro.title}
        </div>

        {activeType === "מתארחים" ? (
          <a
            href="https://wa.me/972522218783?text=היי%20לינה!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex w-full max-w-[340px] min-h-[64px] items-center justify-center gap-3 px-6 py-3 mt-8 bg-[#25D366] rounded-[50px] hover:bg-[#1fb855]">
              <div className="relative w-fit [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[18px] md:text-[21px] text-left tracking-[0] leading-[30px] [direction:rtl]">
                דברו עם לינה עכשיו
              </div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  fill="white"
                />
              </svg>
            </Button>
          </a>
        ) : (
          <Button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="flex w-full max-w-[340px] min-h-[64px] items-center justify-center gap-3 px-6 py-3 mt-8 bg-[#7f6cff] rounded-[50px] hover:bg-[#6b5ce6]"
          >
            <div className="relative w-fit [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[18px] md:text-[21px] text-left tracking-[0] leading-[30px] [direction:rtl]">
              צור קשר
            </div>
          </Button>
        )}

        <div
          className="w-full max-w-[875px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-gray-2 text-[18px] md:text-2xl leading-[1.4] text-center tracking-[0] [direction:rtl] mt-6"
          dangerouslySetInnerHTML={{ __html: content.intro.subtitle }}
        />

        <img
          className="w-full max-w-[397px] h-auto mt-8 md:mt-16"
          alt="Frame"
          src={content.intro.image}
        />
      </section>

      <section id="who-is-lina" className="relative w-full flex flex-col items-center py-8 md:py-16 px-4">
        <div className="w-full max-w-[473px] [font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[36px] md:text-[56px] text-center tracking-[0] leading-[1.2] [direction:rtl] animate-fade-in-up">
          {content.about.title}
        </div>

        <div className="w-full max-w-[554px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-gray-2 text-[18px] md:text-[21px] leading-[1.3] text-center tracking-[0] [direction:rtl] mt-6">
          {content.about.description}
        </div>

        {content.packages.hidden && (
          <img
            className="w-full max-w-[397px] h-auto mt-8 md:mt-16"
            alt="Calendar"
            src="/calendar-hosts.svg"
          />
        )}
      </section>

      {!content.packages.hidden && (
        <section className="relative w-full flex flex-col items-center py-8 md:py-16 px-4">
          <div className="w-full max-w-[836px] [font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[36px] md:text-[56px] leading-[1.16] text-center tracking-[0] [direction:rtl] animate-fade-in-up">
            {content.packages.title}
          </div>

          {content.about.image && (
            <div className="relative w-full max-w-[397px] h-auto mt-8 md:mt-16">
              <img className="w-full h-auto" alt="Frame" src={content.about.image} />
            </div>
          )}

          <Button
            onClick={() => navigate('/packages')}
            className="flex items-center justify-center gap-2.5 px-6 py-3 mt-8 bg-[#7f6cff] rounded-[50px] hover:bg-[#6b5ce6] min-h-[48px]"
          >
            <div className="relative w-fit font-normal text-[18px] md:text-[21px] text-left [font-family:'IBM_Plex_Sans',Helvetica] text-white tracking-[0] leading-[normal] [direction:rtl]">
              {content.packages.buttonText}
            </div>
          </Button>

          {content.packages.decorativeImage1 && (
            <img
              className="w-full max-w-[397px] h-auto mt-8"
              alt="Calendar"
              src={content.packages.decorativeImage1}
            />
          )}
        </section>
      )}

      <section id="faq" className="relative w-full flex flex-col items-center py-8 md:py-16 px-4">
        <div className="w-full max-w-[940px] bg-[#7f6cff] rounded-[10px] shadow-[0px_6px_11px_#00000040] py-6 px-6 md:px-8 flex items-center justify-center animate-scale-in">
          <div className="[font-family:'Secular_One',Helvetica] font-normal text-white text-[28px] md:text-4xl tracking-[0] leading-[1.16] [direction:rtl]">
            {content.faq.title}
          </div>
          <img
            className="w-[36px] h-[35px] md:w-[42px] md:h-[41px] mr-4"
            alt="Layer"
            src={content.faq.icon}
          />
        </div>

        <div className="w-full max-w-[667px] mt-8">
          <Accordion type="single" collapsible className="w-full">
            {content.faq.items.map((item, index) => (
              <React.Fragment key={item.id}>
                <AccordionItem value={item.id} className="border-none">
                  <div className="py-4">
                    <AccordionTrigger className="[font-family:'Secular_One',Helvetica] font-normal text-black text-[22px] md:text-[28px] tracking-[0] leading-[normal] [direction:rtl] hover:no-underline text-right w-full py-0">
                      {item.question}
                    </AccordionTrigger>
                    {item.answer && (
                      <AccordionContent className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-[18px] md:text-[21px] tracking-[0] leading-[normal] [direction:rtl] pt-4">
                        <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                        {index === 1 && !content.packages.hidden && (
                          <div className="flex justify-center mt-6">
                            <Button
                              onClick={() => navigate('/packages')}
                              className="bg-[#1fd1cc] rounded-[21px] hover:bg-[#1ab8b4] px-8 py-2 min-h-[48px]"
                            >
                              <div className="font-normal text-[18px] md:text-[21px] text-center [font-family:'IBM_Plex_Sans',Helvetica] text-white tracking-[0] leading-[normal] [direction:rtl]">
                                {content.faq.viewPackagesButton}
                              </div>
                            </Button>
                          </div>
                        )}
                      </AccordionContent>
                    )}
                  </div>
                </AccordionItem>
                {index < content.faq.items.length - 1 && (
                  <div className="w-full h-px bg-[#D4D4D4]" />
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      </section>

      <FaqSection />
      <FooterSection />
    </div>
  );
};
