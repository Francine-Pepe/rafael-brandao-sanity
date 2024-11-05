import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import SingleShow from "./pages/SingleShow";
import Shows from "./pages/Shows";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shows/:slug" element={<SingleShow />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
