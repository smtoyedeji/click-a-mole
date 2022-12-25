import { useState } from 'react';
import MoleContainer from './MoleContainer';
import styled from 'styled-components';


function App() {

  let [score, setScore] = useState(0)

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
      <b>{score}</b>
      <Game>
        {createMoleHill()}
      </Game>
    </Container>
  );
}

export default App;

const Container = styled.div`
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
  }
`

const Game = styled.div`
  width:600px;
  height:400px;
  display:flex;
  flex-wrap:wrap;
  margin:0 auto;
`
