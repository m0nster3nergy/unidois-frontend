import HeroSection from '../components/HeroSection'
import Grids from '../components/Grids'
import PricingSection from '../components/PricingSection';
import Previews from '../components/Previews';
const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Grids/>
            <PricingSection/>
            <Previews/>
        </div>
    );
};

export default Home;