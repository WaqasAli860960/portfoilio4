import React, { useState } from 'react';
import './khan.css';
import image1 from './icon.png';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from './firebase';
import { TextField, IconButton, InputAdornment, Button } from '@mui/material';
import { Visibility, VisibilityOff, LightMode, DarkMode } from '@mui/icons-material'; // Material Icons
import { ToastContainer, toast } from 'react-toastify'; // Toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [lightMode, setLightMode] = useState(true);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        toast.success(`User created successfully: ${value.user.email}`); // Success Toast
        setEmail('');
        setPassword('');
        setName('');
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`); // Error Toast
      });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle light/dark mode
  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success(`Signed up with Google: ${result.user.email}`);
      })
      .catch((error) => {
        toast.error(`Google Sign-In Error: ${error.message}`);
      });
  };

  return (
    <div className={lightMode ? "wrapper-light-mode" : "wrapper-dark-mode"}>
      <ToastContainer /> {/* Toast container for showing notifications */}
      
      {/* Theme Toggle Button */}
      <IconButton 
        onClick={toggleTheme} 
        sx={{
          backgroundColor: lightMode ? 'black' : 'white', // Background color
          color: lightMode ? 'white' : 'black', // Icon color
          '&:hover': {
            backgroundColor: lightMode ? 'gray' : 'lightgray', // Hover effect
          },
        }}
      >
        {lightMode ? <LightMode /> : <DarkMode />}
      </IconButton>

      <div className={lightMode ? "wrapper" : "wrapper1"}>
        <div className="text-center mt-4 name">
          Sign Up
        </div>
        <br />
        <div className="logo">
          <img src={image1} alt="logo" />
        </div>
        <br /><br />

        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          {/* Name Input Field */}
          <div className="form-field d-flex align-items-center">
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              variant="standard"
              required
              InputProps={{
                disableUnderline: true, // No underline
              }}
              sx={{
                '& .MuiInputBase-input': {
                  height: '15px', // Adjust input height
                },
                '& .MuiFormLabel-root': {
                  color: lightMode ? 'black' : 'white', // Label color based on theme
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: lightMode ? 'black' : 'white', // Focused label color based on theme
                },
              }}
            />
          </div>

          {/* Email Input Field */}
          <div className="form-field d-flex align-items-center">
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              required
              InputProps={{
                disableUnderline: true, // No underline
              }}
              sx={{
                '& .MuiInputBase-input': {
                  height: '15px', // Adjust input height
                },
                '& .MuiFormLabel-root': {
                  color: lightMode ? 'black' : 'white', // Label color based on theme
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: lightMode ? 'black' : 'white', // Focused label color based on theme
                },
              }}
            />
          </div>

          {/* Password Input Field */}
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
                        color: lightMode ? 'black' : 'white', // Adjust icon color for both modes
                        '&:hover': {
                          color: lightMode ? 'gray' : 'lightgray', // Adjust hover color
                        },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                disableUnderline: true, // No underline
              }}
              sx={{
                '& .MuiInputBase-input': {
                  height: '15px', // Adjust input height
                },
                '& .MuiFormLabel-root': {
                  color: lightMode ? 'black' : 'white', // Label color based on theme
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: lightMode ? 'black' : 'white', // Focused label color based on theme
                },
              }}
            />
          </div>
          
          <div className="text-center fs-6"> 
            <p>Already have an account</p>
            <Link to="/signin" className={lightMode ? "text-black-50 fw-bold" : "text-white-50 fw-bold"}>Sign in</Link>
          </div> 
          <br />

          {/* Submit Button */}
          <Button
            className="btn mt-3"
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: lightMode ? 'black' : 'white', // Toggle button color
              color: lightMode ? 'white' : 'black', // Toggle text color
              '&:hover': {
                backgroundColor: lightMode ? 'gray' : 'darkgray', // Hover effect
              },
            }}
          >
            Sign Up
          </Button> 
        </form>
        
        <h5>OR</h5>
  

        {/* Google Sign-Up Button */}
        <div className="d-grid mb-2">
          <Button
            className="btn mt-3"
            onClick={handleGoogleSignIn}
            variant="contained"
            sx={{
              backgroundColor: lightMode ? 'black' : 'white', // Toggle button color
              color: lightMode ? 'white' : 'black', // Toggle text color
              '&:hover': {
                backgroundColor: lightMode ? 'gray' : 'darkgray', // Hover effect
              },
            }}
          >
            Sign up with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
