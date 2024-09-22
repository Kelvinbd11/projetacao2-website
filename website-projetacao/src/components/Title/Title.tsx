import styled from "styled-components"

interface TitleProps {
    fontSize?: string;
}

export const Title = styled.h1<TitleProps> `
    font-size: ${(props) => props.fontSize || "2.5rem"};
    color: #000000;
    font-weight: 500;
    padding-bottom: 0.5rem;
    line-height: 1.2;
`   