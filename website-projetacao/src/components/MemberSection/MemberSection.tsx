import styled from "styled-components"

const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 30%;
  height: 100%;
  background-color: red;
  border-radius: 10%;
`

const InformationsCont = styled.div`
  display: flex;
  background-color: blue;
  width: 80%;
  height: 20%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top: auto;
  margin-bottom: 3rem;
`

const MemberSection = () => {
  return (
    <ContainerCard>
      <InformationsCont>
        <h1>teste</h1>
      </InformationsCont>
    </ContainerCard>
  )
}

export default MemberSection