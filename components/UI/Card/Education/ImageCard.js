const ImageCard = ({ url, bgColor }) => {
  return (
    <img
      className={`rounded-lg object-contain p-10 md:rounded-none md:h-full ${bgColor}`}
      src={url}
    />
  );
};

export default ImageCard;
