export function Card({ children }) {
  return (
    <div className="p-8 backdrop-blur-3xl shadow-2xl shadow-black/25 rounded-2xl text-center text-gray-50">
      {children}
    </div>
  );
}
