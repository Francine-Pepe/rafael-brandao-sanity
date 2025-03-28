import PageTitle from "../../components/PageTitle";
import client from "../../client";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Text from "../../components/Text";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";


function BiografiaGrid() {
  const { t, i18n } = useTranslation();
  const [biografias, setBiografias] = useState([]);
  const [selectedBiografia, setSelectedBiografia] = useState(null);

  useEffect(() => {
    const fetchBiografias = async () => {
      const query = `*[_type == "biografia"] { slug, title, datas, country, body, image {asset -> { _id, url }}, image1 {asset -> { _id, url }}, image2 {asset -> { _id, url }}, image3 {
              asset -> { _id, url },
              alt
            }
          }`;
      const result = await client.fetch(query);
      setBiografias(result);
    };

    fetchBiografias();
  }, []);

  const handleCardClick = (biografia) => {
    setSelectedBiografia(biografia);
  };

  const closeModal = () => {
    setSelectedBiografia(null);
  };

  return (
    <>
      <PageTitle />
      <Text />
      <section className="grid-container container">
        {biografias
          .sort((a, b) => (a.datas > b.datas ? 1 : -1))
          .map((biografia) => {
            return (
              <div
                key={biografia.slug.current}
                className="biografia-grid-content"
              >
                <AnimationOnScroll animateIn="animate__fadeInUp ">
                  <div className="grid-images-text">
                    <h2>{biografia.title}</h2> 
                  </div>{" "}
                  <div className="grid-images ">
                    <div className="grid-image-country">
                      {/* <h2>{biografia.title}</h2> */}
                      <h3>{biografia.country}</h3>
                    </div>
                    <img
                      src={biografia.image.asset.url}
                      alt={biografia.alt}
                      loading="lazy"
                      className="grid-image "
                      onClick={() => handleCardClick(biografia)}
                    />
                  </div>
                </AnimationOnScroll>
                <div onClick={closeModal}>
                  {selectedBiografia && (
                    <Modal
                      datas={selectedBiografia.datas}
                      body={
                        selectedBiografia.body[i18n.language] ||
                        selectedBiografia.body.pt
                      }
                      image={selectedBiografia.image.asset.url}
                      alt={selectedBiografia.alt}
                      image1={selectedBiografia.image1.asset.url}
                      image2={selectedBiografia.image2.asset.url}
                      image3={selectedBiografia.image3.asset.url}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default BiografiaGrid;
