function ImageShow({ image }) {
  return (
    <div>
      <img alt="rendered" src={image.src} />
    </div>
  );
}

export default ImageShow;
