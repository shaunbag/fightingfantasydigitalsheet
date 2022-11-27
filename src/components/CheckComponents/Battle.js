import { Button, Grid } from "@mui/material"

export function Battle(props){
    
    
    function fight(){
        let player = Math.floor(Math.random() * 12) + 1 + props.characterSkill;
        let monster = Math.floor(Math.random() * 12) + 1 + props.monsterSkill;
        if(player > monster){
            alert("Player Wins \nPlayer:  " + player  + ", Monster: " + monster)
        } else if(monster > player){
            alert("Monster Wins \nMonster:  " + monster + ", Player: " + player)
        } else {
            alert("its a Draw")
        }
    }
    
    return(
        <div>
            <Grid container>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
            <Button
                variant="contained"
                onClick={fight}
                color="error"
            >
                Fight
            </Button>
        </div>
    )
}