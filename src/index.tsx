import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePageHosts } from "./screens/HomePageHosts";
import { OurPackages } from "./screens/OurPackages";
import { TermsPage } from "./screens/TermsPage";
import { PrivacyPage } from "./screens/PrivacyPage";
import { ThankYouPage } from "./screens/ThankYouPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageHosts />} />
        <Route path="/packages" element={<OurPackages />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
