import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import SignInPage from './pages/signin';
import HomePage from './pages/home';
import EngagementPage from './pages/engagement';
import DraftPage from './pages/draft';
import SignUpPage from './pages/signup';

import { useDataStore } from '@service/zustands';

function App() {
  const { authUser } = useDataStore();
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute authUser={authUser}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path='/engagement'
          element={
            <PrivateRoute authUser={authUser}>
              <EngagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/draft'
          element={
            <PrivateRoute authUser={authUser}>
              <DraftPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/signin'
          element={authUser ? <Navigate to='/' /> : <SignInPage />}
        />
        <Route
          path='/signup'
          element={authUser ? <Navigate to='/' /> : <SignUpPage />}
        />
      </Routes>
    </Router>
  );
}

const PrivateRoute = ({ authUser, children }) => {
  return authUser ? children : <Navigate to='/signin' />;
};

export default App;
