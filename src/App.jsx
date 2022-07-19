import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInPage from "./pages/signin";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
