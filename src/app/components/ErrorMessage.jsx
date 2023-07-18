import { FaCloudSun } from "react-icons/fa";

export function ErrorMessage({ errorMsg }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-4">
      <FaCloudSun className="text-7xl" />
      <h1 className="text-xl font-bold">{errorMsg}</h1>
    </div>
  );
}
