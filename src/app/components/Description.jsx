import Image from "next/image";

export function Description({ description, imgSrc, imgAlt }) {
  return (
    <div className="flex flex-col items-center justify-center my-3">
      <Image src={imgSrc} alt={imgAlt} width={72} height={72} />
      <p className="text-lg font-medium">{description}</p>
    </div>
  );
}
