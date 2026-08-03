import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandsMarquee from '../components/BrandsMarquee';
import Results from '../components/Results';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import CtaSection from '../components/CtaSection';
import InstagramSection from '../components/InstagramSection';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <BrandsMarquee />
      <Results />
      <Services />
      <Partners />
      <HowItWorks />
      <Comparison />
      <About />
      <Testimonials />
      <CtaSection />
      <InstagramSection />
      <Footer />
    </>
  );
}
