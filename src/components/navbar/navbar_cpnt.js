import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar_cpnt.css';
import Logo from '../../imges/dusit-zoo-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);   
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state

  const animalTypes = [{
      id: 1,
      type: "สัตว์บก"
  },{
      id: 2,
      type: "สัตว์น้ำ"
  },{
      id: 3,
      type: "สัตว์ปีก"
  }];

  const toggleMenu = () => {  
      setIsOpen(!isOpen);
  };

  // Toggle the dropdown on mobile when clicked
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getLinkStyle = (path) => ({
      color: location.pathname === path ? '#abce1a' : 'black',
  });

  return (
    <nav
      className="navbar navbar-expand-lg bg-white navbar-light sticky-top"
      data-wow-delay="0.1s"
    >
      <a href="/home" className="navbar-brand p-0">
        <img
          className="img-fluid me-3"
          src={Logo}
          alt="Icon"
          style={{ marginLeft: '32px' }}
        />
        <h1 className="m-0" style={{ color: '#abce1a' }}>Dusit Zoo</h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
        id="navbarCollapse"
      >
        <div className="navbar-nav ms-auto">
          <a
            href="/home"
            className={`nav-item nav-link ${location.pathname === '/home' ? 'active' : ''}`}
            style={getLinkStyle('/home')}
          >
            หน้าหลัก
          </a>
          
          <div className="nav-item dropdown">
            <span
              className={`nav-link dropdown-toggle ${
                location.pathname.includes("/animals") ? "active" : ""
              }`}
              style={{
                cursor: "pointer", // Make it clickable for mobile
                color: location.pathname.includes("/animals")
                  ? "#abce1a"
                  : "black",
              }}
              onClick={toggleDropdown} // Toggle dropdown on click for mobile
              onMouseEnter={() => setIsDropdownOpen(true)} // Show on hover for desktop
              onMouseLeave={() => setIsDropdownOpen(false)} // Hide on hover-out for desktop
            >
              สารานุกรมสัตว์
            </span>
            <div
              className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setIsDropdownOpen(true)} // Keep dropdown open on hover for desktop
              onMouseLeave={() => setIsDropdownOpen(false)} // Hide on mouse leave for desktop
            >
              <a className="dropdown-item" href="/animals/">
                แสดงทั้งหมด
              </a>
              {animalTypes.map((animal) => (
                <a
                  key={animal.id}
                  className="dropdown-item"
                  href={`/animals/${animal.type}`}
                >
                  {animal.type}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/about"
            className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            style={getLinkStyle('/about')}
          >
            ราคาบัตรเข้าชม
          </a>
          <a
            href="/map"
            className={`nav-item nav-link ${location.pathname === '/map' ? 'active' : ''}`}
            style={getLinkStyle('/map')}
          >
            แผนที่
          </a>
          <a
            href="/contract"
            className={`nav-item nav-link ${location.pathname === '/contract' ? 'active' : ''}`}
            style={getLinkStyle('/contract')}
          >
            ช่องทางการติดต่อ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
