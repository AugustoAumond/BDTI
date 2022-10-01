import styled from "styled-components";

function TitleTasks(){
    return(
        <DivTitleTasks>
            <div id="task">TAREFAS</div>

            <div id="situation">SITUAÇÃO</div>
        </DivTitleTasks>
    )
}
export default TitleTasks;

const DivTitleTasks = styled.div`
display: flex;
justify-content: space-around;
width: 70%;
height: 40px;
margin: 10px;
font-size: 20px;
font-weight: 700;

    #task {
        width: 65%;
        border-bottom: solid 1px #01233a;
    }

    #situation {
        text-align: center;
        width: 30%;
        border-bottom: solid 1px #01233a;
    }
`