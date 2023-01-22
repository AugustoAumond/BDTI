import styled from "styled-components"

import { useEffect, useState } from "react";

import Menu from "./components/menu/Menu";
import Title from "./components/title/Title";
import ActionsTasks from "./components/actionstasks/ActionsTasks";
import Tasks from "./components/tasks/Tasks";

import MyContext from './context/MyContext';



function App() {
  const [taskList, setTaskList] = useState([]);
  const [situation, setSituation] = useState('All'); 
  const [change, setChange] = useState(false);

  useEffect (()=>{
    if (localStorage.getItem('TaskList')){
      setTaskList(JSON.parse(localStorage.getItem('TaskList')))
    }
  },[])

  return (
  <MyContext.Provider value={{taskList, setTaskList, situation, setSituation, change, setChange}}>
    <DivApp>
        <Menu/>

        <div id="organize">
          <Title/>

          <ActionsTasks/>

          <Tasks/>
        </div>

    </DivApp>
  </MyContext.Provider>
  )
}

export default App;

const DivApp = styled.div`
max-width: 1440px;
min-height: 100vh;
height: 100%;
font-family: calibri;
margin: 0 auto;
padding-bottom: 5%;


  #organize {
    position: relative;
    top: 100px;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 650px){
    #organize {
      width: 95%;
    }
  }
`
