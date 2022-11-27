import { Button, Grid } from "@mui/material"
import { Battle } from "./CheckComponents/Battle"
import { SkillCheck } from "./CheckComponents/SkillCheck"

export function BattleSheet(props){

    function increment(skill){
        props.handleMonsterChange(skill, +1)
    }

    function decrement(skill){
        props.handleMonsterChange(skill, -1)
    }

    return(
        <div>
            <h2 style={{textAlign: 'centre'}}>Battle Ground</h2>
            <Grid container>
                <Grid item xs={6}>
                    <p>Monsters Stamina: {props.monster.stamina}</p>
                    <Button onClick={() => increment("stamina")}>+</Button>
                    <Button onClick={() => decrement("stamina")}>-</Button>
                </Grid>
                <Grid item xs={6}>
                    <p>Monsters Skill: {props.monster.skill}</p>
                    <Button onClick={() => increment("skill")}>+</Button>
                    <Button onClick={() => decrement("skill")}>-</Button>
                </Grid>
            </Grid>
            <Battle monsterSkill={props.monster.skill} characterSkill={props.character.skill}/>
            <SkillCheck skill={props.character.skill}/>
        </div>
    )
}