import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface StyleProps {
  $Dark?: boolean;
}

interface ButtonDarkProps {
  text: string;
  link: string
  $Dark?: boolean;
}

export const StyleButton = styled.button<StyleProps> `
  background-color: rgb(0, 56, 176);
  border: rgb(0, 26, 81) 2px solid;
  color: #ffffff;
  transition: background-color 0.3s ease;
  border-radius: 0.7em;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  width: fit-content;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  margin-right: 0.4rem;

    &:hover {
      background-color: rgb(6, 23, 60);
    }
`

const ButtonDark: React.FC<ButtonDarkProps> = ({text, link, $Dark = true}) => {
  return (
        <Link to={link}>
          <StyleButton $Dark={$Dark}>{text}</StyleButton>
        </Link>
  )
}

export default ButtonDark