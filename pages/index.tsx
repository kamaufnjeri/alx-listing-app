import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PLACEHOLDER_IMAGE } from '../constants';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          title="Sample Property 1"
          description="A beautiful property located in the city center."
          imageUrl={PLACEHOLDER_IMAGE}
        />
        <Card
          title="Sample Property 2"
          description="Cozy home with modern amenities."
          imageUrl={PLACEHOLDER_IMAGE}
        />
      </div>
      <div className="mt-4">
        <Button label="View More Listings" onClick={() => alert('Coming Soon!')} />
      </div>
    </div>
  );
};

export default Home;
