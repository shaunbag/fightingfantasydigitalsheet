import { Button, Grid } from "@mui/material"

export function CharacterSheet(props){


    function increment(skill){
        props.handleCharacterChange(skill, +1)
    }

    function decrement(skill){
        props.handleCharacterChange(skill, -1)
    }

    return(
        <div className="character">
           
            <Grid container>
                <Grid item xs={4}>
                    <div className="attribute">
                        <h3>Skill</h3>
                        <p>{props.character.skill}</p>
                        <Button onClick={() => increment("skill")}>+</Button>
                        <Button onClick={() => decrement("skill")}>-</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="attribute">
                        <h3>Luck</h3>
                        <p>{props.character.luck}</p>
                        <Button onClick={() => increment("luck")}>+</Button>
                        <Button onClick={() => decrement("luck")}>-</Button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="attribute">
                        <h3>Stamina</h3>
                        <p>{props.character.stamina}</p>
                        <Button onClick={() => increment("stamina")}>+</Button>
                        <Button onClick={() => decrement("stamina")}>-</Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="equipment">
                        <h3>Equipment</h3>
                        <input type="text" value={props.equipment} onChange={(e) => props.setEquipment(item => [...item, e.target.value])}/>
                        {
                            props.character.equipment.map(item => {
                                return <p>{item}</p>
                            })
                        }
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="attribute">
                        <h3>Gold</h3>
                        <p>{props.character.gold}</p>
                        <Button onClick={() => increment("gold")}>+</Button>
                        <Button onClick={() => decrement("gold")}>-</Button>
                    </div>
                    <div className="attribute">
                        <h3>Jewels</h3>
                        <p>{props.character.jewels}</p>
                    </div>
                    <div className="attribute">
                        <h3>Potions</h3>
                        <p>{props.character.potions}</p>
                    </div>
                    <div className="attribute">
                        <h3>Provisions</h3>
                        <p>{props.character.provisions}</p>
                        <Button onClick={() => increment("provisions")}>+</Button>
                        <Button onClick={() => decrement("provisions")}>-</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}