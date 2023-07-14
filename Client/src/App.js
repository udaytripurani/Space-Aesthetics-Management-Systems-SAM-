import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import EmployeeManagement from './components/EmployeeManagement';
import Offices from './components/offices';
import Settings from './components/Settings';
import AboutSAM from './components/AboutSAM'; // Import the AboutSAM component
import React from 'react';
import Pricing from './components/pricing';
import OfficeInputForm from "./components/OfficeInputForm";
import LayoutGenerator from "./components/LayoutGenerator";
import OfficeDesigner from "./components/OfficeDesigner";
import Payments from './components/payments';
import PaymentPage from './components/PaymentPage';
import PaymentSuccess from './components/PaymentSuccess';
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [officeData, setOfficeData] = React.useState({});

  return (
    <div>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
          <Link to="/offices">Offices</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/about">About</Link> {/* Add the About link to the NavBar */}
        </NavBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeManagement />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/settings" element={<Settings setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/about" element={<AboutSAM />} /> {/* Add the AboutSAM route */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
