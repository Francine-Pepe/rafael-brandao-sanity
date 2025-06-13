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
