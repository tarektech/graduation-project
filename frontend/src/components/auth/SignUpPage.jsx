import React, { useContext, useState } from 'react';
import NavBar from '../navigation/NavBarSignIn';
import Footer from '../Footer/Footer';
import signinupstyles from './SignInup.module.css';
import './SignUp-Login.css'; 
import { AuthContext } from '@/context/AuthContext';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useHttpClient } from '../hooks/http-hook';
import '../UI/LoadingSpinner.css';


function SignUpPage() {
  const auth = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { sendRequest, isLoading } = useHttpClient();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    // const { name, email, password } = formState;
    if (!name || !email || !password) {
      console.log('Please fill in all fields');
    } else {
      try {
        const responseData = await sendRequest(
          'http://localhost:4000/users/signup',
          'POST',
          JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
          { 'Content-Type': 'application/json' }
        );
        console.log('responseData', responseData);
        auth.login(responseData.userId, responseData.token);
      } catch (err) {
        console.error('error of sign up ', err);
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
              id="name"
              name="name"
              type="name"
              value={name}
              onChange={handleNameChange}
              className="input"
              placeholder="name"
            />
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
              placeholder="Email"
            />
            <input
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              className="input"
              placeholder="Password"
            />
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <button className="form-btn" type="submit">
              Sign up
            </button>
          </form>
          <p className="sign-up-label">
            Don't have an account?<span className="sign-up-link">Login</span>
          </p>
          <div className="buttons-container"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
