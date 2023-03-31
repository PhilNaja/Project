import { useState, useEffect } from 'react';

import Login from './components/Login';
import firebase from './services/firebase';

import './App.css';
import NewHome from './components/NewHome';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
        <div >
          {user ? <NewHome user={user} /> : <Login />}
        </div>


  );
}

export default App;
