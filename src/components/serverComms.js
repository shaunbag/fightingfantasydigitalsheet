import axios from "axios";
let baseUrl = "http://localhost:8000" 
const config = {
    headers: {  'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'withCredentials': 'true'
    }
}

export function saveCharacter(character){
    let data = JSON.stringify({
        "name": character.name,
        "skill": character.skill,
        "luck": character.luck,
        "stamina": character.stamina,
        "gold": character.gold
    })
    axios.post(baseUrl + "/api/createcharacter", data, config
    ).then((res) => {
        console.log(res)
        return res.data
    })
}

export async function getCharacter(id){
    axios.get(baseUrl  +"/api/character/" + id, config
    ).then((res) => {
        console.log(res)
        return res.data
    })
}

export async function getAllSavedCharacters(){
    axios.get(baseUrl + "/api/all", config
    ).then((res) => {
        console.log(res)
        return res.data
    })
}