import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FooterSection } from "../HomePageHosts/sections/FooterSection";

const navigationLinks = [
  "אודות",
  "מי זו לינה?",
  "FAQ מתארחים",
  "FAQ מארחים",
  "צור קשר",
  "תקנון ותנאי שימוש",
  "מדיניות הפרטיות",
];

export const PrivacyPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleNavClick = (e: React.MouseEvent, linkText: string) => {
    if (linkText === "מדיניות הפרטיות") {
      e.preventDefault();
      setIsMenuOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    if (linkText === "תקנון ותנאי שימוש") {
      e.preventDefault();
      setIsMenuOpen(false);
      navigate('/terms');
      return;
    }

    let targetId = "";
    let switchToTab: string | null = null;

    if (linkText === "אודות") targetId = "about";
    if (linkText === "מי זו לינה?") targetId = "who-is-lina";
    if (linkText === "FAQ מתארחים") {
      targetId = "faq";
      switchToTab = "מתארחים";
    }
    if (linkText === "FAQ מארחים") {
      targetId = "faq";
      switchToTab = "מארחים";
    }
    if (linkText === "צור קשר") targetId = "contact";

    if (targetId) {
      e.preventDefault();
      setIsMenuOpen(false);
      navigate('/', { state: { scrollTo: targetId, switchTab: switchToTab } });
    }
  };

  return (
    <div className="bg-white overflow-hidden w-full relative">
      {/* Simple header without background image */}
      <header className="relative w-full bg-white pt-4 pb-8">
        {/* Logo */}
        <div
          className="absolute top-4 left-4 md:top-7 md:left-[158px] w-[90px] h-[24px] md:w-[126px] md:h-[33px] bg-[url(/---------copy--1--1.png)] bg-cover bg-[50%_50%] cursor-pointer"
          onClick={() => navigate('/')}
          role="button"
          aria-label="Go to home page"
        />

        {/* Mobile hamburger menu button */}
        {!isMenuOpen && (
          <div className={`md:hidden ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white z-[60] h-[64px] flex items-center justify-between px-4' : 'absolute top-4 right-4 z-50'} transition-all duration-300`}>
            {isScrolled && (
              <div
                className="w-[90px] h-[24px] bg-[url(/---------copy--1--1.png)] bg-cover bg-[50%_50%] cursor-pointer"
                onClick={() => navigate('/')}
                role="button"
                aria-label="Go to home page"
              />
            )}
            <button
              className="w-[24px] h-[24px] flex flex-col justify-center items-center gap-[4px]"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <span className="w-6 h-[2.5px] bg-[#17C3B2] rounded-full"></span>
              <span className="w-6 h-[2.5px] bg-[#17C3B2] rounded-full"></span>
              <span className="w-6 h-[2.5px] bg-[#17C3B2] rounded-full"></span>
            </button>
          </div>
        )}

        {/* Mobile menu overlay */}
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
                href="#"
                className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[28px] tracking-[0] [direction:rtl] mb-6"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link}
              </a>
            ))}
          </div>
        )}

        {/* Sticky header for desktop */}
        {isScrolled && (
          <div className="hidden md:flex fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-[60] h-[64px] items-center justify-center px-8 shadow-sm transition-all duration-300">
            <div
              className="absolute left-8 w-[90px] h-[24px] bg-[url(/---------copy--1--1.png)] bg-cover bg-[50%_50%] cursor-pointer"
              onClick={() => navigate('/')}
              role="button"
              aria-label="Go to home page"
            />
            <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-sm tracking-[0] leading-[17.1px] [direction:rtl]">
              {navigationLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {index > 0 && "\u00A0\u00A0\u00A0\u00A0"}
                  <a
                    href="#"
                    className="hover:underline cursor-pointer hover:text-[#7f6cff]"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link}
                  </a>
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop navigation */}
        <nav className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[819px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-base tracking-[0] leading-[17.1px] [direction:rtl]">
          {navigationLinks.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && "\u00A0\u00A0\u00A0\u00A0"}
              <a
                href="#"
                className="hover:underline cursor-pointer hover:text-[#7f6cff]"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link}
              </a>
            </React.Fragment>
          ))}
        </nav>

        {/* Purple title */}
        <h1 className="mt-16 md:mt-20 px-4 [font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[36px] md:text-[56px] text-center tracking-[0] leading-[1.2] [direction:rtl]">
          מדיניות פרטיות - לינה בוט
        </h1>
      </header>

      <section className="relative w-full flex flex-col items-center py-8 md:py-16 px-4 md:px-8">
        <div className="w-full max-w-[940px] [direction:rtl]">
          <div className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-[16px] md:text-[18px] leading-[1.8] tracking-[0] space-y-6">
            <p className="text-right mb-4 text-[14px]">
              עודכן לאחרונה: אוגוסט 2025
            </p>
            <p className="text-right mb-8">
              השירות מופעל על ידי: אפטודייט טכנולוגיה
              <br /><br />
              לינה בוט מחויבת לשמירה על פרטיות המשתמשים והמארחים. מדיניות זו מפרטת את סוגי המידע שאנו אוספים, מטרת השימוש בו, האופן בו אנו שומרים עליו וזכויותיכם.
            </p>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                1. איסוף מידע
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>1.1</strong> משתמשים (מבקשי אירוח): שם, טלפון, פרטי הפנייה, תאריכי האירוח, מספר אנשים, העדפות אירוח.
                </p>
                <p>
                  <strong>1.2</strong> מארחים (בעלי מקומות אירוח): שם איש קשר, מספר טלפון, מייל, פרטי מקום האירוח.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                2. שימוש במידע
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>2.1</strong> מתן השירות - חיבור בין משתמשים למארחים.
                </p>
                <p>
                  <strong>2.2</strong> ניהול פניות ושיפור חוויית השימוש.
                </p>
                <p>
                  <strong>2.3</strong> שליחת התראות או הודעות הנוגעות לשירות (למשתמשים שהסכימו לקבלן).
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                3. שיתוף מידע
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>3.1</strong> המידע עשוי להיות מועבר בין משתמשים למארחים לצורך יצירת קשר.
                </p>
                <p>
                  <strong>3.2</strong> המידע עשוי להימסר לצדדים שלישיים המספקים לנו שירותים שונים (כגון ספקי אחסון, תשלום ועיבוד נתונים), וזאת אך ורק לצורך אספקת השירותים המבוקשים ועיבוד המידע הנדרש. צדדים שלישיים אלו מחויבים לשמור על סודיות המידע ולעשות בו שימוש רק לצרכים שלשמם נמסר להם, בהתאם להוראות הדין ולמדיניות הפרטיות שלנו.
                </p>
                <p>
                  <strong>3.3</strong> מידע עשוי להיות מאוחסן או מעובד בשרתי ענן מחוץ לישראל, תוך שמירה על רמת הגנה נדרשת לפי דין.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                4. אבטחת מידע
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>4.1</strong> החברה נוקטת באמצעי אבטחה סבירים: הצפנה, גיבוי והגנה מפני גישה לא מורשית.
                </p>
                <p>
                  <strong>4.2</strong> אין אנו יכולים להבטיח הגנה מוחלטת מפני חדירה או שימוש בלתי מורשה.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                5. שמירת מידע
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>5.1</strong> המידע נשמר כל עוד נדרש למתן השירות ולמטרות המפורטות המדיניות זו, אלא אם המשתמש מבקש למחוק אותו.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                6. זכויות המשתמשים ומארחים
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>6.1</strong> בהתאם לחוק הגנת הפרטיות, כל משתמש ומארח רשאי לעיין במידע שנשמר עליו, לבקש את תיקונו או את מחיקתו.
                </p>
                <p>
                  <strong>6.2</strong> בקשה כאמור ניתן לשלוח לחברה באמצעות כתובת דוא"ל:{" "}
                  <a href="mailto:contact@lina-bot.com" className="text-[#7f6cff] hover:underline">
                    contact@lina-bot.com
                  </a>{" "}
                  או באמצעי תקשורת אחרים שיפורסמו מעת לעת.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                7. שינויים במדיניות פרטיות
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>7.1</strong> החברה רשאית לעדכן את מדיניות הפרטיות מעת לעת.
                </p>
                <p>
                  <strong>7.2</strong> הגרסה המעודכנת תפורסם ותיכנס לתוקף מיד עם פרסומה.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-center text-[14px]">
                כל הזכויות במדיניות זו שמורות ואין להעתיק או לשכפל אותה.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
