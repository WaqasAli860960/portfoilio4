import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Sign/SignUp'; // Corrected import
import SignIn from './Sign/SignIn'; // Corrected import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} /> {/* Fixed path for SignIn */}
      </Routes>
    </Router>
  );
}

export default App;
