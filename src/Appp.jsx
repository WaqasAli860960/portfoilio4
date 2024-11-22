import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; // Firebase imports
import { Button } from '@mui/material'; // Importing MUI Button
import App from './App';
import { app } from './Sign/firebase'; // Firebase app
import Port from './port/port';

const auth = getAuth(app);

function Appp() {
  const [user, setUser] = useState(null);
 // Add lightMode state

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div>
        <App />
      </div>
    );
  }

  return (
    <div>
      <h1>Hello, {user.email}</h1>
      <Port />
      <Button
        className="btn mt-3"
        onClick={() => signOut(auth)}
        variant="contained"
        sx={{
          backgroundColor:  'black' ,  // Toggle button color
          color:  'white', // Toggle text color
          '&:hover': {
            backgroundColor: 'gray', // Hover effect
          },
        }}
      >
        Logged out
      </Button>
    </div>
  );
}

export default Appp;
