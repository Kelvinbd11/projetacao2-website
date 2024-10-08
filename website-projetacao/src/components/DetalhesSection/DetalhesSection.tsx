import styled from 'styled-components';

const breakpoints = {
    mobile: '480px',
    tabletMin: '481px',
    tabletMax: '768px',
    desktopMin: '769px',
    desktopMax: '1024px',
  };

export const Section4 = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35vh; /* Ajuste conforme necessário */
    background: linear-gradient(to bottom, #5facff25, #fafdff);
    flex-direction: column;

    @media (max-width: ${breakpoints.mobile}) {
        height: auto; /* Ajuste conforme necessário */
    }
`

export const ImagesC4 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 80%; 

    @media (max-width: ${breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 2rem;
  }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-bottom: 2rem;
    }

`

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;    
    font-size: 3rem;
    color: rgb(0, 26, 81);

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 2rem;
    }
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

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        font-size: 1rem;
    }

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
    <CardContainer style={{padding: '0.4rem'}}>
        <IconComponent /> 
        <TextContent>
            <ITitle>{title}</ITitle>
            <PDescription>{description}</PDescription>
        </TextContent>
    </CardContainer>
  )
}

export default DetalhesSection