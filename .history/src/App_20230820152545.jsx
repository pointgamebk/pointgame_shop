import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

const App = () => (
  <main className="relative">
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
    <section className="padding">Popular Products</section>
    <section className="padding">Super Quality</section>
    <section className="padding-x py-10">Services</section>
    <section className="padding">Special Offers</section>
    <section className="bg-pale-blue padding">Customer Reviews</section>
    <section className="padding-x sm:py-32 py-16 w-full">Subscribe</section>
    <section className="bg-black padding-x padding-t pb-8">Footer</section>
  </main>
);

export default App;
