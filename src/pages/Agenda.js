import { useState, useEffect } from "react";
import client from "../client";
import { NavLink } from "react-router-dom";

function Agenda() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] { title, slug, body, mainImage {
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
              <div>
                <h3>{show.title}</h3>
                <h3>{show.data}</h3>
              </div>
              <button>
                <NavLink to={`/agenda/${show.slug.current}`}>
                  Clique para saber mais
                </NavLink>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Agenda;
