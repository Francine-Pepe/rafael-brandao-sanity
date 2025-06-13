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
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: `${navigator.language}`,
    returnObjects: true,
    lng: "pt",
    resources: {
      pt: {
        translation: {
          greeting: "Olá, seja bem-vindo!",
          text: "Rafa Brandão é um cantor e compositor brasileiro com uma longa trajetória musical iniciada nos anos 1980 em Belo Horizonte, sua cidade natal. Começou como vocalista em diversos grupos e, nos anos 1990, no Rio de Janeiro – onde viveu por muitos anos –, consolidou-se como letrista e compositor ao integrar as bandas Vitrine e Radicais Livres. Nos Radicais Livres, estabeleceu uma parceria com Ronaldo Miragaya, que durou até sua saída do Brasil no final de 2002.\n\nEm 2001, os Radicais Livres lançaram um álbum homônimo, no qual se destacou a canção Ataques, vencedora do concurso Ih Radical, do canal Multishow, com mais de 22 mil votos pela internet. O prêmio garantiu à banda um videoclipe produzido pelo próprio Multishow e grande visibilidade na mídia, com entrevistas e matérias na imprensa.\n\nEntre 2003 e 2012, Rafa viveu em Lisboa, Portugal, onde recomeçou sua carreira, tocando com diversos músicos brasileiros e portugueses e iniciando apresentações em bares no formato voz e violão.\n\nDesde 2012, reside em Hamburgo, Alemanha, onde, em 2018, lançou seu primeiro álbum individual, Solo, no qual escreveu praticamente todas as letras e músicas. O disco foi produzido e arranjado por seu amigo, o guitarrista e compositor Jessé Gomes. Suas influências musicais vão da música popular brasileira, bossa nova, samba, pop e rock à black music americana, incluindo soul, funk e blues. Entre suas grandes referências, destacam-se Caetano Veloso, Cazuza e Mick Jagger.\n\nDesde 2018, Rafa realiza concertos anuais com sua banda, apresentando composições próprias, além de desenvolver um projeto em duo com o percussionista Vitão Cardoso. Também mantém o formato acústico de voz e violão, apresentando-se em festas privadas e em locais de destaque, como o restaurante brasileiro Xodó, em Hamburgo, onde toca todas as quartas-feiras desde julho de 2023.\n\nO álbum Solo, de Rafa Brandão, está disponível nas principais plataformas digitais, como Spotify, Deezer, Apple Music e Amazon Music, além de ser vendido em suas apresentações. O álbum Radicais Livres (2001) também pode ser encontrado no Spotify.\n\nCompositor atento às diversidades do mundo e aos sinais espirituais, letrista essencialmente urbano, que captura em suas canções as nuances das relações humanas, dos amores e desencontros, e, acima de tudo, um cantor que ama cantar e levar sua música a todos os cantos do planeta.\n\nApresento-lhes, Rafa Brandão.",
          nav: [
            {
              name: "News",
              link: "/news",
            },
            {
              name: "Agenda",
              link: "/agenda",
            },
            { name: "Galeria", link: "/galeria" },
            { name: "Videos", link: "/videos" },
            { name: "Biografia", link: "/biografia" },
            { name: "Contato", link: "/contato" },
          ],
          navFooter: [
            {
              name: "Proteção de dados",
              link: "/datenschutz",
            },
            {
              name: "Aviso Legal",
              link: "/impressum",
            },
          ],
          contactBox: [
            {
              id: 1,
              text: "Está planejando um evento, uma festa e procura uma apresentação musical única e cheia de energia? Gostaria de receber um orçamento e/ou mais informações sobre o show do artista? Entre em contato diretamente por e-mail:",
              link: "mailto:contato@rafa-brandao.com?bcc=rafabrando@yahoo.com",
              linkText: "contato@rafa-brandao.com",
            },
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
            "Aqui você encontrará todos os próximos shows de Rafa Brandão,  em todos os formatos em que o artista atua: voz e violão, duo, trio ou banda. Informações adicionais como endereço, horário e venda de tickets também estarão disponíveis.",
          pageDescriptionVideos:
            "Nesta seção você encontra os vídeos que apresentam os trabalhos de Rafa Brandão em seus principais formatos: voz e violão, duo e com sua banda. Além disso, em “Trabalhos Anteriores”, disponibilizamos uma seleção de vídeos de bandas como Radicais Livres e Vitrine, as bandas cariocas que marcaram a carreira de Rafa no Rio de Janeiro, além de reportagens e entrevistas.",

          pageDescriptionNews:
            "Aqui você encontrará todas as novidades, entrevistas, reportagens e videos mais recentes sobre a carreira de Rafa Brandão. ",
          footerContact: [
            {
              id: 0,
              title: "Onde ouvir",
            },
            {
              id: 1,
              title: "Contato",
            },
          ],
          cookieBannerTitle: "Consentimento de Cookies",
          cookieBannerText:
            "Utilizamos incorporações do YouTube que podem utilizar cookies. Selecione:",
          youtubeBlocked: "Conteúdo do YouTube bloqueado",
          cookieDeclined:
            "Você recusou o consentimento de cookies para vídeos do YouTube.",
          allowYoutubeVideos: "Permitir cookies do YouTube",
          cookieButtonAccept: "Aceitar",
          cookieButtonDecline: "Rejeitar",
        },
      },
      en: {
        translation: {
          greeting: "Hello, Welcome!",
          text: "Rafa Brandão is a Brazilian singer and composer with a long musical career that began in the 1980s in Belo Horizonte, his hometown. He started out as a vocalist in several groups and, in the 1990s, in Rio de Janeiro – where he lived for many years –, he established himself as a lyricist and composer by joining the bands Vitrine and Radicais Livres. In Radicais Livres, he established a partnership with Ronaldo Miragaya, which lasted until his departure from Brazil at the end of 2002.\n\nIn 2001, Radicais Livres released a self-titled album, which featured the song Ataques, winner of the Ih Radical contest on the Multishow channel, with more than 22 thousand votes on the internet. The award guaranteed the band a music video produced by Multishow itself and great visibility in the media, with interviews and articles in the press.\n\nBetween 2003 and 2012, Rafa lived in Lisbon, Portugal, where he restarted his career, playing with several musicians Brazilians and Portuguese and began performing in bars with voice and guitar.\n\nSince 2012, he has lived in Hamburg, Germany, where, in 2018, he released his first solo album, Solo, for which he wrote practically all the lyrics and music. The album was produced and arranged by his friend, guitarist and composer Jessé Gomes. His musical influences range from Brazilian popular music, bossa nova, samba, pop and rock to American black music, including soul, funk and blues. Some of his great influences include Caetano Veloso, Cazuza and Mick Jagger.\n\nSince 2018, Rafa has performed annual concerts with his band, presenting his own compositions, in addition to developing a duo project with percussionist Vitão Cardoso. He also maintains the acoustic format of voice and guitar, performing at private parties and in prominent venues, such as the Brazilian restaurant Xodó, in Hamburg, where he has played every Wednesday since July 2023.\n\nRafa Brandão's album Solo is available on the main digital platforms, such as Spotify, Deezer, Apple Music and Amazon Music, in addition to being sold at his performances. The album Radicais Livres (2001) can also be found on Spotify.\n\nA composer attentive to the diversity of the world and spiritual signs, an essentially urban lyricist, who captures in his songs the nuances of human relationships, loves and disagreements, and, above all, a singer who loves to sing and take his music to every corner of the planet.\n\nI present to you, Rafa Brandão.",
          nav: [
            {
              name: "News",
              link: "/news",
            },
            {
              name: "Upcoming",
              link: "/agenda",
            },
            { name: "Gallery", link: "/galeria" },
            { name: "Videos", link: "/videos" },
            { name: "Biography", link: "/biografia" },
            {
              name: "Contact",
              link: "/contato",
            },
          ],
          navFooter: [
            {
              name: "Data protection",
              link: "/datenschutz",
            },
            {
              name: "Legal Notice",
              link: "/impressum",
            },
          ],
          contactBox: [
            {
              id: 1,
              text: "Planning an event or party and looking for a unique and high-energy musical performance? Would you like to receive a quote and/or more information about the artist’s show? Get in touch directly via email:",
              link: "mailto:contato@rafa-brandao.com?bcc=rafabrando@yahoo.com",
              linkText: "contato@rafa-brandao.com",
            },
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
          galleryText:
            "A gallery of memories and the journey of a musical life",
          developedBy: "Developed by Francine Pêpe",
          rightsReserved: "All rights reserved",
          homepageButton: "Singer and Songwriter",
          pageDescriptionAgenda:
            "Here you will find all upcoming shows by Rafa Brandão, in all the formats in which the artist performs: voice and acoustic guitar, duo, trio, or full band. Additional information such as venue address, time, and ticket sales will also be available.",
          pageDescriptionVideos:
            "In this section, you will find videos showcasing Rafa Brandão’s work in his main formats: voice and acoustic guitar, duo, and with his band. Additionally, under “Previous Work,” we offer a selection of videos from bands such as Radicais Livres and Vitrine — two Rio de Janeiro-based bands that marked important moments in Rafa’s career — as well as interviews and media features.",
          pageDescriptionNews:
            "Here you will find all the latest news, interviews, reports, and videos about Rafa Brandão's career.",
          footerContact: [
            {
              id: 0,
              title: "Listen on",
            },
            {
              id: 1,
              title: "Contact",
            },
          ],
          cookieBannerTitle: "Cookie Consent",
          cookieBannerText:
            "We use YouTube embeds that may use cookies. Please choose:",
          youtubeBlocked: "YouTube Content Blocked",
          cookieDeclined: "You declined cookie consent for YouTube videos.",
          allowYoutubeVideos: "Allow YouTube Cookies",
          cookieButtonAccept: "Accept",
          cookieButtonDecline: "Decline",
        },
      },
      de: {
        translation: {
          greeting: "Hallo, Herzlich Wilkommen!",
          text: "Rafa Brandão ist eine brasilianische Sänger und Songwriter mit einer langen musikalischen Karriere, die in den 1980er Jahren in Belo Horizonte, seiner Heimatstadt begann. Er begann als Sänger in mehreren Gruppen und in den 1990er Jahren etablierte er in den 1990er Jahren in Rio de Janeiro, wo er sich als Lyric -Lyres -Lycis -Lycis -Lyric -Börsen und -vitrin mit dem Lycres -Lagen und der Vitrin mit dem Lyric und der Bänder einsetzte Ronaldo Miragaya, der bis zu seiner Abreise aus Brasilien Ende 2002 dauerte. Press. Brasilianer und Portugiesen und begann, in Bars als Sänger und Gitarrenmusiker aufzutreten.\n\nSeit 2012 lebt er in Hamburg, Deutschland, wo er 2018 sein erstes Soloalbum „Solo“ veröffentlichte, für das er praktisch alle Texte und die Musik selbst schrieb. Das Album wurde von seinem Freund, Gitarristen und Komponisten Jessé Gomes produziert und arrangiert. Seine musikalischen Einflüsse reichen von brasilianischer Popmusik, Bossa Nova, Samba, Pop und Rock bis hin zu amerikanischer Black Music, darunter Soul, Funk und Blues. Zu seinen großen Referenzen zählen Caetano Veloso, Cazuza und Mick Jagger.\n\nSeit 2018 gibt Rafa jährliche Konzerte mit seiner Band, bei denen er seine eigenen Kompositionen präsentiert, und entwickelt außerdem ein Duo-Projekt mit dem Schlagzeuger Vitão Cardoso. Er pflegt auch das akustische Format mit Gesang und Gitarre und tritt bei privaten Partys und an prominenten Veranstaltungsorten auf, beispielsweise im brasilianischen Restaurant Xodó in Hamburg, wo er seit Juli 2023 jeden Mittwoch spielt.\n\nRafa Brandãos Album „Solo“ ist auf den wichtigsten digitalen Plattformen wie Spotify, Deezer, Apple Music und Amazon Music erhältlich und wird außerdem bei seinen Auftritten verkauft. Das Album Radicais Livres (2001) ist auch auf Spotify zu finden.\n\nEin Komponist, der auf die Vielfalt und die spirituellen Zeichen der Welt achtet, ein im Wesentlichen urbaner Texter, der in seinen Liedern die Nuancen menschlicher Beziehungen, Lieben und Missverständnisse einfängt, und vor allem ein Sänger, der es liebt zu singen und seine Musik in jeden Winkel des Planeten zu tragen.\n\nIch präsentiere Ihnen Rafa Brandão.",
          nav: [
            {
              name: "News",
              link: "/news",
            },
            {
              name: "Konzerte",
              link: "/agenda",
            },
            { name: "Galerie", link: "/galeria" },

            { name: "Videos", link: "/videos" },
            { name: "Biografie", link: "/biografia" },
            {
              name: "Kontakt",
              link: "/contato",
            },
          ],
          navFooter: [
            {
              name: "Datenschutz",
              link: "/datenschutz",
            },
            {
              name: "Impressum",
              link: "/impressum",
            },
          ],
          contactBox: [
            {
              id: 1,
              text: "Planen Sie eine Veranstaltung oder eine Party und suchen nach einer einzigartigen und energiegeladenen musikalischen Darbietung? Möchten Sie ein Angebot erhalten und/oder weitere Informationen über die Show des Künstlers? Dann nehmen Sie Kontakt direkt per E-Mail auf:",
              link: "mailto:contato@rafa-brandao.com?bcc=rafabrando@yahoo.com",
              linkText: "contato@rafa-brandao.com",
            },
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
            "Galerie der Erinnerungen und der Reise eines musikalischen Lebens",
          developedBy: "Entwickelt von Francine Pêpe",
          rightsReserved: "Alle Rechte vorbehalten",
          homepageButton: "Sänger und Songwriter",
          pageDescriptionAgenda:
            "Hier findest du alle kommenden Auftritte von Rafa Brandão, in allen Formaten, in denen der Künstler auftritt: Solo mit Gesang und Gitarre, im Duo, Trio oder mit kompletter Band. Zusätzliche Informationen wie Adresse, Uhrzeit und Ticketverkauf werden ebenfalls verfügbar sein.",
          pageDescriptionVideos:
            "In diesem Abschnitt finden Sie Videos, die die Arbeiten von Rafa Brandão in seinen wichtigsten Formationen präsentieren: Gesang und Akustikgitarre, im Duo sowie mit seiner Band. Außerdem stellen wir unter „Frühere Arbeiten“ eine Auswahl an Videos von Bands wie Radicais Livres und Vitrine zur Verfügung – zwei Bands aus Rio de Janeiro, die Rafa Brandãos Karriere entscheidend geprägt haben – sowie Reportagen und Interviews.",
          pageDescriptionNews:
            "Hier findest du alle Neuigkeiten, Interviews, Reportagen und die neuesten Videos über die Karriere von Rafa Brandão.",
          footerContact: [
            {
              id: 0,
              title: "Wo zuhören",
            },
            {
              id: 1,
              title: "Kontakt",
            },
          ],
          cookieBannerTitle: "Cookies-Einwilligungspräferenzen",
          cookieBannerText:
            "Wir verwenden eingebettete YouTube-Videos, die möglicherweise Cookies verwenden. Bitte wählen Sie:",
          youtubeBlocked: "YouTube-Inhalte blockiert",
          cookieDeclined:
            "Sie haben die Cookie-Zustimmung für YouTube-Videos abgelehnt.",
          allowYoutubeVideos: "YouTube-Cookies zulassen",
          cookieButtonAccept: "Akzeptieren",
          cookieButtonDecline: "Ablehnen",
        },
      },
    },
  });

export default i18n;
