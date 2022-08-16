import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconStyles = styled(FontAwesomeIcon)`
  @media (max-width: 1024px) {
    path {
      fill: ${props => (props.color ? props.color : 'inherit')};
    }
  }
`;

export default IconStyles;
