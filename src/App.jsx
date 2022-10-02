import styled from "styled-components"

import Menu from "./components/menu/Menu";
import Title from "./components/title/Title";
import ActionsTasks from "./components/actionstasks/ActionsTasks";
import Tasks from "./components/tasks/Tasks";

function App() {

  return (
   <DivApp>
      <Menu/>

      <div id="organize">
        <Title/>

        <ActionsTasks/>

        <Tasks/>
      </div>
      
   </DivApp>
  )
}

export default App;

const DivApp = styled.div`
max-width: 1440px;
min-height: 100vh;
height: 100%;
font-family: calibri;


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
