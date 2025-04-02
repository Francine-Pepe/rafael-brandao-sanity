import { useState, useEffect } from "react";
import client from "../client";
import { NavLink } from "react-router-dom";
import Ticket from "../icons/Ticket";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import PageDescription from "../components/PageDescription";

function Agenda() {
  const [shows, setShows] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchAgenda = async () => {
      const query = `*[_type == "post"] { title, date, eventHour, link, description, slug, eventTitle, body, mainImage {
          asset -> { _id, url },
          alt
        }
      }`;
      const result = await client.fetch(query);
      setShows(result);
    };

    fetchAgenda();
  }, []);

  return (
    <>
      <PageTitle />
      <PageDescription data={t("pageDescriptionAgenda")} />
      <section className="agenda-container container">
        <div className="agenda-content container">
          {shows
            .sort((a, b) => (a.date > b.date ? 1 : -1))
            .map((show) => {
              const eventTitle = show.eventTitle || {};
              const text = show.body || {};

              return (
                <article key={show.slug.current}>
                  <div className="agenda-information animate__fadeInUp ">
                    <img
                      src={show.mainImage.asset.url}
                      alt={show.title}
                      loading="lazy"
                    />
                    <div className="agenda-information-place-time">
                      <h3>
                        {eventTitle[navigator.language] ||
                          eventTitle[i18n.language] ||
                          eventTitle.pt ||
                          "No title available"}
                      </h3>
                      <div className="agenda-date-time">
                        <h3>{show.date}</h3> | <h3>{show.eventHour}</h3>
                      </div>
                      <PortableText
                        value={
                          text[navigator.language] ||
                          text[i18n.language] ||
                          text.pt ||
                          "No text available"
                        }
                      />

                      <button style={{ display: show.link ? "block" : "none" }}>
                        <NavLink
                          to={show.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Ticket />
                          <h4>Tickets</h4>
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Agenda;
