import { useState, useEffect } from "react";
import client from "../client";
import { NavLink } from "react-router-dom";

function Agenda() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] { title, date, eventHour, description, slug, body, mainImage {
          asset -> { _id, url },
          alt
        }
      }`
      )
      .then((data) => setShows(data))
      .catch(console.error);
  }, []);

  return (
    <section className="agenda-container container">
      <h1>Shows page</h1>
      <h2>You are viewing {shows.length} shows </h2>

      <div className="agenda-content container">
        {shows.map((show) => (
          <article>
            <div className="agenda-information ">
              <img src={show.mainImage.asset.url} alt={show.title} />
              <div className="agenda-information-place-time">
                <h3>{show.title}</h3>
                <div className="agenda-date-time">
                  <h3>{show.date}</h3> | <h3>{show.eventHour} horas</h3>
                </div>
                <p>Description</p>
                <button>
                  <NavLink to={`/agenda/${show.slug.current}`}>
                    Ver evento
                  </NavLink>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Agenda;
