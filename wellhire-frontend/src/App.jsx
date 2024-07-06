import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import { Companies } from './pages/Companies';
import { CompanyDetail } from './pages/CompanyDetail';
import { PDFViewer } from './components/PDFViewer';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Pricing } from './pages/Pricing';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Navbar /> */}
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/companies" element={<Companies />} />
            <Route exact path="/companies/:companyId" element={<CompanyDetail />} />
            <Route path="/companies/:companyId/:collegeId" element={<PDFViewer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;