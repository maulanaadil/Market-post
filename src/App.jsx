import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInPage from "./pages/signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/signin' element={<SignInPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
