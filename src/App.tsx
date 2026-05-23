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
