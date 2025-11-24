import React from "react";

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

export const SimpleFooter = (): JSX.Element => {
  return (
    <footer className="w-full min-h-[550px] md:min-h-[488px] h-auto bg-[#073d37] relative pb-12 md:pb-8">
      <img
        className="absolute top-[60px] md:top-[91px] left-1/2 -translate-x-1/2 w-[100px] h-[26px] md:w-[126px] md:h-[33px] object-cover"
        alt="Copy"
        src="/---------copy--1--1.png"
      />

      <h3 className="absolute top-[100px] md:top-[140px] left-1/2 -translate-x-1/2 font-normal text-[#17c3b2] text-[18px] md:text-[21px] text-center leading-[52.5px] [font-family:'IBM_Plex_Sans',Helvetica] tracking-[0] [direction:rtl]">
        מפת אתר
      </h3>

      <div className="absolute top-[150px] md:top-[194px] left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-6 md:gap-[100px] [direction:rtl] px-4">
        <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-sm md:text-base tracking-[0] text-right">
          {siteMapLinks.legal.map((link, index) => (
            <div
              key={index}
              className="text-white leading-8 md:leading-[33.6px] cursor-pointer hover:text-[#17c3b2] transition-colors"
            >
              {link.text}
            </div>
          ))}
        </nav>

        <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-sm md:text-base tracking-[0] text-right">
          {siteMapLinks.about.map((link, index) => (
            <div
              key={index}
              className="text-white leading-8 md:leading-[33.6px] cursor-pointer hover:text-[#17c3b2] transition-colors"
            >
              {link.text}
            </div>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-8 md:bottom-auto md:top-[392px] left-1/2 -translate-x-1/2 w-full max-w-[350px] h-auto flex justify-center px-4">
        <p className="w-auto [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-xs md:text-sm text-center tracking-[0] leading-6 [direction:rtl]">
          © 2025 LinaBot - כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
};
