
import global from '@/global.module.css';
import SpecialOfferStyles from './SpecialOffer.module.css';
import jblspeaker from '../../assets/JBL_BOOMBOX.png';
import { useTimer } from '../hooks/useTimer';

function SpecialOffer() {
  const { days, hours, minutes, seconds, formatTimeValue } = useTimer();
  return (
    <div
      className={`${global.container} ${SpecialOfferStyles.specialoffer_container}`}
    >
      <div className={`${SpecialOfferStyles.offercontant}`}>
        <p>categories</p>
        <h1 >Enhance Your Music Expreience</h1>
        <div className={`${SpecialOfferStyles.countTimer}`}>
          <div className={`${SpecialOfferStyles.countdowntimer}`}>
            <div className={`${SpecialOfferStyles.countbox}`}>
              <span>{days}</span>
              <span>days</span>
            </div>
          </div>
          <div className={`${SpecialOfferStyles.countdowntimer}`}>
            <div className={`${SpecialOfferStyles.countbox}`}>
              <span>{formatTimeValue(hours)}</span>
              <span>hours</span>
            </div>
          </div>
          <div className={`${SpecialOfferStyles.countdowntimer}`}>
            <div className={`${SpecialOfferStyles.countbox}`}>
              <span>{formatTimeValue(minutes)}</span>
              <span>minutes</span>
            </div>
          </div>
          <div className={`${SpecialOfferStyles.countdowntimer}`}>
            <div className={`${SpecialOfferStyles.countbox}`}>
              <span>{formatTimeValue(seconds)}</span>
              <span>seconds</span>
            </div>
          </div>
        </div>
        <button className={` ${SpecialOfferStyles.buynowbtn}`}>
          Buy Now!
        </button>
      </div>
      <div className={`${SpecialOfferStyles.offerimg}`}>
        <img src={jblspeaker} alt="jbl speaker special offer" />
      </div>
    </div>
  );
}

export default SpecialOffer;
