import Image from "next/image";

export function H2({ cityName, imgSrc, igmAlt }) {
  return (
    <h2>
      <span>{cityName}</span>
      <Image src={imgSrc} alt={igmAlt} />
    </h2>
  );
}
