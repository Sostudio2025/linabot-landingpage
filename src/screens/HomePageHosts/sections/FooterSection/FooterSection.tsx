import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Textarea } from "../../../../components/ui/textarea";

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

export const FooterSection = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    userType: "host",
    message: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_CRM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: `+972${formData.phone}`,
          type: formData.userType,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit form");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="w-full relative">
      <div className="w-full relative">
        <div className="w-full min-h-[780px] md:min-h-[760px] h-auto bg-[#1fd1cc] relative pb-8">
          <img
            className="absolute top-[30px] left-[20px] md:top-[67px] md:left-[309px] w-[80px] h-[31px] md:w-[118px] md:h-[46px]"
            alt="Vector"
            src="/vector.svg"
          />

          <img
            className="absolute top-[15px] right-[40px] md:top-[21px] md:left-[858px] md:right-auto w-[80px] h-[31px] md:w-[118px] md:h-[46px]"
            alt="Vector"
            src="/vector.svg"
          />

          <h2 className="absolute top-[60px] md:top-[87px] left-1/2 -translate-x-1/2 [font-family:'Secular_One',Helvetica] font-normal text-white text-[36px] md:text-[56px] text-left tracking-[0] leading-[1.2] [direction:rtl] animate-fade-in-up">
            צור קשר
          </h2>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="absolute top-[120px] md:top-[139px] left-1/2 -translate-x-1/2 w-full max-w-[677px] px-6 md:px-4">
                <div className="absolute top-0 right-6 md:left-auto md:right-[11px] w-full md:w-[310px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[18px] md:text-[21px] tracking-[0] leading-[31.5px] [direction:rtl]">
                  שם מלא
                </div>

                <Input
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="absolute top-8 md:top-8 left-6 right-6 md:left-0 md:right-auto w-[calc(100%-48px)] md:w-[666px] h-[60px] bg-white rounded-lg border-0 text-right [font-family:'IBM_Plex_Sans',Helvetica] text-lg text-[#999999]"
                  placeholder="תכתבו פה"
                  dir="rtl"
                />

                <div className="absolute top-[104px] right-6 md:left-auto md:right-[8px] w-full md:w-[358px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[18px] md:text-[21px] tracking-[0] leading-[31.5px] [direction:rtl]">
                  מספר וואטסאפ
                </div>

                <div className="absolute top-[136px] left-6 md:left-0 w-[80px] md:w-[115px] h-[60px] bg-white rounded-lg flex items-center justify-center">
                  <span className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-[#999999] text-base md:text-lg tracking-[0] leading-[27px]">
                    +972
                  </span>
                </div>

                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                  required
                  type="tel"
                  pattern="[0-9]{9,10}"
                  className="absolute top-[136px] left-[112px] md:left-[132px] right-6 md:right-auto w-[calc(100%-136px)] md:w-[535px] h-[60px] bg-white rounded-lg border-0"
                  dir="rtl"
                />

                <div className="absolute top-[207px] left-0 right-0 md:left-auto md:right-[14px] w-full md:w-[412px] h-auto">
                  <div className="absolute top-0 right-6 md:right-[3px] w-full md:w-[409px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[18px] md:text-[21px] tracking-[0] leading-[31.5px] [direction:rtl]">
                    הפונה
                  </div>

                  <RadioGroup
                    value={formData.userType}
                    onValueChange={(value) => setFormData({ ...formData, userType: value })}
                    defaultValue="host"
                    className="absolute top-[34px] right-6 md:right-0 md:left-0 flex gap-4 md:gap-[31px]"
                    dir="rtl"
                  >
                    <div className="flex items-center gap-2 md:gap-3.5">
                      <Label
                        htmlFor="host"
                        className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[27px] cursor-pointer"
                      >
                        מארח
                      </Label>
                      <RadioGroupItem
                        value="host"
                        id="host"
                        className="w-6 h-6 md:w-7 md:h-7 bg-white border-0 data-[state=checked]:bg-white"
                      >
                        <div className="w-[11px] h-[11px] md:w-[13px] md:h-[13px] bg-[#7f6cff] rounded-[6.5px]" />
                      </RadioGroupItem>
                    </div>

                    <div className="flex items-center gap-2 md:gap-[14.2px]">
                      <Label
                        htmlFor="hosting"
                        className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[27px] cursor-pointer"
                      >
                        אירוח
                      </Label>
                      <RadioGroupItem
                        value="hosting"
                        id="hosting"
                        className="w-6 h-6 md:w-7 md:h-7 bg-white border-0"
                      />
                    </div>
                  </RadioGroup>
                </div>

                <div className="absolute top-[287px] right-6 md:left-auto md:right-[17px] w-full md:w-[248px] [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[18px] md:text-[21px] tracking-[0] leading-[31.5px] [direction:rtl]">
                  כתיבת פנייה
                </div>

                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="absolute top-[319px] left-6 right-6 md:left-px md:right-auto w-[calc(100%-48px)] md:w-[666px] h-[150px] bg-white rounded-lg border-0 text-right [font-family:'IBM_Plex_Sans',Helvetica] text-lg text-[#999999] resize-none"
                  placeholder="אני פונה בקשר ל..."
                  dir="rtl"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="absolute top-[610px] md:top-[640px] left-1/2 -translate-x-1/2 w-full max-w-[310px] mx-4 min-h-[50px] bg-[#7f6cff] hover:bg-[#6b5ce6] disabled:opacity-50 disabled:cursor-not-allowed rounded-[50px] px-6 py-3"
              >
                <span className="font-normal text-xl md:text-2xl [font-family:'IBM_Plex_Sans',Helvetica] text-white [direction:rtl]">
                  {isSubmitting ? "שולח..." : "שליחה"}
                </span>
              </Button>
            </form>
          ) : (
            <div className="absolute top-[140px] md:top-[180px] left-1/2 -translate-x-1/2 w-full max-w-[600px] px-6 flex flex-col items-center">
              <img
                src="/thankyouicon.svg"
                alt="תודה"
                className="w-[200px] md:w-[269px] h-auto mb-8 md:mb-12"
              />

              <div className="text-center space-y-4 [direction:rtl]">
                <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[20px] md:text-[24px] leading-[1.6] tracking-[0]">
                  פנייתך התקבלה, צוות לינה בוט יחזור אליך תוך 48 שעות.
                </p>

                <p className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-[16px] md:text-[18px] leading-[1.6] tracking-[0] pt-2">
                  ניתן לפנות אלינו גם ישירות במייל:{" "}
                  <a
                    href="mailto:contact@lina-bot.com"
                    className="underline hover:text-[#7f6cff] transition-colors"
                  >
                    contact@lina-bot.com
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>

        <footer className="w-full min-h-[550px] md:min-h-[488px] h-auto bg-[#073d37] relative pb-12 md:pb-8">
          <img
            className="absolute top-[60px] md:top-[91px] left-1/2 -translate-x-1/2 w-[100px] h-[26px] md:w-[126px] md:h-[33px] object-cover cursor-pointer"
            alt="LinaBot - Go to home page"
            src="/---------copy--1--1.png"
            onClick={() => navigate('/')}
            role="button"
          />

          <h3 className="absolute top-[100px] md:top-[140px] left-1/2 -translate-x-1/2 font-normal text-[#17c3b2] text-[18px] md:text-[21px] text-center leading-[52.5px] [font-family:'IBM_Plex_Sans',Helvetica] tracking-[0] [direction:rtl] animate-fade-in">
            מפת אתר
          </h3>

          <div className="absolute top-[150px] md:top-[194px] left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-6 md:gap-[100px] [direction:rtl] px-4">
            <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-sm md:text-base tracking-[0] text-right">
              {siteMapLinks.legal.map((link, index) => {
                const getLinkHref = (linkText: string) => {
                  if (linkText === "FAQ מארחים") return "#faq";
                  if (linkText === "צור קשר") return "#contact";
                  return "#";
                };

                const handleClick = (e: React.MouseEvent, linkText: string) => {
                  e.preventDefault();

                  if (linkText === "תקנון ותנאי שימוש" || linkText === "מדיניות הפרטיות") {
                    navigate('/terms');
                    return;
                  }

                  let targetId = "";
                  if (linkText === "FAQ מארחים") targetId = "faq";
                  if (linkText === "צור קשר") targetId = "contact";

                  if (targetId) {
                    if (location.pathname !== '/') {
                      navigate('/', { state: { scrollTo: targetId } });
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
                    href={getLinkHref(link.text)}
                    onClick={(e) => handleClick(e, link.text)}
                    className="block text-white leading-8 md:leading-[33.6px] cursor-pointer hover:text-[#17c3b2] transition-colors"
                  >
                    {link.text}
                  </a>
                );
              })}
            </nav>

            <nav className="[font-family:'IBM_Plex_Sans',Helvetica] font-normal text-sm md:text-base tracking-[0] text-right">
              {siteMapLinks.about.map((link, index) => {
                const getLinkHref = (linkText: string) => {
                  if (linkText === "אודות") return "#about";
                  if (linkText === "מי זו לינה?") return "#who-is-lina";
                  if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") return "#faq";
                  return "#";
                };

                const handleClick = (e: React.MouseEvent, linkText: string) => {
                  e.preventDefault();

                  let targetId = "";
                  if (linkText === "אודות") targetId = "about";
                  if (linkText === "מי זו לינה?") targetId = "who-is-lina";
                  if (linkText === "FAQ מתארחים" || linkText === "FAQ מארחים") targetId = "faq";

                  if (targetId) {
                    if (location.pathname !== '/') {
                      navigate('/', { state: { scrollTo: targetId } });
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
                    href={getLinkHref(link.text)}
                    onClick={(e) => handleClick(e, link.text)}
                    className="block text-white leading-8 md:leading-[33.6px] cursor-pointer hover:text-[#17c3b2] transition-colors"
                  >
                    {link.text}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="absolute bottom-8 md:bottom-auto md:top-[392px] left-1/2 -translate-x-1/2 w-full max-w-[350px] h-auto flex justify-center px-4">
            <p className="w-auto [font-family:'IBM_Plex_Sans',Helvetica] font-normal text-white text-xs md:text-sm text-center tracking-[0] leading-6 [direction:rtl]">
              © 2025 LinaBot - כל הזכויות שמורות
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};
