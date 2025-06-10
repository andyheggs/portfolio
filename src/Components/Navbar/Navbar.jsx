import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import underline from '../../assets/Nav_Bullet.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setMenu(sections[i].id);
            found = true;
            break;
          }
        }
      }
      if (!found) setMenu("home");
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt='' className="nav-mob-close"/>
        {sections.map(({ id, label }) => (
          <li key={id}>
            {menu === id ? <img src={underline} alt='' className="nav-underline" /> : null}
            <AnchorLink className='anchor-link' offset={50} href={`#${id}`}>
              <p onClick={() => setMenu(id)}>{label}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
