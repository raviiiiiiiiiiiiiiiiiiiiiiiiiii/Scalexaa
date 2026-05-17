/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CaseStudiesList from './pages/CaseStudiesList';
import CaseStudyDetail from './pages/CaseStudyDetail';
import LiveNotification from './components/LiveNotification';

export default function App() {
  return (
    <Router>
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          zIndex: 9999, 
          backgroundColor: '#0D1B2A',
          pointerEvents: 'all'
        }}
        className="flex flex-col items-center justify-center text-center px-4"
      >
        <div className="text-6xl mb-6">🧾</div>
        <h1 className="font-black text-white text-4xl md:text-6xl mb-4">Sadan Mansuri</h1>
        <p className="text-[#C9A84C] text-xl font-semibold mb-2">please pay the invoice.</p>
        <p className="text-white text-lg">Balance Due: Rs. 1,900</p>
      </div>
      <div className="relative antialiased selection:bg-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/case-studies" element={<CaseStudiesList />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        </Routes>
        <LiveNotification />
      </div>
    </Router>
  );
}
