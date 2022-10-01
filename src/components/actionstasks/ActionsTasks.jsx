import { useState } from "react";
import styled from "styled-components";

function ActionsTasks(){
    const [select, setSelect] = useState('full');

    return(
        <DivActionsTasks>
            <FullTasks select={select} id="fulltasks" onClick={(()=>setSelect('full'))}>TODAS TAREFAS</FullTasks>

            <FinishedTasks select={select} onClick={(()=>setSelect('finished'))}>TAREFAS CONCLUIDAS</FinishedTasks>

            <PendentingTasks select={select} onClick={(()=>setSelect('pendenting'))}> TARESFAS PENDENTES</PendentingTasks>
        </DivActionsTasks>
    )
}
export default ActionsTasks;

const DivActionsTasks = styled.div`
margin: 0 auto;
height: 100px;
display: flex;
justify-content: space-around;
align-items: center;

    button {
        border-radius: 5px;
        width: 115px;
        height: 40px;
        color: white;
        cursor: pointer;
        font-size: 14px;
        transition: .5s;
    }
    `

const FullTasks = styled.button`
    background: ${props => props.select ==='full' ? '#A36D1C' : '#004576'};
    border: ${props => props.select ==='full' ? 'solid #A36D1C 1px' : 'solid #004576 1px'};
`

const FinishedTasks = styled.button`
    background: ${props => props.select ==='finished' ? '#A36D1C' : '#004576'};
    border: ${props => props.select ==='finished' ? 'solid #A36D1C 1px' : 'solid #004576 1px'};
`

const PendentingTasks = styled.button`
    background: ${props => props.select ==='pendenting' ? '#A36D1C' : '#004576'};
    border: ${props => props.select ==='pendenting' ? 'solid #A36D1C 1px' : 'solid #004576 1px'};
`