import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import THEME from "../../styles";

const Footer: React.FC = () => {
  return (
    <footer>
      <Link href="https://github.com/rei-rala" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
      <strong>by rei-rala</strong>
      <Link href="https://www.linkedin.com/in/ramon-irala-220362110/" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Link>
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
          background: ${THEME.COLORS.GRADIENT_BKG};
          color: ${THEME.COLORS.FONT};

          font-size: 0.8rem;
        }

        footer a {
          display: grid;
          place-items: center;
          width: 1rem;
          height: 1rem;
        }
        footer a:hover {
          color: ${THEME.COLORS.SKY};
        }
        footer strong {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }


        @media screen and (min-height: 476px) {
          footer {
            position: relative;
            flex-direction: row;

            height: ${THEME.SIZES.FOOTER_HEIGHT};
            width: 100%;
            height: 1rem;
            max-width: ${THEME.SIZES.GLOBAL_MAX_WIDTH};
          }
          footer strong {
            writing-mode: horizontal-tb;
            transform: rotate(0);
          }
          footer a {
            height: 1rem;
            width: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
