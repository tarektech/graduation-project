import categoryStyles from './CategorySection.module.css';
import global from '@/global.module.css';
import flashStyles from './FlashSales.module.css';
//images
import phone from '@/assets/category/phone.png';
import computer from '@/assets/category/Category-Computer.png';
import smartwatch from '@/assets/category/Category-SmartWatch.png';
import camera from '@/assets/category/Category-Camera.png';
import headpohne from '@/assets/category/Category-Headphone.png';
import gaming from '@/assets/category/Category-Gamepad.png';

function CategorySection() {
  return (
    <div className={`${global.container} ${categoryStyles.categorysection} `}>
      {/* Today's */}
      <div className={`${categoryStyles.innersection}`}>
        <div className={` ${categoryStyles.category}`}>
          <span className={`${flashStyles.redredtangle}`}></span>
          <p>category</p>
        </div>
        <p className={` ${categoryStyles.browse} `}>Browse By Category</p>
      </div>

      <div>
        <div className={`${categoryStyles.categorycontainer}`}>
          <div className={`${categoryStyles.categorycard}`}>
            <img src={phone} alt=" category" />
            <p>Phones</p>
          </div>
          <div className={`${categoryStyles.categorycard}`}>
            <img src={computer} alt="computer category" />
            <p>computer</p>
          </div>
          <div className={`${categoryStyles.categorycard}`}>
            <img src={smartwatch} alt="smartwatch category" />
            <p>smartwatch</p>
          </div>
          <div className={`${categoryStyles.categorycard}`}>
            <img src={camera} alt="camera category" />
            <p>camera</p>
          </div>
          <div className={`${categoryStyles.categorycard}`}>
            <img src={headpohne} alt="headphone category" />
            <p>headphone</p>
          </div>
          <div className={`${categoryStyles.categorycard}`}>
            <img src={gaming} alt="gaming category" />
            <p>gaming</p>
          </div>
        </div>
      </div>
      <span className={`${categoryStyles.linespan}`}></span>
    </div>
  );
}

export default CategorySection;
