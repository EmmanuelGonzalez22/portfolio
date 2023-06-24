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
      faGithubSquare
    );

    return () => {
      library.reset();
    };
  }, []);

  const icons = {
    github: <FontAwesomeIcon icon={faGithub} className={className} />,
    instagram: <FontAwesomeIcon icon={faInstagram} className={className} />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} className={className} />,
    whatsapp: <FontAwesomeIcon icon={faWhatsapp} className={className} />,
    react: <FontAwesomeIcon icon={faReact} className={className} />,
    js: <FontAwesomeIcon icon={faJsSquare} className={className} />,
    html: <FontAwesomeIcon icon={faHtml5} className={className} />,
    css: <FontAwesomeIcon icon={faCss3Alt} className={className} />,
    sass: <FontAwesomeIcon icon={faSass} className={className} />,
    bootstrap: <FontAwesomeIcon icon={faBootstrap} className={className} />,
    git: <FontAwesomeIcon icon={faGitAlt} className={className} />,
    npm: <FontAwesomeIcon icon={faNpm} className={className} />,
    githubSquare: (
      <FontAwesomeIcon icon={faGithubSquare} className={className} />
    ),
  };

  return icons;
};

export { useIcons };
