import React from 'react';

function TransactionDetails({ ownerData, ownerName }) {
  return (
    <div className="transaction-details">
      <h2>{ownerName}'s Transactions</h2>
      <p>Total Profit: ${ownerData.profit.toFixed(2)}</p>
      <p>Has Bought: {ownerData.has_bought ? 'Yes' : 'No'}</p>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Volume (USD)</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {ownerData.transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.side}</td>
              <td>${transaction.volume_usd}</td>
              <td>{new Date(transaction.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionDetails;