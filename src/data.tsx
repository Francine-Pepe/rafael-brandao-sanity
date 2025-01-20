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

export const ContactFormData = [
  {
    id: "name",
    title: "Nome:",
    htmlFor: "name",
    name: "user_name",
    type: "text",
    placeholder: "John Daves",
  },
  {
    id: "email",
    title: "E-mail:",
    htmlFor: "email",
    name: "user_email",
    type: "text",
    placeholder: "johndaves@johndaves.com",
  },
  {
    id: "phone",
    title: "Telefone:",
    htmlFor: "phone",
    name: "user_phone",
    type: "tel",
    placeholder: "",
  },
];

export const ContactBox = [
  {
    id: 1,
    text: "Para contato, preencha o formulário, ou entre em contato diretamente pelo e-mail:",
    link: "mailto:contato@rafa-brandao.com",
    linkText: "contato@rafa-brandao.com",
  },
  {
    id: 2,
    text: "Para shows:",
    link: "mailto:shows@rafa-brandao.com",
    linkText: "shows@rafa-brandao.com",
  },
];

export const VideoTabsContent = [
  {
    id: 0,
    label: "Rafa Brandão - voz e violão",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis scelerisque est eget aliquet. Proin ac purus fermentum, aliquam lorem sit amet, lacinia ex. Integer mauris velit, tristique porttitor erat nec, pulvinar commodo purus. In aliquet nunc ac maximus porta. Sed sit amet orci eget leo blandit faucibus in eget lorem. Nam facilisis purus nec ipsum viverra, a pretium turpis feugiat. Donec aliquam suscipit nibh id varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum quis arcu pulvinar, dapibus leo eu, auctor lectus. Ut quis placerat ante, nec euismod diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras scelerisque lobortis sollicitudin. Fusce ac quam diam. Pellentesque venenatis erat non lacus lacinia, non efficitur tellus auctor. Duis sit amet eros nec velit hendrerit condimentum.",
    title: "Corey Taylor",
    youtubeId: "QBK6xymmKHM",
  },
  {
    id: 1,
    label: "Rafa Brandão & Vitão Cardoso - Duo ",
    text: "Quisque porttitor ante at interdum volutpat. Quisque nec scelerisque enim, sed vestibulum leo. Ut cursus lacinia accumsan. Praesent sed erat lacinia, tincidunt velit iaculis, varius tellus. Etiam volutpat, lectus eu maximus ullamcorper, lorem diam accumsan diam, ac sagittis quam dui ac risus. Aliquam id ipsum laoreet, ullamcorper velit sed, congue ligula. Morbi auctor arcu ex, vitae viverra risus lobortis sed. Nulla molestie, nibh ac interdum feugiat, ipsum turpis fermentum velit, sit amet ullamcorper enim leo ac neque.",
    title: "Alicia Keys",
    youtubeId: "l7-SBHKtgD8",
  },
  {
    id: 2,
    label: "Rafa Brandão & Banda",
    text: "Cras nec nunc vestibulum, hendrerit velit at, vulputate turpis. Ut vitae cursus quam. Donec pellentesque felis tristique lobortis lobortis. Fusce quis tempus erat. Mauris aliquam vestibulum magna, tristique tempus orci aliquam eu. Sed vehicula velit id blandit blandit. Sed non maximus est. Mauris eleifend felis vel vestibulum faucibus.",
    title: "Soundgarden",
    youtubeId: "3mbBbFH9fAg",
  },
  {
    id: 3,
    label: "Trabalhos anteriores",
    text: "Cras nec nunc vestibulum, hendrerit velit at, vulputate turpis. Ut vitae cursus quam. Donec pellentesque felis tristique lobortis lobortis. Fusce quis tempus erat. Mauris aliquam vestibulum magna, tristique tempus orci aliquam eu. Sed vehicula velit id blandit blandit. Sed non maximus est. Mauris eleifend felis vel vestibulum faucibus.",
    title: "Linkin Park",
    youtubeId: "8Gc9-JT9gRM",
  },
];
