import styled from "styled-components";

import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {edit, del} from "../../../../redux/store/lists/list.actions";

function TaskList(props){
    const item = props.item;

    const [open, setOpen] = useState(false);
    const [editar, setEdit] = useState(item.name);
    const [situation, setSituation] = useState(item.situation);
    const [list, setList] = useState();
        
    const tasks = useSelector((state)=>state.list);

    const dispatch = useDispatch();

    function AddList(value, item){
        setSituation(value);

        let newList = tasks;
        newList.map((e)=>{
            if (e.id === item.id){
                e.situation = value;
                return newList;
            }
            dispatch(del(newList));
        })
    }

    function EditList(value, item){
        setOpen(!open);

        let newList = tasks;
        newList.map((e)=>{
            if (e.id === item.id){
                e.situation = value;
                return newList;
            }
            dispatch(edit(newList));
        })
    }

    function Remove(id, item){

        let newList = item;

        dispatch(del(id, newList));

        setList(tasks);
    }

    return(
        <UlTaskList>
            <Li finished={situation}>
                {open === false ? 

                    <Name >
                        {editar}
                    </Name> : 

                    <input maxLength={50} value={editar} onChange={((e)=>setEdit(e.currentTarget.value))}/>
                        }

                <Situation finished={situation}>        
                    <select onChange={((e)=>{AddList(e.currentTarget.value, item)})} >
                        <option value='Pendente'> 
                        Pendente </option>
                        <option value='Concluida'> Concluida </option>
                    </select>
                </Situation>  
            </Li>

            <Buttons list={props?.item}>
                <button  onClick={(()=> EditList(editar, item))}>EDITAR</button>
            
                <button  onClick={(()=> Remove(item.id, tasks))}>EXCLUIR</button>
            </Buttons>  
        </UlTaskList>
    )
}
export default TaskList;

const UlTaskList = styled.ul`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 35px;
    width: 93%;
    height: 30px;
`

const Li = styled.li `
    text-decoration: ${props => props.finished === 'Concluida' ? 'line-through' : 'none'};
    color: ${props => props.finished === 'Concluida' ? '#A36D1C' : '#01233a'};
    display: flex;
    justify-content: space-between;
    width: 85%;
    list-style: none;;
    display: flex;
    justify-content: space-between;
    width: 85%;
    list-style: none;
`


const Name = styled.div`
    width: 65%;
    margin-left: -28px;
    overflow: hidden;
`

const Situation = styled.div`
    position: relative;
    color: ${props => props.finished === 'Concluida' ? '#A36D1C' : '#01233a'};
    right: 42px;
    width: 30%;
    display: flex;
    justify-content: center;

    select {
        height: 25px;
        border-radius: 5px;
        border: solid #01233a 1px;
    }
`

const Buttons = styled.div`
    display: ${props => props.list.name === 'ADICIONE UMA TAREFA' ? 'none' : 'flex'};
    position: relative;
    right: 10px;
    height: 80%;

    button {
        font-size: 14px;
        margin-left: 5px;
        height: 100%;
        border-radius: 5px;
        background: #01233a;
        color: white;
        border: solid #01233a;
        cursor: pointer;
    }
`