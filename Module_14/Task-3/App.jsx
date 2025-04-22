import React from 'react';
import UserCard from './UserCard';

const App = () => {
  return (
    <div>
      <UserCard name="John Doe" age="28" location="New York" />
      <UserCard name="Jane Smith" age="32" location="California" />
      <UserCard name="Alice Johnson" age="25" location="Texas" />
    </div>
  );
}

export default App;
