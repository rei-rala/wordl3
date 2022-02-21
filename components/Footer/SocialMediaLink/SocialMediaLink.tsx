import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLink } from '@fortawesome/free-solid-svg-icons';
import THEME from "../../../styles";
import { ISocialMediaProps } from "../../../types";

const SocialMediaLink: React.FC<ISocialMediaProps> = ({ link, faIcon }) => {
  const socialMediaName = link.split('.')[1] ?? 'red social';

  const openLink = () => { confirm(`Confirmar ir a mi ${socialMediaName}?\nSe abrira en una nueva pestaña.`) && window.open(link, '_blank', 'noreferrer') };

  return (
    <button onClick={openLink} >
      <FontAwesomeIcon icon={faIcon ?? faLink} />

      <style jsx>{`
       button {
          display: grid;
          place-items: center;
          border: none;
          padding: 0;
          background: transparent;
          width: 1rem;
          height: 1rem;
          color: ${THEME.COLORS.FONT};
        }
        button:hover {
          transform: scale(1.1);
          color: ${THEME.COLORS.SKY};
        }
      `}</style>
    </button>
  )
}

export default SocialMediaLink