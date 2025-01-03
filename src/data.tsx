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

export const GridLinkImages = [
  {
    id: 0,
    image: GridFoto0,
    alt: "Rafa Brandao - 1976 - 1984",
    link: "",
    datas: "1976 - 1984",
    country: "Brasil - Onde tudo começou",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image1: GridFoto0,
    image2: GridFoto1,
    image3: GridFoto2,
  },
  {
    id: 1,
    image: GridFoto1,
    alt: "1984 - 1988",
    link: "",
    datas: "1984 - 1988",
    country: "Brasil",
    text: "Nam commodo vel lectus vel venenatis. Mauris nisl enim, eleifend mattis dolor ut, tristique iaculis tellus. Etiam non nisl egestas, posuere orci finibus, posuere sem. Sed ac tincidunt justo. Fusce orci nunc, tincidunt vitae lorem non, feugiat posuere lectus. Aliquam elementum augue vitae mauris tempor, sed volutpat leo tincidunt. Pellentesque euismod iaculis tellus nec egestas. Praesent sed sapien dui. Maecenas vel tortor in velit lacinia elementum. Integer mollis auctor sem, non luctus ex sagittis ac. Donec sed urna dui. Aliquam hendrerit nulla a maximus eleifend. Suspendisse faucibus tellus est, eget ullamcorper velit tristique sit amet.",
    image1: GridFoto3,
    image2: GridFoto4,
    image3: GridFoto5,
  },
  {
    id: 2,
    image: GridFoto2,
    alt: "1989 - 1992",
    link: "",
    datas: "1989 - 1992",
    country: "Brasil",
    text: "Aenean congue faucibus accumsan. Sed ut lacus aliquet, aliquet felis sit amet, ornare metus. Nam imperdiet enim eget nibh tempus sodales. Etiam porttitor, leo pretium congue sagittis, tortor turpis iaculis quam, id iaculis mauris neque vel est. In hac habitasse platea dictumst. Vivamus scelerisque mauris ac imperdiet maximus. Nulla convallis feugiat pulvinar. Quisque vel consequat orci. Cras accumsan vel nunc bibendum efficitur. Vivamus quis enim in lacus consequat dapibus eget ut diam.",
  },
  {
    id: 3,
    image: GridFoto3,
    alt: "1993 - 2000",
    link: "",
    datas: "1993 - 2000",
    country: "Brasil",
    text: "Sed finibus nisl non velit pharetra interdum. Etiam imperdiet viverra blandit. Nam rhoncus sapien dolor, nec mollis urna rhoncus eu. Nam massa nulla, accumsan placerat interdum eu, auctor eu enim. Ut non venenatis leo. Maecenas metus metus, tincidunt ac convallis eget, consequat vitae ipsum. Quisque iaculis eget felis nec gravida. Pellentesque dapibus fermentum gravida. Duis bibendum tincidunt leo in dapibus. Integer pulvinar fermentum odio vitae posuere. Duis vel ullamcorper est. Morbi et leo sagittis eros ultrices sollicitudin. Sed semper ante quis nisl eleifend, vitae hendrerit magna posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
  {
    id: 4,
    image: GridFoto4,
    alt: "2001",
    link: "",
    datas: "2001",
    country: "Brasil",
    text: "Duis ut nulla quis leo imperdiet ornare. Pellentesque vitae nulla pulvinar, vestibulum ipsum nec, imperdiet ipsum. Aliquam non arcu ultricies, suscipit est sed, tincidunt urna. Integer ornare elit velit, eget sollicitudin metus condimentum vestibulum. Sed enim est, ullamcorper id tincidunt nec, mollis id nunc. Sed auctor blandit erat ornare commodo. Duis ullamcorper neque non tellus volutpat, ut tristique tortor aliquet. Nulla gravida porta velit ac molestie. Fusce sed ullamcorper turpis, nec iaculis leo.",
  },
  {
    id: 5,
    image: GridFoto5,
    alt: "2002",
    link: "",
    datas: "2002",
    country: "Portugal",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 6,
    image: GridFoto6,
    alt: "2008",
    link: "",
    datas: "2008",
    country: "Portugal",
    text: "Nam commodo vel lectus vel venenatis. Mauris nisl enim, eleifend mattis dolor ut, tristique iaculis tellus. Etiam non nisl egestas, posuere orci finibus, posuere sem. Sed ac tincidunt justo. Fusce orci nunc, tincidunt vitae lorem non, feugiat posuere lectus. Aliquam elementum augue vitae mauris tempor, sed volutpat leo tincidunt. Pellentesque euismod iaculis tellus nec egestas. Praesent sed sapien dui. Maecenas vel tortor in velit lacinia elementum. Integer mollis auctor sem, non luctus ex sagittis ac. Donec sed urna dui. Aliquam hendrerit nulla a maximus eleifend. Suspendisse faucibus tellus est, eget ullamcorper velit tristique sit amet.",
  },
  {
    id: 7,
    image: GridFoto7,
    alt: "2012",
    link: "",
    datas: "2012",
    country: "Alemanha",
    text: "Aenean congue faucibus accumsan. Sed ut lacus aliquet, aliquet felis sit amet, ornare metus. Nam imperdiet enim eget nibh tempus sodales. Etiam porttitor, leo pretium congue sagittis, tortor turpis iaculis quam, id iaculis mauris neque vel est. In hac habitasse platea dictumst. Vivamus scelerisque mauris ac imperdiet maximus. Nulla convallis feugiat pulvinar. Quisque vel consequat orci. Cras accumsan vel nunc bibendum efficitur. Vivamus quis enim in lacus consequat dapibus eget ut diam.",
  },
  {
    id: 8,
    image: GridFoto8,
    alt: "2012",
    link: "",
    datas: "2018",
    country: "Alemanha",
    text: "Sed finibus nisl non velit pharetra interdum. Etiam imperdiet viverra blandit. Nam rhoncus sapien dolor, nec mollis urna rhoncus eu. Nam massa nulla, accumsan placerat interdum eu, auctor eu enim. Ut non venenatis leo. Maecenas metus metus, tincidunt ac convallis eget, consequat vitae ipsum. Quisque iaculis eget felis nec gravida. Pellentesque dapibus fermentum gravida. Duis bibendum tincidunt leo in dapibus. Integer pulvinar fermentum odio vitae posuere. Duis vel ullamcorper est. Morbi et leo sagittis eros ultrices sollicitudin. Sed semper ante quis nisl eleifend, vitae hendrerit magna posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
  {
    id: 9,
    image: GridFoto9,
    alt: "2019 até a presente data",
    link: "",
    datas: "2019 até a presente data",
    country: "Alemanha",
    text: "Duis ut nulla quis leo imperdiet ornare. Pellentesque vitae nulla pulvinar, vestibulum ipsum nec, imperdiet ipsum. Aliquam non arcu ultricies, suscipit est sed, tincidunt urna. Integer ornare elit velit, eget sollicitudin metus condimentum vestibulum. Sed enim est, ullamcorper id tincidunt nec, mollis id nunc. Sed auctor blandit erat ornare commodo. Duis ullamcorper neque non tellus volutpat, ut tristique tortor aliquet. Nulla gravida porta velit ac molestie. Fusce sed ullamcorper turpis, nec iaculis leo.",
  },
];

export const BiografiaCarouselImages = [
  {
    id: 0,
    image: GridFoto0,
  },
];
