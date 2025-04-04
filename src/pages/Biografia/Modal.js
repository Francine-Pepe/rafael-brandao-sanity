import { CloseMenu } from "../../icons/CloseMenu";
import { PortableText } from "@portabletext/react";
import { motion } from "motion/react";
import { useRef } from "react";

function Modal(props) {
  const { slug, datas, image1, image2, image3, alt, body, onClose } = props;
  const scrollRef = useRef(null);

  return (
    <section className="modal">
      <div key={slug} className="modal-content " aria-modal="true">
        <div className="modal-close-button" onClick={onClose}>
          <CloseMenu
            style={{
              filter:
                "brightness(0) saturate(100%) invert(8%) sepia(13%) saturate(2785%) hue-rotate(279deg) brightness(94%) contrast(112%)",
            }}
          />
        </div>
        <div className="modal-content-wrap">
          <div className="modal-image">
            <div className="grid-modal-images">
              <img
                src={image1}
                alt={alt}
                className="modal-image1"
                loading="lazy"
              />
              <img
                src={image2}
                alt={alt}
                className="modal-image2"
                loading="lazy"
              />

              <img
                src={image3}
                alt={alt}
                className="modal-image3"
                loading="lazy"
              />
            </div>
          </div>
          <div className="modal-text">
            <h2>{datas}</h2>
            <PortableText value={body} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
