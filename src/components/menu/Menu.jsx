import styled from "styled-components";

import {FaUser} from 'react-icons/fa'

function Menu(){
    return(
        <DivMenu>
            <div id="fixed">
                <div>
                    <img id="logo" src="./cropped-logo_site-1.png" alt="" />
                </div>
                
                <div>
                    <FaUser id="user"/>
                </div>
            </div>     
        </DivMenu>
    )
}
export default Menu;

const DivMenu = styled.nav`
position: fixed;
z-index: 2;
width: 100%;
background: white;

    #fixed { 
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 75px;
        max-width: 1440px;
    }

    #logo {
        margin: 10px;
    }

    #user {
        font-size: 24px;
        color: #004576;
        margin: 20px;
        cursor: pointer;
    }
`