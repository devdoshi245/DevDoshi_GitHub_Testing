import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div>
      <h1>Hello from useEffect</h1>
    </div>
  );
}

export default Example;
