import searchStyles from './navBar.module.css';
import shopping_icon from '@/assets/shopping-icon.svg';
import Wishlist_icon from '@/assets/Wishlist.svg';
import search_icon from '@/assets/search-icon.svg';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function SearchSignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={searchStyles.searchbar_icon_container}>
      <div className={searchStyles.searchbar_container}>
        <input id="search" name="search" type="text" placeholder="What are you looking for?" />
        <img
          className={searchStyles.search_icon}
          src={search_icon}
          alt="search icon"
        />
      </div>
      <div className={searchStyles.navicon}>
        <button>
          <img src={Wishlist_icon} alt="wishlist" />
        </button>
        <button
          onClick={() => {
            navigate('/cart');
          }}
        >
          <img src={shopping_icon} alt="shopping icon" />
        </button>

        {/* menu navigation will have the links here  */}
        <div
          className={`${searchStyles.menu}   ${
            isOpen ? `${searchStyles.open}` : ''
          } `}
          onClick={toggleClass}
        >
          <span className={`${searchStyles.span} ${searchStyles.open} `}></span>
          <span className={`${searchStyles.span} ${searchStyles.open}`}></span>
          <span className={`${searchStyles.span} ${searchStyles.open}`}></span>
          <span className={`${searchStyles.span} ${searchStyles.open}`}></span>
        </div>
        {/* searchStyles.mobile_navigation */}
      </div>
      {/* mobile navigation */}
      <div
        className={`${searchStyles.mobile_navigation} ${
          isOpen ? `${searchStyles.open}` : ''
        } `}
      >
        {isOpen && (
          <ul className={searchStyles.navLists}>
            <li className={searchStyles.nav_item}>
              <NavLink
                className={
                  location.pathname === '/'
                    ? `${searchStyles.nav_link} ${searchStyles.active}`
                    : `${searchStyles.nav_link}`
                }
                to="/"
              >
                home
              </NavLink>
            </li>
            {/* <SignedIn> that should be conditional for signed in users */}
            <li className={searchStyles.nav_item}>
              <NavLink className={searchStyles.nav_link} to="/">
                <button>Sign out</button>
                {/* <SignOutButton that should be conditional for signed in users /> */}
              </NavLink>
            </li>
            {/* </SignedIn> */}
            {/* devider between signin and sign up buttons and wapper conditional */}
            {/* <SignedOut>that should be conditional for signed out users conditional  */}
            <li className={searchStyles.nav_item}>
              <NavLink
                className={
                  location.pathname === '/sign-up'
                    ? `${searchStyles.nav_link} ${searchStyles.active}`
                    : `${searchStyles.nav_link}`
                }
                to="/sign-up"
              >
                <button>Sign up</button>
                {/* <SignUpButton /> */}
              </NavLink>
            </li>
            <li className={searchStyles.nav_item}>
              <NavLink
                className={
                  location.pathname === '/signin'
                    ? `${searchStyles.nav_link} ${searchStyles.active}`
                    : `${searchStyles.nav_link}`
                }
                to="/signin"
              >
                <button>Sign in</button>
                {/* <SignInButton>Sign in</SignInButton> */}
              </NavLink>
            </li>
            {/* </SignedOut>that should be conditional for signed out users conditional */}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchSignIn;
