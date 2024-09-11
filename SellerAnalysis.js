import React, { useState, useEffect } from 'react';
import OwnerList from './OwnerList';
import TransactionDetails from './TransactionDetails';

function SellerAnalysis() {
  const [owners, setOwners] = useState({});
  const [selectedOwner, setSelectedOwner] = useState(null);

  useEffect(() => {
    // Fetch the data from your API or JSON file
    fetch('/path/to/your/output.json')
      .then(response => response.json())
      .then(data => setOwners(data));
  }, []);

  return (
    <div className="seller-analysis">
      <h1>Seller Analysis</h1>
      <div className="content">
        <OwnerList 
          owners={owners} 
          onSelectOwner={setSelectedOwner} 
        />
        {selectedOwner && (
          <TransactionDetails 
            ownerData={owners[selectedOwner]} 
            ownerName={selectedOwner} 
          />
        )}
      </div>
    </div>
  );
}

export default SellerAnalysis;