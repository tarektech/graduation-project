import Lenovo from '@/assets/LenovoLaptop.webp';
import HonorMagicV2 from '@/assets/HonorMagicV2.webp';
import HpMouse from '@/assets/HPZ3700DualMouse.webp';
import { Carousel } from 'flowbite-react';
import carouselStyles from './Hero.module.css';

function HeroCarousel() {
  return (
    <div className={carouselStyles.carouselContainer}>
      <Carousel
        className={carouselStyles.carouselContainer}
        slideInterval={5000}
        pauseOnHover
      >
        <img
          className={carouselStyles.Carousel}
          src={Lenovo}
          alt="Lenovo"
        />
        <img
          className={carouselStyles.Carousel}
          src={HonorMagicV2}
          alt="HonorMagicV2"
        />
        <img
          className={carouselStyles.Carousel}
          src={HpMouse}
          alt="HpMouse"
        />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
