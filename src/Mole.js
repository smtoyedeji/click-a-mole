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
        <Moles>
            <img src={mole} alt="Mole" onClick={props.moleClicked}/>
        </Moles>
    )
}

export default Mole

const Moles = styled.div`
    height: 150px;
    width: 150px;

    img {
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
`