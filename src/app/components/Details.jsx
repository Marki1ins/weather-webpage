export function Details({ humidity, wind }) {
  return (
    <div>
      <p>
        <span>{humidity}</span>
      </p>
      <p>
        <span>{wind}</span>
      </p>
    </div>
  );
}
