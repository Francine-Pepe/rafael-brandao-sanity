import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "../client";
import urlBuilder from "@sanity/image-url";

interface ImageComponentProps {
  value: {
    imageUrl: string;
    alt?: string;
  };
}

const ImageComponent = ({ value }: ImageComponentProps) => {

  const builder = urlBuilder(client as any);
  const urlFor = (source: SanityImageSource) => builder.image(source);
  const imageUrl = urlFor(value.imageUrl).width(600).url() ?? undefined;

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
