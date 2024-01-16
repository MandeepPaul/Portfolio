const ImageCard = ({ url, bgColor }) => {
  return (
    <img
      className={`sticky top-[30%] md:h-[50%] object-contain ${bgColor}`}
      src={url}
    />
  );
};

export default ImageCard;
