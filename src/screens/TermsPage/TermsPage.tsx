import React from "react";
import { HeroSection } from "../HomePageHosts/sections/HeroSection";
import { FooterSection } from "../HomePageHosts/sections/FooterSection";

export const TermsPage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
      <HeroSection
        heroTitle="תקנון ותנאי שימוש – לינה בוט"
        backgroundImage="/mask-group.png"
      />

      <section className="relative w-full flex flex-col items-center py-8 md:py-16 px-4 md:px-8">
        <div className="w-full max-w-[940px] [direction:rtl]">
          <div className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#585858] text-[16px] md:text-[18px] leading-[1.8] tracking-[0] space-y-6">
            <p className="text-right mb-8">
              ברוכים הבאים ללינה בוט ("השירות").
              <br />
              השירות מופעל על ידי ועמ חברה, בע"מ ("החברה").
              <br />
              השימוש בשירות התפתח מכפוף מלאה לתנאי התקנון והמידע שימוש שלהלן, אם אינו מסכים/ה לכל – אינו חלק או חלק מהמתואר/ת,
              <br />
              משמשים בשירות.
            </p>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                1. אופי השירות
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>1.1</strong> לינה בוט הוא שירות מבוסס WhatsApp המאפשר חיבור בין משתמשים (מכנסי אירוח) לבין בעלי מקומות אירוח
                  (המארחים).
                </p>
                <p>
                  <strong>1.2</strong> לינה בוט הוא השירות מזהות לפלטפורמה חיבור בלבד. החברה אינה צד להתקשרות בין המשתמש לבין המארח, ואינה
                  אחראית על איכות האירוח, איכות השירות, עמידה בהתחייבויות, תשלום או כל עניין אחר הנוגע להתקשרות בין הצדדים.
                </p>
                <p>
                  <strong>1.3</strong> החברה רשאית לשנות, להפסיק או לעדכן את השירות מעת לעת, ללא הודעה מוקדמת.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                2. הרשמה ושימוש
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>2.1</strong> כדי להשתמש בשירות יש למסור פרטים אישיים מלאים ומדויקים.
                </p>
                <p>
                  <strong>2.2</strong> אתם מתחייבים לעדכן את הפרטים במידה ויש שינוי.
                </p>
                <p>
                  <strong>2.3</strong> אתם מתחייבים שלא לעשות שימוש בפרטי זיהוי של אחר.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                3. אחריות משתמשים
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>3.1</strong> המשתמש מתחייב לעשות שימוש בשירות באופן חוקי, תקין ומכבד.
                </p>
                <p>
                  <strong>3.2</strong> אסור להעלות, לשתף או להפיץ תוכן פוגעני, מעליב, גזעני, פורנוגרפי או בלתי חוקי.
                </p>
                <p>
                  <strong>3.3</strong> אסור לנסות לפגוע במערכת, לפרוץ למערכת או לעשות כל שימוש המפר את התקנון.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                4. תשלומים ותמחור
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>4.1</strong> השירות כולל חבילות מנוי בתשלום.
                </p>
                <p>
                  <strong>4.2</strong> התשלום מבוצע מראש באמצעות אמצעי תשלום מקובלים.
                </p>
                <p>
                  <strong>4.3</strong> החברה רשאית לשנות את המחירים בהתראה של 30 יום מראש.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                5. ביטול והחזרים
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>5.1</strong> ניתן לבטל מנוי בכל עת, אך לא יינתן החזר כספי יחסי עבור תקופה שנוצלה.
                </p>
                <p>
                  <strong>5.2</strong> במקרה של תקלה טכנית שמנעה שימוש בשירות למשך יותר מ-7 ימים רצופים, תינתן אפשרות להחזר יחסי.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                6. הגבלת אחריות
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>6.1</strong> החברה אינה אחראית לנזקים ישירים או עקיפים הנובעים משימוש או אי-שימוש בשירות.
                </p>
                <p>
                  <strong>6.2</strong> החברה אינה ערבה לדיוק, אמינות או זמינות השירות בכל זמן.
                </p>
                <p>
                  <strong>6.3</strong> השירות ניתן "כמות שהוא" ללא כל אחריות מפורשת או משתמעת.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                7. קניין רוחני
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>7.1</strong> כל זכויות הקניין הרוחני בשירות, לרבות עיצוב, טקסטים, קוד ותכנים, שייכות לחברה בלבד.
                </p>
                <p>
                  <strong>7.2</strong> אסור להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בשירות ללא אישור מראש בכתב.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                8. פרטיות ואבטחת מידע
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>8.1</strong> השימוש במידע אישי שלך כפוף למדיניות הפרטיות של החברה.
                </p>
                <p>
                  <strong>8.2</strong> החברה מתחייבת לנקוט באמצעי אבטחה סבירים כדי להגן על המידע האישי.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                9. סיום שימוש
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>9.1</strong> החברה רשאית להפסיק את גישתך לשירות בכל עת, ללא הודעה מוקדמת, במקרה של הפרת תנאי השימוש.
                </p>
                <p>
                  <strong>9.2</strong> אתה רשאי להפסיק את השימוש בשירות בכל עת.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                10. שינויים בתקנון
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>10.1</strong> החברה רשאית לעדכן תקנון זה מעת לעת.
                </p>
                <p>
                  <strong>10.2</strong> על המשתמשים לעיין בתקנון באופן תקופתי כדי להתעדכן בשינויים.
                </p>
                <p>
                  <strong>10.3</strong> המשך השימוש בשירות לאחר פרסום השינויים מהווה הסכמה לתקנון המעודכן.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                11. דין וסמכות שיפוט
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  <strong>11.1</strong> תקנון זה יהיה כפוף לדיני מדינת ישראל.
                </p>
                <p>
                  <strong>11.2</strong> סמכות השיפוט הבלעדית תהיה לבתי המשפט המוסמכים בישראל.
                </p>
              </div>
            </div>

            <div>
              <h2 className="[font-family:'Secular_One',Helvetica] font-normal text-[#7f6cff] text-[24px] md:text-[32px] tracking-[0] leading-[1.2] mb-4 text-right animate-fade-in-up">
                12. יצירת קשר
              </h2>
              <div className="space-y-4 mr-4">
                <p>
                  לשאלות, הערות או פניות בנושא התקנון, ניתן לפנות אלינו:
                </p>
                <p>
                  דוא"ל:{" "}
                  <a
                    href="mailto:contact@lina-bot.com"
                    className="text-[#7f6cff] hover:underline"
                  >
                    contact@lina-bot.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-center text-[14px]">
                תאריך עדכון אחרון: נובמבר 2025
                <br />
                תקנון זה נכנס לתוקף החל מיום פרסומו באתר.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
