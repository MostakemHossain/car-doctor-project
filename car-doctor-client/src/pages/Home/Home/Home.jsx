import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Meet from "./Meet/Meet";
import Product from "./Product/Product";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";



const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Contact />
            <Product />
            <Meet />
            <WhyChooseUs />

        </div>
    );
};

export default Home;