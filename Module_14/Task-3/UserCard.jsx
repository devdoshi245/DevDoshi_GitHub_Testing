import React from 'react';

const UserCard = (props) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h3>{props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Location: {props.location}</p>
      </div>
    </div>
  );
}

export default UserCard;
