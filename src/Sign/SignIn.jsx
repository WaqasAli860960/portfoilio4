import React, { useState } from 'react';
import './khan.css';
import image1 from './icon.png';
import { TextField, IconButton, InputAdornment, Button } from '@mui/material';
import { Visibility, VisibilityOff, LightMode, DarkMode } from '@mui/icons-material';
import { toast } from 'react-toastify'; // No need to import ToastContainer here
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [lightMode, setLightMode] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert(`Signed in successfully: ${value.user.email}`);
        toast.success(`Signed in successfully: ${value.user.email}`);
        setEmail('');   // Clear form after success
        setPassword('');
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);  // Error handling
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={lightMode ? "wrapper-light-mode" : "wrapper-dark-mode"}>
      
      <IconButton 
        onClick={toggleTheme} 
        sx={{
          backgroundColor: lightMode ? 'black' : 'white',
          color: lightMode ? 'white' : 'black',
          '&:hover': {
            backgroundColor: lightMode ? 'gray' : 'lightgray',
          },
        }}
      >
        {lightMode ? <LightMode /> : <DarkMode />}
      </IconButton>
      <div className={lightMode ? "wrapper" : "wrapper1"}>
        <div className="text-center mt-4 name">Sign In</div>
        <div className="logo">
          <img src={image1} alt="logo" />
        </div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              required
              InputProps={{ disableUnderline: true }}
              sx={{
                '& .MuiInputBase-input': {
                  height: '15px',
                },
                '& .MuiFormLabel-root': {
                  color: lightMode ? 'black' : 'white',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: lightMode ? 'black' : 'white',
                },
              }}
            />
          </div>
          <div className="form-field d-flex align-items-center mt-3">
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="standard"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton 
                      onClick={togglePasswordVisibility} 
                      sx={{
                        color: lightMode ? 'black' : 'white',
                        '&:hover': {
                          color: lightMode ? 'gray' : 'lightgray',
                        },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              sx={{
                '& .MuiInputBase-input': {
                  height: '15px',
                },
                '& .MuiFormLabel-root': {
                  color: lightMode ? 'black' : 'white',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: lightMode ? 'black' : 'white',
                },
              }}
            />
          </div>
          <div className="text-center fs-6"> 
            <p>Don't have an account?</p>
            <Link to="/">Sign Up</Link>
          </div>
          <Button
            className="btn mt-3"
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: lightMode ? 'black' : 'white',
              color: lightMode ? 'white' : 'black',
              '&:hover': {
                backgroundColor: lightMode ? 'gray' : 'darkgray',
              },
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
