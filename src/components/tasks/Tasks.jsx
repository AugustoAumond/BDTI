import styled from "styled-components";

import { useEffect, useState, useContext} from "react";

import Infos from "./infos/Infos";
import TitleTasks from "./titletasks/TitleTasks";
import TaskList from "./tasklist/TaskList";

import MyContext from "../../context/MyContext";



function Tasks(){
    const [task, setTask] = useState('');
    const [finished, setFinished] = useState();
    const [pendenting, setPendenting] = useState();
    const {setSituation, taskList, setTaskList, change, setChange} = useContext(MyContext);

    useEffect(()=>{
        let Finished = 0;
        let Pendenting = 0;

        taskList.forEach( e => {
            if (e.situation === 'Pendente'){
                Pendenting = Pendenting + 1;
            } else if (e.situation === 'Concluido'){
                Finished = Finished + 1;
            }
        });

        setFinished(Finished);
        setPendenting(Pendenting);

    }, [taskList, change, task]);

    function Adicionar(){
        let newList = taskList;
        let currentId = newList.length;
        if (task.split('').length < 4){
            window.alert('Tarefa invalida')
        } else {
            if (newList[0] === undefined){
                newList[0] = {name: task, id: 0, situation: 'Pendente'};
                setTaskList(newList);
                setSituation('All');
                localStorage.setItem('TaskList', JSON.stringify(newList));
                setTask('');
            } else {
                newList.push({name: task, id: currentId, situation: 'Pendente'});
                setTaskList(newList);
                localStorage.setItem('TaskList', JSON.stringify(newList));
                setTask('');
            }
        }
        setChange(!change);
    } 

    return(
        <DivTasks className="tasks">
            <Infos finished={finished} pendenting={pendenting} all={taskList.length}/>

            <TitleTasks />

            <TaskList />

            <div id="button">
                <input id="add" value={task} onChange={((e)=> setTask(e.currentTarget.value) )}/>

                <Button onClick={(()=>Adicionar())}> ADICIONAR TAREFA </Button>   
            </div>
        </DivTasks>
    )
}
export default Tasks;



const DivTasks = styled.div`
    position: relative;
    min-height: 400px;
    width: 100%;
    max-width: 865px;
    border-radius: 20px;
    border: solid 1px #01233a;
    margin: 0 auto;
    padding: 10px;

    #button {
        position: relative;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
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

    @media (max-width: 650px){
        font-size: 10px;
        height: 30px;
    }
`