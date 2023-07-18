import Image from "next/image";

export function Description({ description, imgSrc, imgAlt }) {
  return (
    <div className="flex items-center justify-center my-3">
      <p>{description}</p>
      <Image src={imgSrc} alt={imgAlt} width={44} height={44} />
    </div>
  );
}
