import React, { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, signOut, db } from './firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState('');
  const userCollection = collection(db, 'users');

  // Fetch data from Firestore with error handling and loading states
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getDocs(userCollection);
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Google login handler
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      setError('Error during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setError('Error logging out. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Add a user to Firestore
  const addUser = async () => {
    if (input) {
      setLoading(true);
      setError(null);
      try {
        await addDoc(userCollection, { name: input });
        setInput('');
        fetchUsers();
      } catch (err) {
        setError('Error adding user. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Update user data
  const updateUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    const newName = prompt('Enter new name');
    if (newName) {
      setLoading(true);
      setError(null);
      try {
        await updateDoc(userDoc, { name: newName });
        fetchUsers();
      } catch (err) {
        setError('Error updating user. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Delete a user from Firestore
  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    setLoading(true);
    setError(null);
    try {
      await deleteDoc(userDoc);
      fetchUsers();
    } catch (err) {
      setError('Error deleting user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Firebase Google Authentication & CRUD</h2>

      {/* Show loading spinner or text if loading */}
      {loading && <div>Loading...</div>}

      {/* Show error message if there was an issue */}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* Show login or user info */}
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
          <hr />
          <h3>Users</h3>
          <input
            placeholder="Enter name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addUser}>Add User</button>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name}
                <button onClick={() => updateUser(user.id)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </li>
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
