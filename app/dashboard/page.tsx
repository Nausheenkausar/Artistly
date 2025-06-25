'use client';

import { useState } from 'react';
import Table from '@/components/Table';

const mockSubmissions = [
  { name: 'DJ Nova', category: 'DJ', city: 'Mumbai', fee: '$500' },
  { name: 'Sufi Soul', category: 'Singer', city: 'Delhi', fee: '$700' },
  { name: 'DanceX Crew', category: 'Dancer', city: 'Bangalore', fee: '$900' }
];

export default function Dashboard() {
  const [submissions, setSubmissions] = useState(mockSubmissions);
  const [statusLog, setStatusLog] = useState<string[]>([]);

  const handleAction = (name: string, action: string) => {
    setStatusLog((prev) => [...prev, `${name} was ${action}.`]);
    setSubmissions((prev) => prev.filter((s) => s.name !== name));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">📋 Manager Dashboard</h1>
      <Table data={submissions} onAction={handleAction} />

      {statusLog.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 border rounded">
          <h2 className="font-semibold mb-2 text-gray-700">Recent Actions</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {statusLog.map((log, idx) => (
              <li key={idx}>{log}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
