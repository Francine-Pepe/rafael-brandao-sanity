import { useTranslation } from "react-i18next";

function GalleryFixedImage(props: any) {
  const { image } = props;
  const { t } = useTranslation();

  return (
    <div className="gallery-fixed-bg-image-container container">
      <div className="gallery-fixed-bg container">
        <img src={image} alt="" />
        <section className="gallery-text">
          <p>{t("galleryText")}</p>
        </section>
      </div>
    </div>
  );
}

export default GalleryFixedImage;
