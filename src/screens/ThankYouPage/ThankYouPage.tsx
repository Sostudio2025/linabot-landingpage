import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

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
      <section className="relative w-full flex flex-col items-center py-16 md:py-24 px-4">
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

          <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-[16px] md:text-[18px] leading-[1.6] tracking-[0] mt-6 [direction:rtl]">
            חוזרים לשיחה בעוד 5 שניות
          </p>
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
