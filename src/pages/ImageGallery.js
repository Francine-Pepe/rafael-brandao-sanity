import { useEffect, useState } from "react";
import client from "../client";
import Lightbox from "yet-another-react-lightbox";

function ImageGallery() {
  const [gallery, setGallery] = useState([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleClick = (slug) => {
    setOpen(!open && slug);
    setIndex(slug + 1);
  };

  const closeModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "gallery"] {   "gallery": image[]->  {
                asset -> {_id, url},
                alt
              } }`
      )
      .then((data) => setGallery(data))
      .catch(console.error);
  }, []);
  return (
    <div>
      {gallery.map((item, index) => (
        <div
          key={index}
          className="gallery-image"
          onClick={() => handleClick(item.slug)}
        >
          <img
            srcSet={`${item.reference.asset.url}?w=1000&auto=format&dpr=2 2x`}
            src={`${item.reference.asset.url}?w=1000&auto=format`}
            alt={item.alt}
            loading="lazy"
            style={{
              borderRadius: 4,
              display: "block",
              width: "100%",
              quality: 100,
            }}
          />
          {open === item.slug && (
            <Lightbox
              open={open}
              close={() => closeModal(false)}
              slides={[{ src: item.image.asset.url }]}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
