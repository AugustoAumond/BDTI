import styled from "styled-components";

import {FaList} from 'react-icons/fa'
import {MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

function Infos(props){

    return(
        <DivInfos>
            <div>
               {props.tasks.tasks.length} <FaList id="icons"/>
            </div>
            
            <div>
               {props.finished} <MdOutlineCheckBox id="icons"/>
            </div>
            
            <div>
               {props.pendenting}<MdOutlineCheckBoxOutlineBlank id="icons"/>
            </div>
            
        </DivInfos>
    )
}
export default Infos;

const DivInfos = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-top: 15px;
width: 100%;
height: 30px;
color: #01233a;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 10px;
    }
    
    #icons {
        margin: 5px;
    }
`