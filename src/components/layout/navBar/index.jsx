import { Link } from "react-scroll";

/* const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          LOGO
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navBar'
          aria-controls='navBar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */
{
  /* Collapse */
}
{
  /* <div className='collapse navbar-collapse' id='navBar'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                to='home'
                className='nav-link'
                activeclassname='active'
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='about'
                className='nav-link'
                activeclassname='active'
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='services'
                className='nav-link'
                activeclassname='active'
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='projects'
                className='nav-link'
                activeclassname='active'
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='contact'
                className='nav-link'
                activeclassname='active'
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}; */
}

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to='/'>LOGO</Link>
        </div>
        <ul>
          <li>
            <Link smooth={true} duration={500} to='home'>
              Home
            </Link>
          </li>
          <li>
            <Link smooth={true} duration={500} to='about'>
              About
            </Link>
          </li>
          <li>
            <Link smooth={true} duration={500} to='services'>
              Services
            </Link>
          </li>
          <li>
            <Link smooth={true} duration={500} to='projects'>
              Projects
            </Link>
          </li>
          <li>
            <Link smooth={true} duration={500} to='contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { NavBar };
