import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import underline from '../../assets/Nav_Bullet.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

// Section IDs and display labels for navbar navigation
const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menu, setMenu] = useState("home"); // Currently active menu section
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu open state
  const menuRef = useRef(); // Reference to the mobile menu
  const navbarRef = useRef(); // Reference to the navbar root

  // Effect to highlight the nav item of the section currently in view
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      // Loop through all sections to determine which is in view
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If section top is above 80px and bottom is below 80px (nav area)
          if (rect.top <= 80 && rect.bottom > 80) {
            setMenu(sections[i].id);
            found = true;
            break;
          }
        }
      }
      // If no section matches, set to "home" (none highlighted)
      if (!found) setMenu("home");
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to add/remove nav-menu-open class on navbar
  useEffect(() => {
    if (navbarRef.current) {
      if (isMenuOpen) {
        navbarRef.current.classList.add('nav-menu-open');
      } else {
        navbarRef.current.classList.remove('nav-menu-open');
      }
    }
  }, [isMenuOpen]);

  // Open mobile menu by sliding it in
  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  }

  // Close mobile menu by sliding it out
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  }

  // Close menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <div className='navbar' ref={navbarRef}>
      {/* Mobile menu open button */}
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        {/* Mobile menu close button */}
        <img src={menu_close} onClick={closeMenu} alt='' className="nav-mob-close"/>
        {/* Navigation links */}
        {sections.map(({ id, label }) => (
          <li key={id}>
            {/* Underline/indicator for active menu item */}
            {menu === id ? <img src={underline} alt='' className="nav-underline" /> : null}
            <AnchorLink className='anchor-link' offset={50} href={`#${id}`}>
              {/* Change active state on click */}
              <p onClick={() => setMenu(id)}>{label}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
