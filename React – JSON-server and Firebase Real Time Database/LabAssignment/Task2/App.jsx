import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userCollection = collection(db, 'users');

  const fetchUsers = async () => {
    const data = await getDocs(userCollection);
    setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const addUser = async () => {
    if (input) {
      await addDoc(userCollection, { name: input });
      setInput('');
      fetchUsers();
    }
  };

  const updateUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await updateDoc(userDoc, { name: prompt('Enter new name') });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    fetchUsers();
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert('Registered'))
      .catch(err => alert(err.message));
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert('Logged in'))
      .catch(err => alert(err.message));
  };

  const logout = () => {
    signOut(auth).then(() => alert('Logged out'));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Firebase Auth + CRUD</h2>

      <div>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>

      <hr />

      <input
        placeholder="Enter name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => updateUser(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
