import React, { useRef, useState, useEffect } from "react";
import { HeroSection } from "../HomePageHosts/sections/HeroSection";
import { SimpleFooter } from "../../components/SimpleFooter";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

const packagesData = [
  {
    title: "פרימיום",
    price: "49",
    features: [
      "פניות ללא הגבלה",
      "התחדשות אוטומטית",
      "עדיפות בקבלת פניות",
      "בלי לחשוב על מגבלות – פשוט לקבל פניות חופשית כל החודש",
      "אידיאלי למארחים גדולים או רשתות אירוח",
    ],
    bgColor: "bg-[#073D37]",
    badge: null,
  },
  {
    title: "בסיסית",
    price: "29",
    features: [
      "עד 20 פניות בחודש",
      "התחדשות אוטומטית",
      "מתאימה למארחים שרוצים להתחיל בקטן ולבדוק את הביקוש",
    ],
    bgColor: "bg-[#1FD1CC]",
    badge: null,
  },
  {
    title: "מתקדמת",
    price: "39",
    features: [
      "עד 40 פניות בחודש",
      "התחדשות אוטומטית",
      "עדיפות בקבלת פניות",
      "פי 2 יותר פניות במחיר קטן יותר",
      "מתאימה למארחים עם ביקוש בינוני שרוצים להתרחב",
    ],
    bgColor: "bg-[#F65C78]",
    badge: "הכי משתלמת",
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof packagesData[0]; index: number }) => (
  <div className="relative min-w-[304px] w-[304px] flex-shrink-0">
    <Card
      className={`w-[304px] h-[450px] ${pkg.bgColor} border-0 rounded-[20px] overflow-hidden`}
    >
      <CardContent className="p-0">
        <div className="pt-[49px] pb-[117px] px-[17px] flex flex-col items-center">
          <h2 className="w-[271px] [font-family:'Secular_One',Helvetica] font-normal text-white text-[56px] text-center tracking-[0] leading-[65.0px] whitespace-nowrap [direction:rtl]">
            {pkg.title}
          </h2>

          <div className="mt-[21px] w-full flex flex-col items-center">
            <div className="w-[266px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-base leading-[21.12px] text-center tracking-[0] [direction:rtl]">
              {pkg.features.map((feature, featureIndex) => (
                <React.Fragment key={featureIndex}>
                  {feature}
                  {featureIndex < pkg.features.length - 1 && (
                    <>
                      <div className="h-2" />
                      <Separator className="w-[270px] h-px bg-[#FFFFFF]" />
                      <div className="h-2" />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <Button className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-[269px] h-16 bg-[#7f6cff] hover:bg-[#6b5ce6] rounded-[50px] px-6 py-3">
      <div className="w-[186px] h-[38px] [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-[#fdfdfd] text-lg leading-[22.6px] text-center tracking-[0] [direction:rtl]">
        <span className="[font-family:'Avenir_Next-Bold',Helvetica] font-bold text-[#fdfdfd] text-lg tracking-[0] leading-[22.6px]">
          ₪
        </span>
        <span className="text-3xl leading-[37.6px]">{pkg.price}</span>
        <span className="[font-family:'Avenir_Next-Bold',Helvetica] font-bold text-[#fdfdfd] text-lg tracking-[0] leading-[22.6px]">
          {" "}
          לחודש
        </span>
      </div>
    </Button>

    {pkg.badge && (
      <div className="absolute top-[-12px] right-[-36px] w-[82px] h-20">
        <div className="absolute top-0 left-0 w-20 h-20 bg-[#ffc300] rounded-[39.99px]" />
        <div className="absolute top-6 left-1 w-[72px] [font-family:'Avenir_Next-Bold',Helvetica] font-bold text-gray-1 text-base leading-[18.6px] text-center tracking-[0] [direction:rtl]">
          הכי <br />
          משתלמת
        </div>
      </div>
    )}
  </div>
);

export const OurPackages = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const cardWidth = 304 + 24;
      scrollContainerRef.current.scrollLeft = 2 * cardWidth;

      const handleScroll = () => {
        if (scrollContainerRef.current) {
          const scrollLeft = scrollContainerRef.current.scrollLeft;
          const newIndex = Math.round(scrollLeft / cardWidth);
          setCurrentIndex(newIndex);
        }
      };

      scrollContainerRef.current.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobile]);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 304 + 24;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white overflow-x-hidden w-full relative">
      <HeroSection
        heroTitle="אנחנו מביאים את האורחים - אתם רק בוחרים את המסלול"
        backgroundImage="/Mask group.png"
      />

      <div className="bg-white w-full lg:min-w-[1280px] flex flex-col items-center relative pb-40">
        <h1 className="mt-20 w-full max-w-[903px] px-4 [font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[36px] md:text-[56px] leading-[1.16] text-center tracking-[0] [direction:rtl]">
          כל חבילה כוללת פניות מאומתות מאורחים פוטנציאליים.
        </h1>

        <p className="mt-[33px] w-full max-w-[875px] px-4 [font-family:'IBM_Plex_Sans',Helvetica] font-bold text-gray-2 text-lg md:text-2xl leading-[1.2] text-center tracking-[0] [direction:rtl]">
          אפשר לבטל בכל רגע
        </p>

        {/* Desktop View */}
        <div className="hidden lg:flex mt-[82px] gap-[14px] justify-center items-start relative">
          {packagesData.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden w-full mt-[60px] relative">
          <div className="w-full pb-24">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-[calc(50vw-152px-12px)] pb-16 pt-6"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {packagesData.map((pkg, index) => (
                <div key={index} className="snap-center">
                  <PackageCard pkg={pkg} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {packagesData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'w-8 bg-[#7f6cff]'
                    : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  );
};
