import React, { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, signOut } from './firebase';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const userCollection = collection(db, 'users');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      alert('Logged in with Google');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    alert('Logged out');
  };

  const fetchUsers = async () => {
    const data = await getDocs(userCollection);
    setUsers(data.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Firebase Google Authentication</h2>

      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
          <hr />
          <h3>Users</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={handleGoogleLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default App;
