export default function Card({
  name,
  category,
  price,
  location
}: {
  name: string;
  category: string;
  price: string;
  location: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-xl font-bold text-purple-700">{name}</h3>
      <p className="text-gray-600">{category}</p>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-800 font-semibold">{price}</p>
      <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
        Ask for Quote
      </button>
    </div>
  );
}
