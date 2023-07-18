import Image from "next/image";

export function Description({ description, imgSrc, imgAlt }) {
  return (
    <div>
      <p>{description}</p>
      <Image src={imgSrc} alt={imgAlt} />
    </div>
  );
}
