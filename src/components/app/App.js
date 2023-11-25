import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../header/Header';
import HomePage from '../../pages/homePage/HomePage';
import RegistrationForm from '../../pages/registrationForm/RegistrationForm';
import LoginForm from '../../pages/loginForm/LoginForm';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // }
  const isAuthenticated = useSelector(state => state.autentificate.isAuthenticated);

  return (
    <div className="App">
      <Routes>
        {!isAuthenticated && (
          <Route
            path="/login"
            element={<LoginForm />}
          />
        )}
        <Route
          path="/"
          element={<Header />}
        >
          {isAuthenticated ? (
            <Route index element={<HomePage />} />
          ) : (
            <Route index element={<LoginForm />} />
          )}
          <Route path="/register" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;