import { Link } from "react-scroll";
import { useRef } from "react";
import "./styles.scss";

const NavBar = () => {
  const menuRef = useRef(null);
  const toggleMenuRef = useRef(null);

  const handleMenu = () => {
    menuRef.current.classList.toggle("show");
    toggleMenuRef.current.classList.toggle("show");
  };

  const removeShowMenu = () => {
    menuRef.current.classList.remove("show");
    toggleMenuRef.current.classList.remove("show");
  };

  return (
    <header className='header__main'>
      <nav className='nav__menu'>
        <Link
          className='logo__container'
          spy={true}
          smooth={true}
          duration={500}
          activeClass='active'
          to='home'
          offset={-6.5 * 16}
          onClick={removeShowMenu}
        >
          Emmanuel <span>González</span>
        </Link>
        <ul className='nav__list' ref={menuRef}>
          <li className='nav__item'>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
              to='home'
              offset={-6.5 * 16}
              onClick={removeShowMenu}
            >
              Home
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
              to='about'
              offset={-6.5 * 16}
              onClick={removeShowMenu}
            >
              About
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
              to='services'
              offset={-6.5 * 16}
              onClick={removeShowMenu}
            >
              Services
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
              to='projects'
              offset={-6.5 * 16}
              onClick={removeShowMenu}
            >
              Projects
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              activeClass='active'
              to='contact'
              offset={-6.5 * 16}
              onClick={removeShowMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* BURGUER MENU */}
        <div id='toggle__menu' onClick={handleMenu} ref={toggleMenuRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export { NavBar };
