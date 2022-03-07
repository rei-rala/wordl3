import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLink } from '@fortawesome/free-solid-svg-icons';
import THEME from "../../../styles";
import { ISocialMediaProps } from "../../../types";

const SocialMediaLink: React.FC<ISocialMediaProps> = ({ link, faIcon }) => {
  const socialMediaName = link.split('.')[1] ?? 'red social';

  const openLink = () => { confirm(`Confirmar ir a mi perfil de ${socialMediaName}?\nSe abrira en una nueva pestaña.`) && window.open(link, '_blank', 'noreferrer') };

  return (
    <button role='link' onClick={openLink} aria-label={`Visitar mi perfil de ${socialMediaName} en ${link}`} >
      <FontAwesomeIcon icon={faIcon ?? faLink} />

      <style jsx>{`
       button {
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