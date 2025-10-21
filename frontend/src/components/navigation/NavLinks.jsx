import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import navbar from './navBar.module.css';
import { AuthContext } from '@/context/AuthContext';

function NavLinks() {
  const location = useLocation();

  //must be useState to manage the signout button when user is signed in
  // const  isSignedIn = false;

  const auth = useContext(AuthContext);

  return (
    <>
      <ul className={navbar.navLists}>
        <li className={navbar.nav_item}>
          <NavLink
            className={
              location.pathname === '/'
                ? `${navbar.nav_link} ${navbar.active}`
                : `${navbar.nav_link}`
            }
            to="/"
          >
            home
          </NavLink>
        </li>
        {/* <SignedIn> */}

        {auth.isLoggedIn && (
          <li className={navbar.nav_item}>
            <NavLink className={navbar.nav_link} to="/">
              {/* <SignOutButton /> */}
              <button onClick={auth.logout}>sign out</button>
            </NavLink>
          </li>
        )}
        {/* </SignedIn> */}

        {/* <SignedOut> */}
        {!auth.isLoggedIn && (
          <li className={navbar.nav_item}>
            <NavLink
              className={
                location.pathname === '/sign-up'
                  ? `${navbar.nav_link} ${navbar.active}`
                  : `${navbar.nav_link}`
              }
              to="/sign-up"
            >
              <button>sign up </button>
              {/* <SignUpButton /> */}
            </NavLink>
          </li>
        )}

        {!auth.isLoggedIn && (
          <li className={navbar.nav_item}>
            <NavLink
              className={
                location.pathname === '/signin'
                  ? `${navbar.nav_link} ${navbar.active}`
                  : `${navbar.nav_link}`
              }
              to="/signin"
            >
              {/* <SignInButton>Sign in</SignInButton> */}
              <button>Sign in</button>
            </NavLink>
          </li>
        )}
        {/* </SignedOut> */}
      </ul>
    </>
  );
}

export default NavLinks;
