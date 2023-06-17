import { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const useIcons = () => {
  useEffect(() => {
    library.add(faGithub, faInstagram, faLinkedin, faWhatsapp);

    return () => {
      library.reset();
    };
  }, []);

  const icons = {
    github: <FontAwesomeIcon icon={faGithub} />,
    instagram: <FontAwesomeIcon icon={faInstagram} />,
    linkedin: <FontAwesomeIcon icon={faLinkedin} />,
    whatsapp: <FontAwesomeIcon icon={faWhatsapp} />,
  };

  return icons;
};

export { useIcons };
