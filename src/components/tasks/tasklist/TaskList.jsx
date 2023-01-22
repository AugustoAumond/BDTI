import styled from "styled-components";

import { useEffect, useState, useContext } from "react";

import MyContext from "../../../context/MyContext";

function TaskList(props){
    const {taskList, setTaskList, situation, change, setChange} = useContext(MyContext);
    
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState();
    const [list, setList] = useState();

    useEffect(()=>{
        let newList = [];
        taskList.forEach(item => {
            if (situation === 'All'){
                newList.push(item);
            } else if (situation === 'Finished'){
                if (item.situation === 'Concluido'){
                    newList.push(item);
                }
            } else if (situation === 'Pendenting'){
                if (item.situation === 'Pendente'){
                    newList.push(item);
                }
            }
            setList(newList);
        });

    }, [taskList, change, situation, list]);

    function addInput (value, id){
        if (open === false){
            setOpen(!open);
            setEdit(value)
        } else {
            let newList = taskList;
            newList.map((item, index)=>{
                if (item.id === id){
                    item.name = edit;
                }
            })
            setOpen(!open);
            setTaskList(newList);
            localStorage.setItem('TaskList', JSON.stringify(newList));
        }
    }

    console.log(taskList);

    function EditSituation(value, id){
        let newList = taskList;
        newList[id].situation = value;

        setTaskList(newList);

        setChange(!change);
        localStorage.setItem('TaskList', JSON.stringify(newList));
    }

    function RemoveItem(id){
        let newList = [];
        if (taskList.length === 1){
            newList = taskList;
            newList.pop();
        } else (
            taskList.map((item, index)=>{
                if (item.id !== id && item.id < id){
                    newList.push(item);
                } else if (item.id !== id && item.id > id){
                    item.id = item.id -1;
                    newList.push(item);
                }
            })
        )
        setTaskList(newList);
        setList(newList);
        setChange(!change);

        localStorage.setItem('TaskList', JSON.stringify(newList));
    }

    return(
        <UlTaskList>
            {list?.map((item, index)=>(
            <Li key={index} finished={situation}>
            {open === false ? 

                <Name finished={item.situation}>
                    {item.name}
                </Name> : 

                <input maxLength={50} value={edit} onChange={((e)=>setEdit(e.currentTarget.value))}/>
            }

                <Situation finished={item.situation}>     
                        <Select finished={item.situation} type='reset' onChange={((e)=>EditSituation(e.currentTarget.value, item.id))}>
                            <option selected={item.situation}>{item.situation}</option>

                            <option value='Pendente'>Pendente </option>

                            <option value='Concluido'> Concluida </option>
                        </Select>
                </Situation>  

                <Buttons>
                    <button onClick={(()=>addInput(item.name,item.id, edit))}>EDITAR</button>
                
                    <button onClick={(()=>RemoveItem(item.id))}>EXCLUIR</button>
                </Buttons>  
            </Li>
            ))}
        </UlTaskList>
    )
}
export default TaskList;

const UlTaskList = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 10px;
    width: 96%;
    padding: unset;
`

const Li = styled.li `
    color: ${props => props.finished === 'Concluido' ? '#A36D1C' : '#01233a'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    list-style: none;
    margin-bottom: 10px;
    margin-bottom: 10px;
    transition: 2s;
`


const Name = styled.div`
    text-decoration: ${props => props.finished === 'Concluido' ? 'line-through' : 'none'};
    background: ${props => props.finished === 'Concluido' ? '#a36d1c4d' : 'white'};
    width: 48%;
    overflow: hidden;
    transition: 2s;

    @media (max-width: 650px){
        font-size: 8px;
        width: 50%;
    }
`

const Situation = styled.div`
    position: relative;
    text-decoration: ${props => props.finished === 'Concluido' ? 'line-through' : 'none'};
    color: ${props => props.finished === 'Concluido' ? '#A36D1C' : '#01233a'};
    background: ${props => props.finished === 'Concluido' ? '#a36d1c4d' : 'white'};
    width: 24%;
    display: flex;
    justify-content: center;
    transition: 2s;

    select {
        
    }

    @media (max-width: 650px){
        select {
            font-size: 8px;
        }
    }
`

const Select = styled.select`
    text-decoration: ${props => props.finished === 'Concluido' ? 'line-through' : 'none'};
    color: ${props => props.finished === 'Concluido' ? '#A36D1C' : '#01233a'};  
    background: ${props => props.finished === 'Concluido' ? '#a36d1c4d' : 'white'};
    display: flex;
    justify-content: center;
    height: 25px;
    border-radius: 5px;
    border: solid #01233a 1px;
`

const Buttons = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    width: 21%;
    min-width: 157px;

    button {
        display: flex;
        align-items: center;
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