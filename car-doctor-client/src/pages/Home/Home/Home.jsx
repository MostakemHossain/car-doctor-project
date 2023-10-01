import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Meet from "./Meet/Meet";
import Product from "./Product/Product";



const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Contact />
            <Product />
            <Meet />

        </div>
    );
};

export default Home;