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
import { ContactBox, FooterLinks } from "./data";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import BiografiaGrid from "./pages/Biografia/BiografiaGrid";

function App() {
  return (
    <>
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
            <Route path="/contato" element={<Contato data={ContactBox} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
        <Footer data={FooterLinks} />
      </BrowserRouter>
    </>
  );
}

export default App;
