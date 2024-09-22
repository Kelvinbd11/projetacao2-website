import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StylePropsLight {
  $Light?: boolean;
}

interface ButtonLightProps {
  text: string;
  link: string;
  $Light?: boolean;
}

export const StyleButton = styled(Link)<StylePropsLight>`
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  margin-right: 0.4rem;
  background-color: rgb(223, 232, 254);
  border: none;
  border-radius: 0.7em;
  color: rgb(0, 26, 81);
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none; /* Remove underline do link */

  &:hover {
    background-color: rgb(6, 23, 60);
    color: #fff;
  }
`;

const ButtonLight: React.FC<ButtonLightProps> = ({ text, link, $Light = true }) => {
  return (
    <StyleButton to={link} $Light={$Light}>
      {text}
    </StyleButton>
  );
}

export default ButtonLight;