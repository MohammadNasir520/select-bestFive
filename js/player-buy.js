const playerNameAray = [];




function getSelectButton(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    if (playerNameAray.length < 5) {
        playerNameAray.push(playerName)


    }
    else if (playerNameAray.length === 5) {
        alert('you can not buy more than five players')
        return;
    }

    const totalSelectedPlayer = document.getElementById('total-selected-player');
    totalSelectedPlayer.innerText = playerNameAray.length;


    const selectedNumberString = totalSelectedPlayer.innerText;
    const selectedPlayer = parseInt(selectedNumberString);
    // console.log(selectedPlayer)






    setPlayerName(playerName);
}

function setPlayerName(name) {


    const tableBody = document.getElementById('name-place');

    tableBody.innerHTML = ''

    for (let i = 0; i < playerNameAray.length; i++) {
        const playersName = playerNameAray[i];
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${playersName}</td>
        `
        tableBody.appendChild(tr)
    }


};

// get input value by a common function
function getInputValueById(inputField) {
    const PlayerField = document.getElementById(inputField);
    const PlayerFieldString = PlayerField.value;
    const PlayerFieldAmmount = parseFloat(PlayerFieldString);
    return PlayerFieldAmmount;
}

document.getElementById('btn-calculate').addEventListener('click', function () {


    const PlayerFieldAmmount = getInputValueById('player-field')

    const totalSelectedPlayer = document.getElementById('total-selected-player');
    totalSelectedPlayer.innerText = playerNameAray.length;


    const selectedNumberString = totalSelectedPlayer.innerText;
    const selectedPlayer = parseInt(selectedNumberString);

    const Expenses = PlayerFieldAmmount * selectedPlayer;
    console.log(Expenses)


})
