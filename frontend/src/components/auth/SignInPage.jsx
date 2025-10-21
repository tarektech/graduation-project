import React, { useContext, useState } from 'react';
import NavBar from '../navigation/NavBarSignIn';
import Footer from '../Footer/Footer';
import signinupstyles from './SignInup.module.css';
// import './SignUp-Login.css';
import { AuthContext } from '@/context/AuthContext';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useHttpClient } from '../hooks/http-hook';
import '../UI/LoadingSpinner.css';

function SignInPage() {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { sendRequest } = useHttpClient();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    // const { name, email, password } = formState;
    if (!email || !password) {
      console.log('Please fill in all fields');
    } else {
      try {
        //   'http://localhost:4000/users/login'
        setIsLoading(true);
        const responseData = await sendRequest(
          'http://localhost:4000/users/login',
          'POST',
          JSON.stringify({
            email: email,
            password: password,
          }),
          { 'Content-Type': 'application/json' }
        );
        console.log('responseData', responseData);

        auth.login(responseData.userId, responseData.token);
        setIsLoading(false);
      } catch (err) {
        console.log('error of sign in ', err);
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className={signinupstyles.signincontainer}>
        <div className="form-container">
          {isLoading && <LoadingSpinner  className="center"/>}
          <p className="title">Welcome back</p>
          <form className="form" onSubmit={submitForm}>
            <input
              id="email"
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="email"
            />
            <input
              id="password"
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
            />
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <button className="form-btn">Login</button>
          </form>
          <p className="sign-up-label">
            Don't have an account?<span className="sign-up-link">Sign Up</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignInPage;
