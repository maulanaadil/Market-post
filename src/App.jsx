import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Spinner from './components/spinner';

import { useDataStore } from '@service/zustands';

const SignInPage = lazy(() => import('./pages/signin'));
const SignUpPage = lazy(() => import('./pages/signup'));
const HomePage = lazy(() => import('./pages/home'));
const EngagementPage = lazy(() => import('./pages/engagement'));
const DraftPage = lazy(() => import('./pages/draft'));

function App() {
  const { authUser, loading } = useDataStore();
  return (
    <Suspense fallback={<Spinner />}>
      {loading && <Spinner />}
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
    </Suspense>
  );
}

const PrivateRoute = ({ authUser, children }) => {
  return authUser ? children : <Navigate to='/signin' />;
};

export default App;
