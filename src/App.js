import { useState } from 'react';
import MoleContainer from './MoleContainer';
import styled from 'styled-components';
import StartEndButton from './StartEndButton';


function App() {

  let [score, setScore] = useState(0)
  let [start, setStart] = useState(false)

  const handleStart = () => {
    setStart(prevState => !prevState)
    setScore(0)

  }



  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 6; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score}
        />
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }
  return (
    <Container className="App">
      <h1>Click-a-Mole!</h1>
      {start && <div>
        <b>{score}</b>
        <Game>
          {createMoleHill()}
        </Game>
        <EndGame>
          <StartEndButton handleStart={handleStart} text="End Game" />
        </EndGame>
      </div>}

      <StartGame>
        {!start && <StartEndButton handleStart={handleStart} text="Play Game" />}
      </StartGame>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  h1 {
    text-align: center;
    font-size: 5rem;
    line-height:1;
    margin-bottom: 0;
  }
  
  b {
    font-size: 2rem;
    display: block;
    text-align: center;
    margin-bottom: 12px;
  }
`

const Game = styled.div`
  width: 450px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`
const EndGame = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`

const StartGame = styled.div`
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`