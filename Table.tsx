'use client';

interface Artist {
  name: string;
  category: string;
  city: string;
  fee: string;
}

interface Props {
  data: Artist[];
  onAction: (name: string, action: string) => void;
}

export default function Table({ data, onAction }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-purple-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">City</th>
            <th className="border px-4 py-2">Fee</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.name} className="text-center">
              <td className="border px-4 py-2">{artist.name}</td>
              <td className="border px-4 py-2">{artist.category}</td>
              <td className="border px-4 py-2">{artist.city}</td>
              <td className="border px-4 py-2">{artist.fee}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2 hover:bg-green-700"
                  onClick={() => onAction(artist.name, 'approved')}
                >
                  Approve
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => onAction(artist.name, 'rejected')}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No submissions left to manage.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
