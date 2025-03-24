function BioImage(props: any) {
  const { image } = props;
  return (
    <div className="image-container">
      <div className="image-content container">
        <img src={image} alt="Rafa Brandao" />
      </div>
    </div>
  );
}

export default BioImage;
