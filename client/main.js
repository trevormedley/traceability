const { default: axios } = require("axios")
const { createPlayers } = require("../server/controller")

const playerSection = document.querySelector('#playerlist')
const form = document.querySelector('form')

const baseURL = `http://localhost:3333/api/players/`

const playersCallback = ({ data: players }) => displayPlayers(players)
const errCallback = err => console.log(err.response.data)

const getAllPlayers = () => {
    axios.get(baseURL)
    .then(playersCallback)
    .catch(errCallback)
}

const createPlayer = body => {
    axios.post(baseURL, body)
    .then(playersCallback)
    .catch(errCallback)
}

function submitHandler (e) {
    e.preventDefault()

    let firstname = document.querySelector('#fn')
    let lastname = document.querySelector('#ln')
    let position = document.querySelector('#pos')
    let imageURL = document.querySelector('#imageinput')

    let bodyObj = {
        firstname: firstname.value,
        lastname: lastname.value,
        position: position.value,
        imageURL: imageURL.value
    }

    createPlayer(bodyObj)
}

function createPlayerCard(player) {
    const playerCard = document.createElement('div');

    playerCard.innerHTML = `
    <div id="player">
            <div id="imgWrap">
                <img id="headshot" src="${imageURL}">
            </div>
            <div>
                <h2>${firstname} ${lastname}</h2>
            </div>
            <div>
                <h3>${position}</h3>
            </div>
        </div>
    `
    playerSection.appendChild(playerCard);
}

function displayPlayers(arr) {
    playerSection.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPlayerCard(arr[i]); 
    }
}

form.addEventListener(`submit`, submitHandler);

getAllPlayers();