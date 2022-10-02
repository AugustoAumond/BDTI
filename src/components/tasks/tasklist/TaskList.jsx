import styled from "styled-components";

import {Link} from 'react-router-dom';

import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {edit, del} from "../../../../redux/store/lists/list.actions";

function TaskList(props){
    const item = props.item;
    const [open, setOpen] = useState(false);
    const [editar, setEdit] = useState(item.name);
    const [situation, setSituation] = useState(item.situation);
    const [tru, setTru] = useState(false);
        
    const tasks = useSelector((state)=>state.list);

    const otherList = JSON.parse(localStorage.getItem('currentList'));

    const dispatch = useDispatch();

    useEffect(()=>{

    }, [tasks, tru]);


    setInterval (()=>{

        if (otherList?.tasks.length !== tasks?.tasks.length){
        setTru(!tru)
        }

      },[500])

    function AddList(value, item){
        setSituation(value);

        let newList = tasks;

        newList.tasks.map((e)=>{
            if (e.id === item.id){
                e.situation = value;
                return newList;
            }
       })

       dispatch(edit(newList));
    }
    

    function EditList(value, item){
        setOpen(!open);

        let newList = tasks;
        newList.map((e)=>{
            if (e.id === item.id){
                e.name = value;
                return newList;
            }
            dispatch(edit(newList));
        })
    }

    function Remove(id, item){

        dispatch(del(id, tasks));

    }

    return(
        <UlTaskList>
            <Li finished={situation}>
                {open === false ? 

                    <Name finished={situation}>
                        {props.item.name}
                    </Name> : 

                    <input maxLength={50} value={editar} onChange={((e)=>setEdit(e.currentTarget.value))}/>
                        }

                <Situation finished={situation}>  
                    <div id="divselect">      
                        <select onChange={((e)=>{AddList(e.currentTarget.value, item)})} >
                            <option value='Pendente'> 
                            Pendente </option>
                            <option value='Concluida'> Concluida </option>
                        </select>
                    </div>
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
    justify-content: space-between;
    position: relative;
    margin: 10px;
    width: 96%;
    height: 30px;
    padding: unset;
`

const Li = styled.li `
    text-decoration: ${props => props.finished === 'Concluida' ? 'line-through' : 'none'};
    color: ${props => props.finished === 'Concluida' ? '#A36D1C' : '#01233a'};
    display: flex;
    justify-content: space-between;
    width: 70%;
    list-style: none;
    transition: 2s;
`


const Name = styled.div`
    background: ${props => props.finished === 'Concluida' ? '#a36d1c4d' : 'white'};
    width: 65%;
    overflow: hidden;
    transition: 2s;

    @media (max-width: 650px){
        font-size: 8px;
        width: 50%;
    }
`

const Situation = styled.div`
    position: relative;
    color: ${props => props.finished === 'Concluida' ? '#A36D1C' : '#01233a'};
    width: 30%;
    display: flex;
    justify-content: center;
    transition: 2s;

    select {
        display: flex;
        justify-content: center;
        height: 25px;
        border-radius: 5px;
        border: solid #01233a 1px;
    }

    @media (max-width: 650px){
        select {
            font-size: 8px;
        }
    }
`

const Buttons = styled.div`
    display: ${props => props.list.name === 'ADICIONE UMA TAREFA' ? 'none' : 'flex'};
    position: relative;
    height: 70%;

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

    @media (max-width: 650px){
    flex-direction: column;
    height: 50%;
    justify-content: center;

        button {
            font-size: 8px;
            margin: 2px;
        }
    }
`