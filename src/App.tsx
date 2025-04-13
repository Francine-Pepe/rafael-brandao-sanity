import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.sass";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Agenda from "./pages/Agenda";
import Biografia from "./pages/Biografia/Biografia";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Contato from "./pages/Contato";
import Footer from "./pages/Footer/Footer";
import { FooterLinks } from "./data";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import { useTranslation } from "react-i18next";
import "./i18n";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/biografia" element={<Biografia />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
        <Footer data={FooterLinks} />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
