import globalStyles from '@/global.module.css';
import navbar from './navBar.module.css';
import SearchSignIn from './SearchSignIn';
// icons
import NavbarLinks from './NavbarLinks';
import { Progress } from '@mantine/core';
import { useEffect, useState } from 'react';
function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );
      setScrollPosition(scrollPercent);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`${globalStyles.container} ${navbar.navBar}  `}>
      <div className={`${navbar.navContainer}`}>
        <NavbarLinks />
        <SearchSignIn />
      </div>
      <Progress
        className={`${navbar.progress} fixed`}
        size="xs"
        radius="xl"
        color="black"
         
        value={scrollPosition}
      />
    </div>
  );
}

export default NavBar;
