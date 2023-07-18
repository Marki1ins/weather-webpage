import { FaSearch } from "react-icons/fa";

export function Button() {
  return (
    <button
      className="flex items-center justify-center ml-2 p-3 min-w-[50px] bg-light-blue rounded hover:bg-sky duration-300"
      type="submit"
    >
      <FaSearch />
    </button>
  );
}
