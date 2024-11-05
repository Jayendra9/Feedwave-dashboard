import PricingSection from './pricing-section';
import Hero from './hero';
import FeaturesSection from './features-section';
import DemoSection from './demo-section';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <DemoSection/>
      <PricingSection />
    </div>
  );
}

export default LandingPage;