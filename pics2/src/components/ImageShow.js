function ImageShow({ image }) {
  return (
    <div>
      <img alt="rendered" src={image.urls.small} />
    </div>
  );
}

export default ImageShow;
