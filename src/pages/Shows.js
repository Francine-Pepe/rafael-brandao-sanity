import { useState, useEffect } from "react";
import client from "../client";
import { NavLink } from "react-router-dom";

function Shows() {
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
    <section>
      <h1>Shows page</h1>
      <h2>You are viewing {shows.length} shows </h2>

      <div>
        {shows.map((show) => (
          <article>
            <img src={show.mainImage.asset.url} alt={show.title} />
            <h4>{show.title}</h4>
            <button>
              <NavLink to={`/shows/${show.slug.current}`}>
                Clique para saber mais
              </NavLink>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Shows;
