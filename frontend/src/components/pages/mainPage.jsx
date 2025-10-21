import Hero from '../Mainpage/Hero/Hero';
import FlashSalesPage from '../Mainpage/Products/FlashSalesPage';
import CategorySection from '../Mainpage/Products/CategorySection';
import SellingProduct from '../Mainpage/Products/SellingProduct';
import SpecialOffer from '../Mainpage/SpecialOffer';
import Services from '../Mainpage/Services';
import NavBarSignIn from '../navigation/NavBarSignIn';
import Footer from '../Footer/Footer';

//main page index page

// main page localhost:3000/signed-in
function MainSignInPage() {
  return (
    <div>
      <NavBarSignIn />
      <Hero />
      <FlashSalesPage bannername="today's" sectionname="Flash Sales" />
      <CategorySection />
      <SellingProduct bannername="This Month" />
      <SpecialOffer />
      <Services />
      <Footer />
    </div>
  );
}

export default MainSignInPage;
