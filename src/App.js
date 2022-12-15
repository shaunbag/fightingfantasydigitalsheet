import { useState } from 'react';
import './App.css';
import { CharacterSheet } from './components/CharacterSheet';
import { BattleSheet } from './components/BattleSheet';
import { Button, Grid } from "@mui/material"
import { saveCharacter } from './components/serverComms';

function App() {

  const [input, setinput] = useState("Click to enter Name");
  const [character, setCharacter] = useState({
    name: input,
    skill: 0,
    stamina: 0,
    luck:0,
    gold: 0,
    jewels: [],
    potions: [],
    equipment: [],
    provisions: 0
  })
 
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
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} md={6}>
              <CharacterSheet character={character} handleCharacterChange={handleCharacterChange}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <BattleSheet monster={monster} character={character} handleMonsterChange={handleMonsterChange}/>
            </Grid>
          </Grid>
      </div>
      <Button
        variant='contained'
        onClick={() => saveCharacter(character)}
      >
        save
      </Button>
    </div>
  );
}

export default App;
