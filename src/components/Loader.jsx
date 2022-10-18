import React from 'react';

const Loader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }}>
      <span className='loader' />
    </div>
  );
};

export default Loader;