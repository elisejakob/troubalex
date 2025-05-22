export default function RandomPixels({
  images
}: {
  images: string[];
}) {
  return (
    <img src={images[Math.floor(Math.random() * images.length)]} />
  );
}
