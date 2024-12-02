import CarouselImage1 from "../src/assets/01.jpg";
import CarouselImage2 from "../src/assets/A7C01168-2.jpg";
import CarouselImage3 from "../src/assets/_RAF0170.png";
import CarouselImage4 from "../src/assets/_RAF0401.jpg";
import WhereListen from "./components/WhereListen";
import FooterContact from "./pages/Footer/FooterContact";
import GridFoto1 from "./assets/01 - pb.jpg";
import GridFoto2 from "./assets/A7C01168-2.jpg";
import GridFoto3 from "./assets/_RAF0170.png";
import GridFoto4 from "./assets/_RAF0401.jpg";
import GridFoto5 from "./assets/01.jpg";
import GridFoto6 from "./assets/01 - pb.jpg";

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

export const GridLinkImages = [
  {
    id: 0,
    img: GridFoto1,
    alt: "",
    link: "",
    datas: "1985 - 1992",
  },
  {
    id: 1,
    img: GridFoto2,
    alt: "",
    link: "",
    datas: "1992 - 1995",
  },
  {
    id: 2,
    img: GridFoto3,
    alt: "",
    link: "",
    datas: "1995 - 2002",
  },
  {
    id: 3,
    img: GridFoto4,
    alt: "",
    link: "",
    datas: "2002 - 2015",
  },
  {
    id: 4,
    img: GridFoto5,
    alt: "",
    link: "",
    datas: "Portugal",
  },
  {
    id: 5,
    img: GridFoto6,
    alt: "",
    link: "",
    datas: "Alemanha",
  },
];

