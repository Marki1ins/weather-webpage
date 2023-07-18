import { WiRaindrop, WiStrongWind } from "react-icons/wi";

export function Details({ humidity, wind }) {
  return (
    <div className="flex items-center justify-center gap-3 w-3/4 mx-auto py-2">
      <p className="flex flex-col items-center justify-center pr-4 border-r border-white">
        <WiRaindrop className="text-3xl" />
        <span>{humidity}%</span>
      </p>
      <p className="flex flex-col items-center justify-center">
        <WiStrongWind className="text-3xl" />
        <span>{wind} km/h</span>
      </p>
    </div>
  );
}
