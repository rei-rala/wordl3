import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import THEME from "../../styles";
import SocialMediaLink from "./SocialMediaLink/SocialMediaLink";

const Footer: React.FC = () => {
  return (
    <footer>
      <SocialMediaLink link='https://www.GitHub.com/rei-rala' faIcon={faGithub} />
      <strong>by rei-rala</strong>
      <SocialMediaLink link='https://www.LinkedIn.com/in/ramon-irala-220362110/' faIcon={faLinkedin} />

      <style jsx>{`
        footer {
          z-index: 9999;
          position: fixed;
          right: 0;

          display: flex;
          flex-flow: column nowrap;
          justify-content: space-evenly;
          align-items: center;

          width: 1.5rem;
          height: 100%;
          background: ${THEME.COLORS.GRADIENT_BKG_LANDSCAPE};
          color: ${THEME.COLORS.FONT};

          font-size: 0.8rem;
        }

        footer strong {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }

        @media screen and (min-height: 476px) {
          footer {
            position: relative;
            flex-direction: row;
            background: ${THEME.COLORS.GRADIENT_BKG_PORTRAIT};

            height: ${THEME.SIZES.FOOTER_HEIGHT};
            width: 100%;
            height: 1rem;
            max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          }
          footer strong {
            writing-mode: horizontal-tb;
            transform: rotate(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
