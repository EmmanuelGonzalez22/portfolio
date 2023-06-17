import { Link } from "react-scroll";

const Home = () => {
  return (
    <section>
      <h1>
        Emmanuel <span>González</span>
      </h1>
      <Link to='about' offset={-6.5 * 16} smooth={true} duration={500}>
        About me
      </Link>
    </section>
  );
};

export { Home };
