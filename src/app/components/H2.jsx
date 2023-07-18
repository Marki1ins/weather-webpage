import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export function H2({ cityName, imgSrc, igmAlt }) {
  return (
    <h2 className="flex items-center justify-center mb-2 text-2xl font-bold">
      <FaMapMarkerAlt className="text-base" />
      <span className="m-3">{cityName}</span>
      <Image src={imgSrc} alt={igmAlt} width={30} height={15} />
    </h2>
  );
}
