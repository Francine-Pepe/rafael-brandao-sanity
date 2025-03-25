import CarouselImage1 from "../src/assets/01.webp";
import CarouselImage2 from "../src/assets/A7C01168-2.webp";
import CarouselImage3 from "../src/assets/_RAF0170.webp";
import CarouselImage4 from "../src/assets/_RAF0401.webp";
import CarouselImage5 from "../src/assets/the band.webp";
import CarouselImage6 from "../src/assets/Rafa-estudio2.webp";
import WhereListen from "./components/WhereListen";
import FooterContact from "./pages/Footer/FooterContact";

export const Navigation = [
  {
    id: 0,
    name: "Biografia",
    link: "/biografia",
  },
  {
    id: 1,
    name: "Agenda",
    link: "/agenda",
  },
  {
    id: 2,
    name: "Galeria",
    link: "/galeria",
  },
  {
    id: 3,
    name: "News",
    link: "/news",
  },
  {
    id: 4,
    name: "Vídeos",
    link: "/videos",
  },
  {
    id: 5,
    name: "Contato",
    link: "/contato",
  },
];

export const carouselImages = [
  {
    id: 0,
    image: CarouselImage6,
  },
  {
    id: 1,
    image: CarouselImage5,
  },
  {
    id: 2,
    image: CarouselImage2,
  },
  {
    id: 3,
    image: CarouselImage4,
  },
  {
    id: 4,
    image: CarouselImage1,
  },
];

export const FooterLinks = [
  {
    id: 0,
    title: "Onde ouvir",
    icons: <WhereListen />,
  },
  {
    id: 1,
    title: "Contato",
    icons: <FooterContact />,
  },
];
