import bgImage from "../assets/_RAF0401.webp";

function FixedImage() {
  return (
    <div className="fixed-bg-image-container container">
      <div className="fixed-image-opacity-box"></div>
      <div className="fixed-bg">
        <img src={bgImage} alt="" />
      </div>
    </div>
  );
}

export default FixedImage;
