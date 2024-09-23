import styled from 'styled-components';

export const Section4 = styled.div`
    margin: 0;
    padding: 0;
    overflow: hidden;  /* Previne qualquer conteúdo que transborde */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 35vh; /* Ajuste conforme necessário */
    background: linear-gradient(to bottom, #5facff25, #fafdff);
    flex-direction: column;
`

export const ImagesC4 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 0rem 15rem;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;    
    font-size: 3rem;
    color: rgb(0, 26, 81);
`

export const Icon = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 4rem;
    color: rgb(0, 26, 81);
    margin-right: 1rem;
`

export const TextContent = styled.div`
    display: inline;
    padding-left: 0.5rem;
`

export const ITitle = styled.h1`
    font-size: 1.5rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
`

export const PDescription = styled.p`
    font-size: 1rem;
    margin: 0;
    padding: 0;
`

interface DetalhesSectionProps {
    IconComponent: React.ElementType;
    title: string;
    description: string;
}

const DetalhesSection: React.FC<DetalhesSectionProps> = ({ IconComponent, title, description }) => {
  return (
    <CardContainer>
        <IconComponent /> 
        <TextContent>
            <ITitle>{title}</ITitle>
            <PDescription>{description}</PDescription>
        </TextContent>
    </CardContainer>
  )
}

export default DetalhesSection