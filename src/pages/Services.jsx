import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Design from './Design';
import Development from './Development';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services at Innomatics</h1>
      <p>
        We offer a wide range of services to help your business thrive. Please
        explore our services below:
      </p>

      {/* Nav Links to Design and Development */}
      <nav className="services-nav">
        <NavLink to="design" className="service-link" activeClassName="active-link">
          Design Services
        </NavLink>
        <NavLink to="development" className="service-link" activeClassName="active-link">
          Development Services
        </NavLink>
      </nav>

      {/* Routes for Design and Development */}
      <Routes>
        <Route path="design" element={<Design />} />
        <Route path="development" element={<Development />} />
      </Routes>
    </div>
  );
};

export default Services;
