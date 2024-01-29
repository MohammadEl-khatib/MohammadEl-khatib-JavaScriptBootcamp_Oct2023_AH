import React, { useState } from 'react';
import './Votes.css';

const Votes: React.FC = () => {
  const [votes, setVotes] = useState<{ [key: string]: number }>({ Chocolate: 0, Vanilla: 0, Strawberry: 0 });

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const addVote = (flavor: string) => {
    setVotes({ ...votes, [flavor]: votes[flavor] + 1 });
  };

  const votePercentage = (flavor: string) => {
    if (totalVotes === 0) return '0';
    return ((votes[flavor] / totalVotes) * 100).toFixed(1);
  };

  return (
    <div className="votes">
      <h2>Vote Here</h2>
      {['Chocolate', 'Vanilla', 'Strawberry'].map((flavor) => (
        <div key={flavor}>
              <button onClick={() => addVote(flavor)}>{flavor}</button>
              <div className={`graph-bar ${flavor.toLowerCase()}`} style={{ width: `${votePercentage(flavor)}%` }}>
                  </div>

          </div>
        
      ))}
      {totalVotes === 0 ? (
        <p>No votes yet.</p>
      ) : (
        ['Chocolate', 'Vanilla', 'Strawberry'].map((flavor) => (
          votes[flavor] > 0 && (
            <div key={flavor} className="vote-result">
              <span>{flavor}: </span>
              <span>{votes[flavor]} ({votePercentage(flavor)}%)</span>
              <div className={`graph-bar ${flavor.toLowerCase()}`} style={{ width: `${votePercentage(flavor)}%` }}></div>
            </div>
          )
        ))
          )}

      </div>
      
  );
};

export default Votes;

