
import global from '@/global.module.css';
import servicesStyles from './Services.module.css';
import fastdelivery from '@/assets/services/fastdelivery.png';
import customerservice from '@/assets/services/customerservice.png';
import moneyback from '@/assets/services/moneybackguarantee.png';

function Services() {
  return (
    <div
      className={`${global.container} ${servicesStyles.servicecontainer}`}
    >
      <div className={`${servicesStyles.servicecard}`}>
        <img src={fastdelivery} alt="" />
        <h4>FREE AND FAST DELIVERY </h4>
        <p>Free delivery for all orders over $150</p>
      </div>
      <div className={`${servicesStyles.servicecard}`}>
        <img src={customerservice} alt="" />
        <h4>24/7 CUSTOMER SERVICE</h4>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className={`${servicesStyles.servicecard}`}>
        <img src={moneyback} alt="" />
        <h4>MONEY BACK GURANTEE</h4>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
}

export default Services;
