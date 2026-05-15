/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import Results from './components/Results';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import CtaSection from './components/CtaSection';
import Faq from './components/Faq';
import Footer from './components/Footer';
import LiveNotification from './components/LiveNotification';

export default function App() {
  return (
    <div className="relative antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <BrandsMarquee />
      <Results />
      <Services />
      <HowItWorks />
      <Comparison />
      <CtaSection />
      <Faq />
      <Footer />
      
      <LiveNotification />
    </div>
  );
}
