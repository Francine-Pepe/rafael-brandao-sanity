import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: `${navigator.language}`,
    returnObjects: true,
    lng: "pt",
    resources: {
      pt: {
        translation: {
          greeting: "Olá, seja bem-vindo!",
          text: "Rafa Brandão é um cantor e compositor brasileiro com uma longa trajetória musical iniciada nos anos 1980 em Belo Horizonte, sua cidade natal. Começou como vocalista em diversos grupos e, nos anos 1990, no Rio de Janeiro – onde viveu por muitos anos –, consolidou-se como letrista e compositor ao integrar as bandas Vitrine e Radicais Livres. Nos Radicais Livres, estabeleceu uma parceria com Ronaldo Miragaya, que durou até sua saída do Brasil no final de 2002.\n\nEm 2001, os Radicais Livres lançaram um álbum homônimo, no qual se destacou a canção Ataques, vencedora do concurso Ih Radical, do canal Multishow, com mais de 22 mil votos pela internet. O prêmio garantiu à banda um videoclipe produzido pelo próprio Multishow e grande visibilidade na mídia, com entrevistas e matérias na imprensa.\n\nEntre 2003 e 2012, Rafa viveu em Lisboa, Portugal, onde recomeçou sua carreira, tocando com diversos músicos brasileiros e portugueses e iniciando apresentações em bares no formato voz e violão.\n\nDesde 2012, reside em Hamburgo, Alemanha, onde, em 2018, lançou seu primeiro álbum individual, Solo, no qual escreveu praticamente todas as letras e músicas. O disco foi produzido e arranjado por seu amigo, o guitarrista e compositor Jessé Gomes. Suas influências musicais vão da música popular brasileira, bossa nova, samba, pop e rock à black music americana, incluindo soul, funk e blues. Entre suas grandes referências, destacam-se Caetano Veloso, Cazuza e Mick Jagger.\n\nDesde 2018, Rafa realiza concertos anuais com sua banda, apresentando composições próprias, além de desenvolver um projeto em duo com o percussionista Vitão Cardoso. Também mantém o formato acústico de voz e violão, apresentando-se em festas privadas e em locais de destaque, como o restaurante brasileiro Xodó, em Hamburgo, onde toca todas as quartas-feiras desde julho de 2023.\n\nO álbum Solo, de Rafa Brandão, está disponível nas principais plataformas digitais, como Spotify, Deezer, Apple Music e Amazon Music, além de ser vendido em suas apresentações. O álbum Radicais Livres (2001) também pode ser encontrado no Spotify.\n\nCompositor atento às diversidades do mundo e aos sinais espirituais, letrista essencialmente urbano, que captura em suas canções as nuances das relações humanas, dos amores e desencontros, e, acima de tudo, um cantor que ama cantar e levar sua música a todos os cantos do planeta.\n\nApresento-lhes, Rafa Brandão.",
          nav: [
            { name: "Biografia", link: "/biografia" },
            {
              name: "Agenda",
              link: "/agenda",
            },
            { name: "Galeria", link: "/galeria" },
            {
              name: "News",
              link: "/news",
            },
            { name: "Videos", link: "/videos" },
            {
              name: "Contato",
              link: "/contato",
            },
          ],
          contactBox: [
            {
              id: 1,
              text: "Está planejando um evento e procura uma apresentação musical única e cheia de energia? Gostaria de receber um orçamento ou mais informações? Entre em contato usando o formulário de contato ou diretamente por e-mail:",
              link: "mailto:contato@rafa-brandao.com",
              linkText: "contato@rafa-brandao.com",
            },
            /*             {
              id: 2,
              text: "Para shows:",
              link: "mailto:shows@rafa-brandao.com",
              linkText: "shows@rafa-brandao.com",
            }, */
          ],
          contactFormData: [
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
          ],
          message: "Mensagem:",
          send: "Enviar",
          whereListen: [
            {
              title: "Onde ouvir",
            },
            {
              title: "Contato",
            },
          ],
          galleryText:
            "Galeria de recordações e trajetória de uma vida musical",
          developedBy: "Desenvolvido por Francine Pêpe",
          rightsReserved: "Todos os direitos reservados",
          homepageButton: "Cantor e Compositor",
          pageDescriptionAgenda:
            "Aqui voce encontrará um pouco mais sobre a minha agenda de shows, eventos e apresentações. Para mais informações, entre em contato.",
          pageDescriptionVideos:
            "Aqui você encontrará um pouco mais sobre os meus vídeos, clipes e apresentações. Para mais informações, entre em contato.",
          pageDescriptionNews:
            "Aqui você encontrará um pouco mais sobre as minhas notícias, clipes e apresentações. Para mais informações, entre em contato.",
        },
      },
      en: {
        translation: {
          greeting: "Hello, Welcome!",
          text: "Rafa Brandão is a Brazilian singer and composer with a long musical career that began in the 1980s in Belo Horizonte, his hometown. He started out as a vocalist in several groups and, in the 1990s, in Rio de Janeiro – where he lived for many years –, he established himself as a lyricist and composer by joining the bands Vitrine and Radicais Livres. In Radicais Livres, he established a partnership with Ronaldo Miragaya, which lasted until his departure from Brazil at the end of 2002.\n\nIn 2001, Radicais Livres released a self-titled album, which featured the song Ataques, winner of the Ih Radical contest on the Multishow channel, with more than 22 thousand votes on the internet. The award guaranteed the band a music video produced by Multishow itself and great visibility in the media, with interviews and articles in the press.\n\nBetween 2003 and 2012, Rafa lived in Lisbon, Portugal, where he restarted his career, playing with several musicians Brazilians and Portuguese and began performing in bars with voice and guitar.\n\nSince 2012, he has lived in Hamburg, Germany, where, in 2018, he released his first solo album, Solo, for which he wrote practically all the lyrics and music. The album was produced and arranged by his friend, guitarist and composer Jessé Gomes. His musical influences range from Brazilian popular music, bossa nova, samba, pop and rock to American black music, including soul, funk and blues. Some of his great influences include Caetano Veloso, Cazuza and Mick Jagger.\n\nSince 2018, Rafa has performed annual concerts with his band, presenting his own compositions, in addition to developing a duo project with percussionist Vitão Cardoso. He also maintains the acoustic format of voice and guitar, performing at private parties and in prominent venues, such as the Brazilian restaurant Xodó, in Hamburg, where he has played every Wednesday since July 2023.\n\nRafa Brandão's album Solo is available on the main digital platforms, such as Spotify, Deezer, Apple Music and Amazon Music, in addition to being sold at his performances. The album Radicais Livres (2001) can also be found on Spotify.\n\nA composer attentive to the diversity of the world and spiritual signs, an essentially urban lyricist, who captures in his songs the nuances of human relationships, loves and disagreements, and, above all, a singer who loves to sing and take his music to every corner of the planet.\n\nI present to you, Rafa Brandão.",
          nav: [
            { name: "Biography", link: "/biografia" },
            {
              name: "Agenda",
              link: "/agenda",
            },
            { name: "Gallery", link: "/galeria" },
            {
              name: "News",
              link: "/news",
            },
            { name: "Videos", link: "/videos" },
            {
              name: "Contact",
              link: "/contato",
            },
          ],
          contactBox: [
            {
              id: 1,
              text: "Are you planning an event and looking for a unique and energetic musical performance? Would you like a quote or more information? Get in touch using the contact form or directly by e-mail:",
              link: "mailto:contato@rafa-brandao.com",
              linkText: "contato@rafa-brandao.com",
            },
            /*             {
              id: 2,
              text: "For shows:",
              link: "mailto:shows@rafa-brandao.com",
              linkText: "shows@rafa-brandao.com",
            }, */
          ],
          contactFormData: [
            {
              id: "name",
              title: "Name:",
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
              title: "Phone:",
              htmlFor: "phone",
              name: "user_phone",
              type: "tel",
              placeholder: "",
            },
          ],
          message: "Message:",
          send: "Send",
          galleryText: "Gallery of memories and trajectory of a musical life",
          developedBy: "Developed by Francine Pêpe",
          rightsReserved: "All rights reserved",
          homepageButton: "Singer and Songwriter",
          pageDescriptionAgenda:
            "Here you will find a little more about my schedule of shows, events and presentations. For more information, please contact me.",
          pageDescriptionVideos:
            "Here you will find a little more about my videos, clips and presentations. For more information, please contact me.",
          pageDescriptionNews:
            "Here you will find a little more about my news, clips and presentations. For more information, please contact me.",
        },
      },
      de: {
        translation: {
          greeting: "Hallo, Herzlich Wilkommen!",
          text: "Rafa Brandão ist eine brasilianische Sängerin und Komponistin mit einer langen musikalischen Karriere, die in den 1980er Jahren in Belo Horizonte, seiner Heimatstadt begann. Er begann als Sänger in mehreren Gruppen und in den 1990er Jahren etablierte er in den 1990er Jahren in Rio de Janeiro, wo er sich als Lyric -Lyres -Lycis -Lycis -Lyric -Börsen und -vitrin mit dem Lycres -Lagen und der Vitrin mit dem Lyric und der Bänder einsetzte Ronaldo Miragaya, der bis zu seiner Abreise aus Brasilien Ende 2002 dauerte. Press. Brasilianer und Portugiesen und begann, in Bars als Sänger und Gitarrenmusiker aufzutreten.\n\nSeit 2012 lebt er in Hamburg, Deutschland, wo er 2018 sein erstes Soloalbum „Solo“ veröffentlichte, für das er praktisch alle Texte und die Musik selbst schrieb. Das Album wurde von seinem Freund, Gitarristen und Komponisten Jessé Gomes produziert und arrangiert. Seine musikalischen Einflüsse reichen von brasilianischer Popmusik, Bossa Nova, Samba, Pop und Rock bis hin zu amerikanischer Black Music, darunter Soul, Funk und Blues. Zu seinen großen Referenzen zählen Caetano Veloso, Cazuza und Mick Jagger.\n\nSeit 2018 gibt Rafa jährliche Konzerte mit seiner Band, bei denen er seine eigenen Kompositionen präsentiert, und entwickelt außerdem ein Duo-Projekt mit dem Schlagzeuger Vitão Cardoso. Er pflegt auch das akustische Format mit Gesang und Gitarre und tritt bei privaten Partys und an prominenten Veranstaltungsorten auf, beispielsweise im brasilianischen Restaurant Xodó in Hamburg, wo er seit Juli 2023 jeden Mittwoch spielt.\n\nRafa Brandãos Album „Solo“ ist auf den wichtigsten digitalen Plattformen wie Spotify, Deezer, Apple Music und Amazon Music erhältlich und wird außerdem bei seinen Auftritten verkauft. Das Album Radicais Livres (2001) ist auch auf Spotify zu finden.\n\nEin Komponist, der auf die Vielfalt und die spirituellen Zeichen der Welt achtet, ein im Wesentlichen urbaner Texter, der in seinen Liedern die Nuancen menschlicher Beziehungen, Lieben und Missverständnisse einfängt, und vor allem ein Sänger, der es liebt zu singen und seine Musik in jeden Winkel des Planeten zu tragen.\n\nIch präsentiere Ihnen Rafa Brandão.",
          nav: [
            { name: "Biografie", link: "/biografia" },
            {
              name: "Agenda",
              link: "/agenda",
            },
            { name: "Galerie", link: "/galeria" },
            {
              name: "News",
              link: "/news",
            },
            { name: "Videos", link: "/videos" },
            {
              name: "Kontakt",
              link: "/contato",
            },
          ],
          contactBox: [
            {
              id: 1,
              text: "Sie planen eine Veranstaltung und sind auf der Suche nach einer einzigartigen und energiegeladenen musikalischen Darbietung? Möchten Sie ein Angebot oder weitere Informationen? Kontaktieren Sie uns über das Kontaktformular oder direkt per E-Mail:",
              link: "mailto:contato@rafa-brandao.com",
              linkText: "contato@rafa-brandao.com",
            },
            /*             {
              id: 2,
              text: "Für Shows:",
              link: "mailto:shows@rafa-brandao.com",
              linkText: "shows@rafa-brandao.com",
            }, */
          ],
          contactFormData: [
            {
              id: "name",
              title: "Name:",
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
              title: "Telefon:",
              htmlFor: "phone",
              name: "user_phone",
              type: "tel",
              placeholder: "",
            },
          ],
          message: "Nachricht:",
          send: "Senden",
          galleryText:
            "Galerie der Erinnerungen und des Werdegangs eines musikalischen Lebens",
          developedBy: "Entwickelt von Francine Pêpe",
          rightsReserved: "Alle Rechte vorbehalten",
          homepageButton: "Sänger und Songwriter",
          pageDescriptionAgenda:
            "Hier erfahren Sie mehr über meinen Zeitplan für Shows, Veranstaltungen und Präsentationen. Für weitere Informationen kontaktieren Sie uns bitte.",
          pageDescriptionVideos:
            "Hier erfahren Sie mehr über meine Videos, Clips und Präsentationen. Für weitere Informationen kontaktieren Sie uns bitte.",
          pageDescriptionNews:
            "Hier finden Sie etwas mehr zu meinen Neuigkeiten, Clips und Präsentationen. Für weitere Informationen kontaktieren Sie uns bitte.",
        },
      },
    },
  });

export default i18n;
