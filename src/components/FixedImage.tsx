
function FixedImage(props: any) {
  const { image } = props;
  return (
    <div className="fixed-bg-image-container container">
      <div className="fixed-image-opacity-box"></div>
      <div className="fixed-bg">
          <img src={image} alt=""  />
      </div>
    </div>
  );
}

export default FixedImage;
