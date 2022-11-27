import { useState } from 'react';
import './App.css';
import { CharacterSheet } from './components/CharacterSheet';
import { BattleSheet } from './components/BattleSheet';
import { Grid } from "@mui/material"
function App() {

  const [character, setCharacter] = useState({
    skill: 0,
    stamina: 0,
    luck:0,
    gold: 0,
    jewels: [],
    potions: [],
    equipment: [],
    provisions: 0
  })
  const [input, setinput] = useState("Click to enter Name");
  const [monster, setMonster] = useState({
    skill: 0,
    stamina: 0
  })

  function handleCharacterChange(attribute, operator){
    let value = character[attribute] + operator
    setCharacter({
      ...character,
      [attribute]:  value
    })
  }

  function handleMonsterChange(attribute, operator){
    let value = monster[attribute] + operator
    setMonster({
      ...monster,
      [attribute]:  value
    })
  }

  function showTextInput(){
    var x = document.getElementById("name");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div className="App">
     <div className='mainContainer'>
       <div className="title" onClick={showTextInput}>{input}</div>
        <input style={{display: 'none'}}id="name" type="text" onChange={(e) => setinput(e.target.value)} value={input}></input>
          <Grid container >
            <Grid item xs={6}>
              <CharacterSheet character={character} handleCharacterChange={handleCharacterChange}/>
            </Grid>
            <Grid item xs={6}>
              <BattleSheet monster={monster} character={character} handleMonsterChange={handleMonsterChange}/>
            </Grid>
          </Grid>
      </div>
    </div>
  );
}

export default App;
