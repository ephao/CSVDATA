import React from 'react';

function OwnerList({ owners, onSelectOwner }) {
  return (
    <div className="owner-list">
      <h2>Owners</h2>
      <table>
        <thead>
          <tr>
            <th>Owner</th>
            <th>Profit</th>
            <th>Has Bought</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(owners).map(([owner, data]) => (
            <tr key={owner} onClick={() => onSelectOwner(owner)}>
              <td>{owner}</td>
              <td>${data.profit.toFixed(2)}</td>
              <td>{data.has_bought ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OwnerList;