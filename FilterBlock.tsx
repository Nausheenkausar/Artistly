interface Props {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export default function FilterBlock({ label, options, value, onChange }: Props) {
  return (
    <div>
      <label className="block font-semibold mb-1 text-gray-700">{label}</label>
      <select
        className="w-full p-2 border rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
