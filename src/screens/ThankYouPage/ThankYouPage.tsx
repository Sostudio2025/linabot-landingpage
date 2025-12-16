import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const navigationLinks = [
  "אודות",
  "מי זו לינה?",
  "FAQ מתארחים",
  "FAQ מארחים",
  "צור קשר",
  "תקנון ותנאי שימוש",
  "מדיניות הפרטיות",
];

const siteMapLinks = {
  right: [
    { text: "אודות" },
    { text: "מי זו לינה?" },
    { text: "מתארחים FAQ" },
    { text: "מארחים FAQ" },
  ],
  left: [
    { text: "מארחים FAQ" },
    { text: "צור קשר" },
    { text: "תקנון ותנאי שימוש" },
    { text: "מדיניות הפרטיות" },
  ],
};

export const ThankYouPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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


  const handleNavClick = (e: React.MouseEvent, linkText: string) => {
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
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  const getNavLinkHref = (linkText: string) => {
    if (linkText === "אודות") return "#about";
    if (linkText === "מי זו לינה?") return "#who-is-lina";
    if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") return "#faq";
    if (linkText === "צור קשר") return "#contact";
    return "#";
  };

  const handleLinkClick = (e: React.MouseEvent, linkText: string) => {
    e.preventDefault();

    if (linkText === "תקנון ותנאי שימוש" || linkText === "מדיניות הפרטיות") {
      navigate('/terms');
      return;
    }

    let targetId = "";
    if (linkText === "אודות") targetId = "about";
    if (linkText === "מי זו לינה?") targetId = "who-is-lina";
    if (linkText.includes("מתארחים") || linkText.includes("מארחים")) targetId = "faq";
    if (linkText === "צור קשר") targetId = "contact";

    if (targetId) {
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  const getLinkHref = (linkText: string) => {
    if (linkText === "אודות") return "#about";
    if (linkText === "מי זו לינה?") return "#who-is-lina";
    if (linkText.includes("מתארחים") || linkText.includes("מארחים")) return "#faq";
    if (linkText === "צור קשר") return "#contact";
    return "#";
  };

  return (
    <div className="bg-white overflow-hidden w-full relative min-h-screen flex flex-col">
      {/* Header - White background */}
      <header className="relative w-full bg-white py-4 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <div
            className="w-[90px] h-[24px] md:w-[126px] md:h-[33px] bg-[url(/---------copy--1--1.png)] bg-cover bg-[50%_50%] cursor-pointer"
            onClick={() => navigate('/')}
            role="button"
            aria-label="Go to home page"
          />

          {/* Mobile menu button */}
          {!isMenuOpen && (
            <div className="md:hidden">
              <button
                className="w-[24px] h-[24px] flex flex-col justify-center items-center gap-[4px]"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Toggle menu"
              >
                <span className="w-6 h-[2.5px] rounded-full bg-[#073d37]"></span>
                <span className="w-6 h-[2.5px] rounded-full bg-[#073d37]"></span>
                <span className="w-6 h-[2.5px] rounded-full bg-[#073d37]"></span>
              </button>
            </div>
          )}

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6 [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#073d37] text-sm tracking-[0] [direction:rtl]">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={getNavLinkHref(link)}
                className="hover:text-[#17c3b2] cursor-pointer transition-colors"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 z-50 flex flex-col items-end pt-20 pr-8 overflow-hidden">
            <div
              className="absolute top-4 left-4 w-[90px] h-[24px] bg-[url(/---------copy--1--1.png)] bg-cover bg-[50%_50%] cursor-pointer"
              onClick={() => { setIsMenuOpen(false); navigate('/'); }}
              role="button"
              aria-label="Go to home page"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl font-light w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={getNavLinkHref(link)}
                className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[28px] tracking-[0] [direction:rtl] mb-6"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main content */}
      <section className="flex-1 relative w-full flex flex-col items-center py-16 md:py-24 px-4">
        <div className="w-full max-w-[600px] flex flex-col items-center">
          <img
            src="/thankyouicon.svg"
            alt="תודה"
            className="w-[280px] md:w-[350px] h-auto mb-8 md:mb-12"
          />

          <div className="text-center space-y-4 [direction:rtl]">
            <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-[20px] md:text-[24px] leading-[1.6] tracking-[0]">
              התשלום שלך בוצע בהצלחה,
              <br />
              נשמח לראות אתכם גדלים איתנו - בהצלחה עם
              <br />
              ההזמנות החדשות!
            </p>
          </div>

          <Button className="flex w-full max-w-[340px] min-h-[64px] items-center justify-center gap-3 px-6 py-3 mt-8 bg-[#17c3b2] rounded-[50px] hover:bg-[#14a89a]">
            <div className="relative w-fit [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[18px] md:text-[21px] text-left tracking-[0] leading-[30px] [direction:rtl]">
              חזרה לשיחה
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

          <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-[16px] md:text-[18px] leading-[1.6] tracking-[0] mt-6 [direction:rtl]">
            חוזרים לשיחה בעוד 5 שניות
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full min-h-[400px] md:min-h-[350px] bg-[#073d37] relative pb-12 md:pb-8">
        <div className="pt-12 md:pt-16 flex flex-col items-center">
          <img
            className="w-[100px] h-[26px] md:w-[126px] md:h-[33px] object-cover cursor-pointer"
            alt="LinaBot - Go to home page"
            src="/---------copy--1--1.png"
            onClick={() => navigate('/')}
            role="button"
          />

          <h3 className="mt-6 font-normal text-[#17c3b2] text-[18px] md:text-[21px] text-center [font-family:'IBM_Plex_Sans',Helvetica] tracking-[0] [direction:rtl]">
            מפת אתר
          </h3>

          <div className="mt-6 flex flex-col md:flex-row gap-8 md:gap-[100px] [direction:rtl] px-4">
            <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-sm md:text-base tracking-[0] text-center md:text-right">
              {siteMapLinks.left.map((link, index) => (
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

            <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-sm md:text-base tracking-[0] text-center md:text-right">
              {siteMapLinks.right.map((link, index) => (
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

          <p className="mt-12 [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-xs md:text-sm text-center tracking-[0] leading-6 [direction:rtl]">
            © 2025 LinaBot - כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </div>
  );
};
