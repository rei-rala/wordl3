import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import THEME from "../styles";

const Footer: React.FC = () => {
  return (
    <footer>
      <strong>by rei-rala</strong>

      <Link href="https://github.com/rei-rala" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/ramon-irala-220362110/" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Link>
      <style jsx>{`
        footer {
          display:flex;
          justify-content: center;

          gap: 0.5rem;

          height: ${THEME.SIZES.FOOTER_HEIGHT};
          width: 100%;
          max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};

          background:  ${THEME.COLORS.GRADIENT_BKG};
          color: ${THEME.COLORS.FONT};
        }

        footer a {
          display: grid;
          place-items: center;

          object-fit: cover;
          width: 1rem;
        }
        footer a:hover  {
          color: ${THEME.COLORS.SKY}
        }

        @media screen and (max-height: 476px) {
          footer {
            z-index: 9999;
            position: fixed;
            height: 100%;
            width: 1.5rem;
            height: 100%;
            right: 0;            
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
          }
          footer * {
            transform: rotate(-90deg);
            margin: 0.25rem 0;
          }
          footer strong {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
