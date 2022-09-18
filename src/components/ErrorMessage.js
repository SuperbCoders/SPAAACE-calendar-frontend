import React from 'react';

const ErrorMessage = ({ text }) => {
  return (
    <p
      style={{
        paddingTop: '5px',
        color: '#ff4141',
      }}
    >
      {text}
    </p>
  );
};

export default ErrorMessage;
