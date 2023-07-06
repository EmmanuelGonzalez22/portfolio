import { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faGitAlt,
  faNpm,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const useIcons = (className) => {
  useEffect(() => {
    library.add(
      faGithub,
      faInstagram,
      faLinkedin,
      faWhatsapp,
      faReact,
      faJsSquare,
      faHtml5,
      faCss3Alt,
      faSass,
      faBootstrap,
      faGitAlt,
      faNpm,
      faGithubSquare,
      faArrowDown
    );

    return () => {
      library.reset();
    };
  }, []);

  const Icon = ({ icon }) => (
    <FontAwesomeIcon icon={icon} className={className} />
  );

  return Icon;
};

export { useIcons };
