import CarouselImage1 from "../src/assets/01.webp";
import CarouselImage2 from "../src/assets/A7C01168-2.webp";
import CarouselImage3 from "../src/assets/_RAF0170.webp";
import CarouselImage4 from "../src/assets/_RAF0401.webp";
import WhereListen from "./components/WhereListen";
import FooterContact from "./pages/Footer/FooterContact";
import GridFoto0 from "./assets/kid.webp";
import GridFoto1 from "./assets/FILE187.webp";
import GridFoto2 from "./assets/A7C01168-2.webp";
import GridFoto3 from "./assets/_RAF0170.webp";
import GridFoto4 from "./assets/_RAF0401.webp";
import GridFoto5 from "./assets/FILE216.webp";
import GridFoto6 from "./assets/01 - pb.webp";
import GridFoto7 from "./assets/FILE200.webp";
import GridFoto8 from "./assets/01.webp";
import GridFoto9 from "./assets/01 - pb.webp";

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
    image: CarouselImage1,
  },
  {
    id: 1,
    image: CarouselImage2,
  },
  {
    id: 2,
    image: CarouselImage3,
  },
  {
    id: 3,
    image: CarouselImage4,
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

export const BiografiaCarouselImages = [
  {
    id: 0,
    image: GridFoto0,
  },
];
