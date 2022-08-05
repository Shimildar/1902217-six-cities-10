type RoomImageProps = {
  imageUrl: string
  alt: string
}

export default function RoomImage({ imageUrl, alt }: RoomImageProps): JSX.Element {

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imageUrl} alt={alt} />
    </div>
  );
}
