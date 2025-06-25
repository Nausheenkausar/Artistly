'use client';

import { useState, useEffect } from 'react';
import FilterBlock from '@/components/FilterBlock';
import Card from '@/components/Card';

export default function ArtistsPage() {
  const [artists, setArtists] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    price: ''
  });

  useEffect(() => {
    fetch('/api/artists.json')
      .then(res => res.json())
      .then(data => setArtists(data));
  }, []);

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const filteredArtists = artists.filter(artist => {
    const matchCategory = filters.category ? artist.category === filters.category : true;
    const matchLocation = filters.location ? artist.location === filters.location : true;
    const matchPrice = filters.price ? artist.price === filters.price : true;
    return matchCategory && matchLocation && matchPrice;
  });

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Browse Artists</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <FilterBlock
          label="Category"
          options={['Singer', 'Dancer', 'DJ', 'Speaker']}
          value={filters.category}
          onChange={(val) => handleFilterChange('category', val)}
        />
        <FilterBlock
          label="Location"
          options={['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad']}
          value={filters.location}
          onChange={(val) => handleFilterChange('location', val)}
        />
        <FilterBlock
          label="Price Range"
          options={['$300', '$500', '$700', '$900']}
          value={filters.price}
          onChange={(val) => handleFilterChange('price', val)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredArtists.map((artist, idx) => (
          <Card key={idx} {...artist} />
        ))}
      </div>
    </main>
  );
}

