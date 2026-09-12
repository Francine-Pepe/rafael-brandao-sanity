import { useState, useEffect } from "react";
import client from "../client";
import { NavLink } from "react-router-dom";
import Ticket from "../icons/Ticket";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import PageDescription from "../components/PageDescription";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";

function Agenda() {
  const [shows, setShows] = useState([]);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [animationDuration] = useState(500);
  const [maxZoomPixelRatio] = useState(1);
  const [zoomInMultiplier] = useState(2);
  const [doubleTapDelay] = useState(300);
  const [doubleClickDelay] = useState(300);
  const [doubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor] = useState(100);
  const [scrollToZoom] = useState(false);

  // Format Sanity date as DD.MM.YYYY
  const formatDate = (date) => {
    if (!date) return "";

    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  };

  useEffect(() => {
    const fetchAgenda = async () => {
      const query = `*[_type == "post"] {
        title,
        eventDate,
        date,
        eventHour,
        link,
        description,
        slug,
        eventTitle,
        body,
        mainImage {
          asset -> { _id, url },
          alt
        }
      }`;

      const result = await client.fetch(query);
      setShows(result);
    };

    fetchAgenda();
  }, []);

  const handleClick = (index) => {
    setOpen(!open && index);
  };

  const closeModal = () => {
    setOpen(true);
  };

  return (
    <>
      <PageTitle data={t("nav", { returnObjects: true })} />
      <PageDescription data={t("pageDescriptionAgenda")} />

      <section className="agenda-container container">
        <div className="agenda-content container">
          {shows
            // Earliest date → latest date
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((show) => {
              const eventTitle = show.eventTitle || {};
              const eventDate = show.eventDate || {};
              const text = show.body || {};

              return (
                <article
                  key={show.slug.current}
                  className="individual-agenda-content"
                >
                  <div
                    className="agenda-information"
                    onClick={() => handleClick(show.slug)}
                  >
                    <img
                      src={show.mainImage.asset.url}
                      alt={show.title}
                      loading="lazy"
                    />

                    {open === show.slug && (
                      <Lightbox
                        animation={{ zoom: animationDuration }}
                        plugins={[Zoom]}
                        zoom={{
                          maxZoomPixelRatio,
                          zoomInMultiplier,
                          doubleTapDelay,
                          doubleClickDelay,
                          doubleClickMaxStops,
                          keyboardMoveDistance,
                          wheelZoomDistanceFactor,
                          pinchZoomDistanceFactor,
                          scrollToZoom,
                        }}
                        styles={{
                          container: {
                            backgroundColor: "rgba(0, 0, 0, .9)",
                          },
                        }}
                        open={open}
                        close={() => closeModal(false)}
                        slides={[{ src: show.mainImage.asset.url }]}
                        className="lightbox lightbox-news"
                      />
                    )}

                    <div className="agenda-information-place-time">
                      <h3 className="event-title">
                        {eventTitle[navigator.language] ||
                          eventTitle[i18n.language] ||
                          eventTitle.pt ||
                          ""}
                      </h3>

                      <div className="agenda-date-time">
                        {show.date ? (
                          <h3>{formatDate(show.date)}</h3>
                        ) : (
                          <h3>
                            {eventDate[navigator.language] ||
                              eventDate[i18n.language] ||
                              eventDate.pt ||
                              ""}
                          </h3>
                        )}

                        {show.eventHour && <span>|</span>}

                        {show.eventHour && (
                          <h3 className="event-hour">{show.eventHour}</h3>
                        )}
                      </div>

                      {/* <div className="event-date-description">
                        {eventDate[navigator.language] ||
                          eventDate[i18n.language] ||
                          eventDate.pt ||
                          ""}
                      </div> */}

                      <PortableText
                        value={
                          text[navigator.language] ||
                          text[i18n.language] ||
                          text.pt ||
                          "No text available"
                        }
                      />

                      <button
                        style={{
                          display: show.link ? "block" : "none",
                        }}
                      >
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
