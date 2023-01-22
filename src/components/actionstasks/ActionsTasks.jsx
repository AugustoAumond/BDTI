import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import MyContext from "../../context/MyContext";


function ActionsTasks(){
    const {situation, setSituation} = useContext(MyContext);

    function AddType(value){
        setSituation(value);
    }

    return(
        <DivActionsTasks>
            <FullTasks select={situation}  onClick={(()=>AddType('All'))}>TODAS TAREFAS</FullTasks>

            <FinishedTasks select={situation}  onClick={(()=>AddType('Finished'))}>TAREFAS CONCLUIDAS</FinishedTasks>

            <PendentingTasks select={situation}  onClick={(()=>AddType('Pendenting'))}> TARESFAS PENDENTES</PendentingTasks>
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
        max-width: 115px;
        min-width: 90px;
        width: 100%;
        height: 40px;
        color: white;
        cursor: pointer;
        font-size: 14px;
        margin: 5px;
        transition: .5s;
    }

    @media (max-width: 650px){
        button {
            font-size: 10px;
        }
    }
    `

const FullTasks = styled.button`
    background: ${props => props.select ==='All' ? '#A36D1C' : '#004576'};
    border: ${props => props.select ==='All' ? 'solid #A36D1C 1px' : 'solid #004576 1px'};
`

const FinishedTasks = styled.button`
    background: ${props => props.select ==='Finished' ? '#A36D1C' : '#004576'};
    border: ${props => props.select ==='Finished' ? 'solid #A36D1C 1px' : 'solid #004576 1px'};
`

const PendentingTasks = styled.button`
    background: ${props => props.select ==='Pendenting' ? '#A36D1C' : '#004576'};
    border: ${props => props.select ==='Pendenting' ? 'solid #A36D1C 1px' : 'solid #004576 1px'};
`