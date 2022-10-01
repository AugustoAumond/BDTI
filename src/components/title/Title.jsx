import styled from "styled-components";

function Title(){
    return(
        <DivTitle>
            <h1>LISTA DE TAREFAS</h1>
        </DivTitle>
    )
}
export default Title;

const DivTitle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 120px;
    margin: 0 auto;
    border-bottom: solid;
    color: #01233a; 
`