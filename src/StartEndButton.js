import React from 'react'
import styled from 'styled-components'

function StartEndButton({ handleStart, text }) {

  return (
    <ButtonContainer>
      <button onClick={handleStart}>
        {text}
      </button>
    </ButtonContainer>
  )
}

export default StartEndButton

const ButtonContainer = styled.div`
  button {
    padding: 8px 16px;
    border: transparent;
    border-radius: 10px;
    font-size: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
    
`