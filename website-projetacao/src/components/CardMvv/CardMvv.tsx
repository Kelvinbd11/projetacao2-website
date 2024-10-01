import styled from "styled-components"
import { ContainerDefault } from "../ContainerDefault/ContainerDefault";
import { CardContainer } from "../DetalhesSection/DetalhesSection";

const breakpoints = {
    mobile: '480px',
    tabletMin: '481px',
    tabletMax: '1023px',
    desktopMin: '1024px',
    desktopMax: '1200px',
  };

interface CardMvvProps {
    IconComponent: React.ElementType;
    title: string;
    description: string;
    highlight?: boolean; // Propriedade opcional
}

const TitleMvv = styled.h1 `
    font-size: 1.8rem;
    color: #fff;
    text-align: start;
`

const Card = styled.div<{ highlight?: boolean }>`
    display: flex;
    justify-content: center;
    // padding: 1rem 0.5rem;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 26, 81);
    border-radius: 15px;
    margin-right: ${(props) => (props.highlight ? "1rem" : "0rem" )};

    @media (max-width: ${breakpoints.mobile}) {

    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        height: auto;
        max-width: 600px;
        margin-bottom: 10px;
    }

`;

const Description = styled.p`
    color: #fff;
    font-size: 0.8rem;
    text-align: left;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column; /* Faz os cartões ficarem em coluna */
    align-items: center; /* Centraliza os cartões horizontalmente */
`;

const ContentCard = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1rem;
`;

const ContentIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
`;

const CardMvv: React.FC<CardMvvProps> = ({ IconComponent, title, description, highlight }) => {

  return (
        <Card highlight={highlight}>
            <ContentCard>
                <TitleMvv><IconComponent style={{color: 'white', fontSize: '1.3rem'}} /> {title}</TitleMvv>
                <Description>{description}</Description>
            </ContentCard>
        </Card>
  )
}

export default CardMvv