import { useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { edit } from "../../../redux/store/lists/list.actions";


function ActionsTasks(){
    
    const tasks = useSelector((state)=>state.list);

    const dispatch = useDispatch();

    const [select, setSelect] = useState(tasks.type);

    function AddType(value){
        setSelect(value);
        
        let newList = tasks;

        newList.type = value;

        dispatch(edit(newList));
    }

    return(
        <DivActionsTasks>
            <FullTasks select={select} onClick={(()=>AddType('full'))}>TODAS TAREFAS</FullTasks>

            <FinishedTasks select={select} onClick={(()=>AddType('finished'))}>TAREFAS CONCLUIDAS</FinishedTasks>

            <PendentingTasks select={select} onClick={(()=>AddType('pendenting'))}> TARESFAS PENDENTES</PendentingTasks>
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