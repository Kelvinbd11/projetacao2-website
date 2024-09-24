import styled from "styled-components"
import { ContainerDefault } from "../ContainerDefault/ContainerDefault";
import { CardContainer } from "../DetalhesSection/DetalhesSection";

interface CardMvvProps {
    IconComponent: React.ElementType;
    title: string;
    description: string;
}

const TitleMvv = styled.h1 `
    font-size: 2.5rem;
    color: rgb(6, 23, 60);
    text-align: center;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 25vh;
    background-color: red;
    margin-bottom: 20px; /* Espaço entre os cartões */
    border-radius: 30px;
`
const Description = styled.p`
    padding: 10px 0;
    font-size: 1.1rem;
    text-align: left;
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column; /* Faz os cartões ficarem em coluna */
    align-items: center; /* Centraliza os cartões horizontalmente */
`;

const CardMvv: React.FC<CardMvvProps> = ({ IconComponent, title, description }) => {

  return (
        <Card>
        <TitleMvv>Teste</TitleMvv>
        <Description>teste 2 ponto zero</Description>
        </Card>

  )
}

export default CardMvv