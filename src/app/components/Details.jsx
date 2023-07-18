export function Details({ humidity, wind }) {
  return (
    <div className="flex items-center justify-center">
      <p className="m-3 p-3 border-r border-white">
        <span>{humidity}</span>
      </p>
      <p>
        <span>{wind}</span>
      </p>
    </div>
  );
}
