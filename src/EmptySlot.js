import { useEffect } from "react";
import styled from "styled-components";
import molehill from  "./images/molehill.png"

function EmptySlot(props) {

    useEffect(()=>{
        let randomSeconds = Math.ceil(Math.random() * 6000);
        let timer = setTimeout(()=>{
            props.setDisplayMole(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <MoleHill>
            <img src={molehill} alt="Mole Hill"/>
        </MoleHill>
    )
}

export default EmptySlot

const MoleHill = styled.div`
    height: 150px;
    width: 150px;

    img {
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
`