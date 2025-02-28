import { useState, useEffect } from "react";
import client from "../client";
import { NavLink } from "react-router-dom";
import Ticket from "../icons/Ticket";
import PageTitle from "../components/PageTitle";
import { Navigation } from "../data";

function Agenda() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] { title, date, eventHour, link, description, slug, body, mainImage {
          asset -> { _id, url },
          alt
        }
      }`
      )
      .then((data) => setShows(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <PageTitle  />
      <section className="agenda-container container">
        <div className="agenda-content container">
          {shows.map((show, index) => (
            <article key={index}>
              <div className="agenda-information animate__fadeInUp ">
                  <img
                    src={show.mainImage.asset.url}
                    alt={show.title}
                    loading="lazy"
                  />
                  <div className="agenda-information-place-time">
                    <h3>{show.title}</h3>
                    <div className="agenda-date-time">
                      <h3>{show.date}</h3> | <h3>{show.eventHour} horas</h3>
                    </div>
                    <p>{show.description}</p>
                    <button style={{display: show.link ? "block" : "none"}}>
                      {/* <NavLink to={`/agenda/${show.slug.current}`}>
                    Ver evento
                  </NavLink> */}
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
          ))}
        </div>
      </section>
    </>
  );
}

export default Agenda;
