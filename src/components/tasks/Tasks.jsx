import styled from "styled-components";

import { useEffect, useState} from "react";

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

    const otherList = JSON.parse(localStorage.getItem('currentList'));

    useEffect(()=>{
    
        localStorage.setItem('currentList', JSON.stringify(tasks));

        console.log(tasks);
        ShowScreen(tasks.type, tasks.tasks)

    }, [tasks, task, tru]);

    
    setInterval (()=>{
        if (otherList?.tasks.name !== tasks?.tasks.length){
        setTru(!tru)
        }

      },[2000])

    
    function ShowScreen(type, list){
        let screen = [];

        if (type === 'full'){
            screen = list;
        }

        if (type === 'finished'){
            list.map((e)=>{
                if (e.situation === 'Concluida'){
                    screen.push(e);
                }
            })
        } 
        
        if (type === 'pendenting'){
            list.map((e)=>{
                if (e.situation === 'Pendente'){
                    screen.push(e);
                }
            })
        } 
        return screen;
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
            let obj = {id: tasks.tasks.length === 0 ? 0 : tasks.tasks.length, name: task, situation: 'Pendente'}; 
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
    max-width: 720px;
    border-radius: 20px;
    border: solid 1px #01233a;
    margin: 0 auto;

    #button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin-left: 5px;
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

    @media (max-width: 650px){
        font-size: 10px;
        height: 30px;
    }
`