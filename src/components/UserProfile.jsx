import React from 'react';

export default function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '6px' }}>
      <h2 style={{ color: 'blue', margin: '0 0 6px 0' }}>{props.name}</h2>
      <p style={{ margin: '4px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ margin: '4px 0', color: '#333' }}>Bio: {props.bio}</p>
    </div>
  );
}
