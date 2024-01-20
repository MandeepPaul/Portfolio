const ImageCard = ({ url, bgColor }) => {
  return (
    <img
      className={`sticky top-[30%] object-contain md:h-[50%] ${bgColor}`}
      src={url}
    />
  );
};

export default ImageCard;
