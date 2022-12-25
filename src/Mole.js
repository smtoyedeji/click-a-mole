import { useEffect } from "react";
import styled from "styled-components";
import mole from "./images/mole.png"

function Mole(props){

    useEffect(() =>{
        let randomSeconds = Math.ceil(Math.random() * 6000);
        let timer = setTimeout(()=>{
            props.setDisplayMole(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    
    return (
        <MoleContainer>
            <img src={mole} alt="Mole" onClick={props.moleClicked}/>
        </MoleContainer>
    )
}

export default Mole

const MoleContainer = styled.div`
    height: 200px;
    width: 200px;

    img {
        height: 100%;
        width: 100%;
    }
`