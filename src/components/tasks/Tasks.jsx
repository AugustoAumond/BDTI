import styled from "styled-components";

import { useEffect, useState, useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";

import Infos from "./infos/Infos";
import TitleTasks from "./titletasks/TitleTasks";
import TaskList from "./tasklist/TaskList";

import { add } from "../../../redux/store/lists/list.actions";


function Tasks(){
    const [task, setTask] = useState('');
    const [tru, setTru] = useState(true);

    const dispatch = useDispatch();

    const tasks = useSelector((state)=>state.list); 
    
    const filteredTasks = useMemo(() => {
        if(tasks.type === "finished"){
         const finishedTasks = tasks.tasks.map(task => task.situation === "Concluido");
         return finishedTasks ;
        }
      
        if(tasks.type === "pendenting"){
          const pendentingTasks = tasks.tasks.map(task => task.situation === "Pendente");
          return pendentingTasks;
         }
        return tasks.tasks
      }, [tasks.type, tasks.tasks]);


      setInterval (()=>{
        if (filteredTasks !== tru){
            setTru(filteredTasks);
        }

      },[500])
   

    useEffect(()=>{

        ShowScreen(tasks.type, tasks.tasks)

    }, [tasks, task, tru])

    
    function ShowScreen(type, list){
        let screen = [];

        if (type === 'full'){
            list;
            return list;
        }

        if (type === 'finished'){
            list.map((e)=>{
                if (e.situation === 'Concluida'){
                    screen.push(e);
                }
            })
            return screen;
        } 
        
        if (type === 'pendenting'){
            list.map((e)=>{
                if (e.situation === 'Pendente'){
                    screen.push(e);
                }
            })
            return screen;
        } 
    }

    function Finished (){
        let count = 0;
        tasks.tasks.forEach((e)=>{
            if (e.situation === 'Concluida'){
                count = count + 1;
            }
        })  
        return count;    
    }

    function Pendenting (){
        let count = 0;
        tasks.tasks.forEach((e)=>{
            if (e.situation === 'Pendente'){
                count = count + 1;
            }
        })
        return count;    
    }

    function Adicionar (task){
        let length = task.split('');
        if (length.length < 7){
            window.alert ('Digite uma tarefa válida')
        } else {
            let obj = {id: tasks.tasks.length + 1, name: task, situation: 'Pendente'}; 
            dispatch(add(tasks, obj));
            setTask('');
        }     
    }

    return(
        <DivTasks class="tasks">
            <Infos tasks={tasks} finished={Finished()} pendenting={Pendenting()}/>

            <TitleTasks />

            {ShowScreen(tasks.type, tasks.tasks).map((item, index)=>(
                <TaskList key={item.id} item={item}/>
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
        margin-top: 80px;
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