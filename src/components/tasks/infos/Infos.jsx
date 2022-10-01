import styled from "styled-components";

import {FaList} from 'react-icons/fa'
import {MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

function Infos(){
    return(
        <DivInfos>
            <div>
               110 <FaList id="icons"/>
            </div>
            
            <div>
               40 <MdOutlineCheckBox id="icons"/>
            </div>
            
            <div>
               70 <MdOutlineCheckBoxOutlineBlank id="icons"/>
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