import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((img, index) => {
    return <ImageShow image={img} key={index} />
  });

  return (
    <div>
      {renderedImages}
    </div>
  );
}

export default ImageList;
