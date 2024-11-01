import React from 'react';

function ComponentsBot({ data }) {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: '#fff8e1' }}>
        Components_Bottom
      </div>
      <div className="card-body">
        <textarea className="form-control" rows="3" value={data} readOnly />
      </div>
    </div>
  );
}

export default ComponentsBot;
  