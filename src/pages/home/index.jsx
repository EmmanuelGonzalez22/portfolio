import { Link } from "react-scroll";

const Home = () => {
  return (
    <section>
      <h1>
        Emmanuel <span>González</span>
      </h1>
      <Link to='about'>About me</Link>
    </section>
  );
};

export { Home };
