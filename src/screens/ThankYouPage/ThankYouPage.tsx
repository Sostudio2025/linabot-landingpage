import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeroSection } from "../HomePageHosts/sections/HeroSection";

const siteMapLinks = {
  about: [
    { text: "אודות" },
    { text: "מי זו לינה?" },
    { text: "FAQ מתארחים" },
    { text: "FAQ מארחים" },
  ],
  legal: [
    { text: "FAQ מארחים" },
    { text: "צור קשר" },
    { text: "תקנון ותנאי שימוש" },
    { text: "מדיניות הפרטיות" },
  ],
};

export const ThankYouPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent, linkText: string) => {
    e.preventDefault();

    if (linkText === "תקנון ותנאי שימוש" || linkText === "מדיניות הפרטיות") {
      navigate('/terms');
      return;
    }

    let targetId = "";
    if (linkText === "אודות") targetId = "about";
    if (linkText === "מי זו לינה?") targetId = "who-is-lina";
    if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") targetId = "faq";
    if (linkText === "צור קשר") targetId = "contact";

    if (targetId) {
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  const getLinkHref = (linkText: string) => {
    if (linkText === "אודות") return "#about";
    if (linkText === "מי זו לינה?") return "#who-is-lina";
    if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") return "#faq";
    if (linkText === "צור קשר") return "#contact";
    return "#";
  };

  return (
    <div className="bg-white overflow-hidden w-full relative">
      <HeroSection
        heroTitle="תודה על פנייתך!"
        backgroundImage="/mask-group.png"
      />

      <section className="relative w-full flex flex-col items-center py-16 md:py-24 px-4">
        <div className="w-full max-w-[600px] flex flex-col items-center">
          <img
            src="/thankyouicon.svg"
            alt="תודה"
            className="w-[200px] md:w-[269px] h-auto mb-8 md:mb-12"
          />

          <div className="text-center space-y-4 [direction:rtl]">
            <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-[20px] md:text-[24px] leading-[1.6] tracking-[0]">
              פנייתך התקבלה, צוות לינה בוט יחזור אליך תוך 48 שעות.
            </p>

            <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-[16px] md:text-[18px] leading-[1.6] tracking-[0] pt-2">
              ניתן לפנות אלינו גם ישירות במייל:{" "}
              <a
                href="mailto:contact@lina-bot.com"
                className="text-[#7f6cff] underline hover:text-[#6b5ce6] transition-colors"
              >
                contact@lina-bot.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full min-h-[550px] md:min-h-[488px] h-auto bg-[#073d37] relative pb-12 md:pb-8">
        <img
          className="absolute top-[60px] md:top-[91px] left-1/2 -translate-x-1/2 w-[100px] h-[26px] md:w-[126px] md:h-[33px] object-cover"
          alt="Copy"
          src="/---------copy--1--1.png"
        />

        <h3 className="absolute top-[100px] md:top-[140px] left-1/2 -translate-x-1/2 font-normal text-[#17c3b2] text-[18px] md:text-[21px] text-center leading-[52.5px] [font-family:'IBM_Plex_Sans',Helvetica] tracking-[0] [direction:rtl] animate-fade-in">
          מפת אתר
        </h3>

        <div className="absolute top-[150px] md:top-[194px] left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-6 md:gap-[100px] [direction:rtl] px-4">
          <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-sm md:text-base tracking-[0] text-right">
            {siteMapLinks.legal.map((link, index) => (
              <a
                key={index}
                href={getLinkHref(link.text)}
                onClick={(e) => handleLinkClick(e, link.text)}
                className="block text-white leading-8 md:leading-[33.6px] cursor-pointer hover:text-[#17c3b2] transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-sm md:text-base tracking-[0] text-right">
            {siteMapLinks.about.map((link, index) => (
              <a
                key={index}
                href={getLinkHref(link.text)}
                onClick={(e) => handleLinkClick(e, link.text)}
                className="block text-white leading-8 md:leading-[33.6px] cursor-pointer hover:text-[#17c3b2] transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-8 md:bottom-auto md:top-[392px] left-1/2 -translate-x-1/2 w-full max-w-[350px] h-auto flex justify-center px-4">
          <p className="w-auto [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-xs md:text-sm text-center tracking-[0] leading-6 [direction:rtl]">
            © 2025 LinaBot - כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </div>
  );
};
