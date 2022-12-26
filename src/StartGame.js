import React, { useState } from 'react'
import styled from 'styled-components'

function StartGame({ setStart }) {
    const play = () => {
        setStart(prevState => !prevState)
        
    }
    
  return (
    <Button>
        <button onClick={play}>Play Game</button>
    </Button>
  )
}

export default StartGame

const Button = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        padding: 20px 40px;
        border: transparent;
        border-radius: 10px;
        font-size: 1.5rem;
    }
    
`