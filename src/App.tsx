import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.sass";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import SingleShow from "./pages/SingleShow";
import Header from "./components/Header";
import Agenda from "./pages/Agenda";
import Biografia from "./pages/Biografia/Biografia";
import Galeria from "./pages/Galeria";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Contato from "./pages/Contato";
import Footer from "./pages/Footer/Footer";
import { FooterLinks } from "./data";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/agenda/:slug" element={<SingleShow />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/news" element={<News />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer data={FooterLinks} />
      </BrowserRouter>
    </>
  );
}

export default App;
