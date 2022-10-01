import styled from "styled-components";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Infos from "./infos/Infos";
import TitleTasks from "./titletasks/TitleTasks";
import TaskList from "./tasklist/TaskList";

import { add, edit } from "../../../redux/store/lists/list.actions";


function Tasks(){
    const [task, setTask] = useState('');
    const [list, setList] = useState();

    const dispatch = useDispatch();

    const tasks = useSelector((state)=>state.list);

    useEffect(()=>{
        setList(tasks)
    },[task, list])

    function Adicionar (task){
        setTask('');

        let obj = {id: tasks.length + 1, name: task, situation: 'Pendente'};
        
        dispatch(add(tasks, obj));
  
    }

    return(
        <DivTasks>
            <Infos/>

            <TitleTasks/>

            {tasks?.map((item, index)=>(
                <TaskList key={index} item={item}/>
            ))}

            <div id="button">
                <input id="add" value={task} onChange={((e)=> setTask(e.currentTarget.value))}/>
               <Button onClick={(()=>Adicionar(task))}> ADICIONAR TAREFA </Button>   
            </div>
                      
        </DivTasks>
    )
}
export default Tasks;

const DivTasks = styled.div`
    height: 100%;
    min-height: 400px;
    width: 100%;
    border-radius: 20px;
    border: solid 1px #01233a;

    #button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }

    #add {
        width: 75%;
        height: 25px;
    }
`

const Button = styled.button`
    margin: 20px;
    font-size: 14px;
    margin-left: 5px;
    height: 40px;
    width: 120px;
    border-radius: 5px;
    background: #01233a;
    color: white;
    border: solid #01233a;
    cursor: pointer;
`