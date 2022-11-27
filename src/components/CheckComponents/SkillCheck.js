import { Button } from "@mui/material";

export function SkillCheck(props){
    
    
    function checkSkill(){
        let roll = Math.floor(Math.random() * 12) + 1;
        if(props.skill <= roll){
            alert("Unlucky you rolled " + roll + " Skill " + props.skill)
        } else {
            alert("You were lucky! you Rolled " + roll + " Skill " + props.skill)
        }
    }
    
    
    return(
        <div>
            <h2>Make a Skill Check:</h2>
            <Button
                variant="contained"
                onClick={checkSkill}
                color="error"
            >
                Check
            </Button>
        </div>
    )
}