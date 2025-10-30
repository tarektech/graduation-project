
import styles from './Hero.module.css';
import global from '@/global.module.css';
// import HeroImg from '../../assets/Hero-1.png';
import HeroCarousel from './HeroCarousel';
import CatergoryItem from './CatergoryItem';

function Hero() {
  return (
    <div className={`${styles.heroContainer} ${global.container}`}>
      <CatergoryItem className={styles.CatergoryItem}/>
      <HeroCarousel />
    </div>
  );
}

export default Hero;
