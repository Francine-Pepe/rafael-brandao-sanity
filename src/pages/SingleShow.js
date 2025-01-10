import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

function SingleShow() {
  const [singleShow, setSingleShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setSingleShow(data[0]));
    setIsLoading(false);
  }, [slug]);
  
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section>
          <h1>{singleShow.title} </h1>
          {singleShow.mainImage && singleShow.mainImage.asset && (
            <img
              src={singleShow.mainImage.asset.url}
              alt={singleShow.title}
              title={singleShow.title}
            />
          )}

          <div>
            <BlockContent blocks={singleShow.body} projectId="" database="" />
          </div>

          <button>
            <NavLink to={"/agenda"}>Veja mais shows</NavLink>
          </button>
        </section>
      )}
    </>
  );
}

export default SingleShow;
