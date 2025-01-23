import client from "../client";
import urlBuilder from "@sanity/image-url";

const ImageComponent = ({ value }) => {

  const builder = urlBuilder(client);
  const urlFor = (source) => builder.image(source);
  const imageUrl = urlFor(value.imageUrl).width(600).url(); // Adjust size if needed

  return (
    <div style={{ margin: "20px 0" }}>
      <img
        src={imageUrl}
        alt={value.alt || "Image"}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
    </div>
  );
};
export default ImageComponent;
