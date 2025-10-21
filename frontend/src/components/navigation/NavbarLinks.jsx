import navbar from './navBar.module.css';
import Logo from '@/assets/easytake-logo.png';
import NavLinks from './NavLinks';

function NavbarLinks() {
  return (
    <nav className={navbar.containerLinks}>
      <img className={navbar.Logo} src={Logo} alt="Logo" />
      <NavLinks />
    </nav>
  );
}

export default NavbarLinks;
