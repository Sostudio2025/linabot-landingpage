import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navigationLinks = [
  "אודות",
  "מי זו לינה?",
  "FAQ מתארחים",
  "FAQ מארחים",
  "צור קשר",
  "תקנון ותנאי שימוש",
  "מדיניות הפרטיות",
];

interface HeroSectionProps {
  heroTitle?: string;
  backgroundImage?: string;
}

export const HeroSection = ({ heroTitle, backgroundImage }: HeroSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[450px] md:h-[633px]">
      <img
        className="absolute top-0 left-0 w-full h-[400px] md:h-[532px] object-cover"
        alt="Mask group"
        src={backgroundImage || "/mask-group.png"}
      />

      <div className="absolute top-0 left-0 w-full h-[395px] md:h-[527px] bg-[#0000008f]" />

      <div className="absolute top-4 left-4 md:top-7 md:left-[158px] w-[90px] h-[24px] md:w-[126px] md:h-[33px] bg-[url(/---------copy--1--1.png)] bg-cover bg-[50%_50%]" />

      {!isMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white z-[60] h-[64px] flex items-center justify-between px-4' : 'absolute top-4 right-4 z-50'} transition-all duration-300`}>
          {isScrolled && (
            <div className="w-[90px] h-[24px] bg-[url(/---------copy--1--1.png)] bg-cover bg-[50%_50%]" />
          )}
          <button
            className="w-[24px] h-[24px] flex flex-col justify-center items-center gap-[4px]"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2.5px] rounded-full ${isScrolled ? 'bg-[#17C3B2]' : 'bg-white'}`}></span>
            <span className={`w-6 h-[2.5px] rounded-full ${isScrolled ? 'bg-[#17C3B2]' : 'bg-white'}`}></span>
            <span className={`w-6 h-[2.5px] rounded-full ${isScrolled ? 'bg-[#17C3B2]' : 'bg-white'}`}></span>
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 z-50 flex flex-col items-end pt-20 pr-8 overflow-hidden animate-slide-down">
          <div className="absolute top-4 left-4 w-[90px] h-[24px] bg-[url(/---------copy--1--1.png)] bg-cover bg-[50%_50%]" />
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          {navigationLinks.map((link, index) => {
            const getLinkHref = (linkText: string) => {
              if (linkText === "אודות") return "#about";
              if (linkText === "מי זו לינה?") return "#who-is-lina";
              if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") return "#faq";
              if (linkText === "צור קשר") return "#contact";
              return "#";
            };

            const handleClick = (e: React.MouseEvent, linkText: string) => {
              if (linkText === "תקנון ותנאי שימוש" || linkText === "מדיניות הפרטיות") {
                e.preventDefault();
                setIsMenuOpen(false);
                navigate('/terms');
                return;
              }

              let targetId = "";
              if (linkText === "אודות") targetId = "about";
              if (linkText === "מי זו לינה?") targetId = "who-is-lina";
              if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") targetId = "faq";
              if (linkText === "צור קשר") targetId = "contact";

              if (targetId) {
                e.preventDefault();
                setIsMenuOpen(false);

                if (!isHomePage) {
                  navigate('/');
                  setTimeout(() => {
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                } else {
                  const targetSection = document.getElementById(targetId);
                  if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }
            };

            return (
              <a
                key={index}
                href={getLinkHref(link)}
                className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[28px] tracking-[0] [direction:rtl] mb-6 transition-smooth hover:text-[#17c3b2] hover:translate-x-2"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={(e) => handleClick(e, link)}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}

      <nav className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[819px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[17.1px] [direction:rtl]">
        {navigationLinks.map((link, index) => {
          const getLinkHref = (linkText: string) => {
            if (linkText === "אודות") return "#about";
            if (linkText === "מי זו לינה?") return "#who-is-lina";
            if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") return "#faq";
            if (linkText === "צור קשר") return "#contact";
            return "#";
          };

          const handleClick = (e: React.MouseEvent, linkText: string) => {
            if (linkText === "תקנון ותנאי שימוש" || linkText === "מדיניות הפרטיות") {
              e.preventDefault();
              navigate('/terms');
              return;
            }

            let targetId = "";
            if (linkText === "אודות") targetId = "about";
            if (linkText === "מי זו לינה?") targetId = "who-is-lina";
            if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") targetId = "faq";
            if (linkText === "צור קשר") targetId = "contact";

            if (targetId) {
              e.preventDefault();

              if (!isHomePage) {
                navigate('/');
                setTimeout(() => {
                  const targetSection = document.getElementById(targetId);
                  if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              } else {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }
          };

          return (
            <React.Fragment key={index}>
              {index > 0 && "\u00A0\u00A0\u00A0\u00A0"}
              <a
                href={getLinkHref(link)}
                className="hover:underline cursor-pointer transition-smooth hover:text-[#17c3b2]"
                onClick={(e) => handleClick(e, link)}
              >
                {link}
              </a>
            </React.Fragment>
          );
        })}
      </nav>

      <h1 className="absolute top-[80px] md:top-[158px] left-1/2 -translate-x-1/2 w-full md:w-[90%] max-w-[630px] px-4 [font-family:'Secular_One',Helvetica] font-normal text-white text-[46px] md:text-[66px] leading-[1.07] text-center tracking-[0] [direction:rtl] animate-slide-in-bottom">
        {heroTitle || "לינה היא בוט חכם בוואטסאפ שמחבר בין מתארחים למארחים"}
      </h1>
    </section>
  );
};
