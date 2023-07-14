import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleMenuRef.current.contains(event.target)
      ) {
        removeShowMenu();
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <header className='header__main'>
      <nav className='nav__menu'>
        <Link
          className='logo__container'
          spy={true}
          activeClass='active'
          to='home'
          offset={-6.5 * 14}
          onClick={removeShowMenu}
        >
          Emmanuel <span>González</span>
        </Link>
        <ul className='nav__list' ref={menuRef}>
          <li className='nav__item'>
            <Link
              spy={true}
              activeClass='active'
              to='home'
              offset={-6.5 * 14}
              onClick={removeShowMenu}
            >
              Home
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              spy={true}
              activeClass='active'
              to='about'
              offset={-6.5 * 14}
              onClick={removeShowMenu}
            >
              Sobre mí
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              spy={true}
              activeClass='active'
              to='services'
              offset={-6.5 * 14}
              onClick={removeShowMenu}
            >
              Servicios
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              spy={true}
              activeClass='active'
              to='projects'
              offset={-6.5 * 14}
              onClick={removeShowMenu}
            >
              Proyectos
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              spy={true}
              activeClass='active'
              to='contact'
              offset={-6.5 * 14}
              onClick={removeShowMenu}
            >
              Contacto
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
