const playerNameAray = [];

function setPlayerName(name) {
    console.log(name)
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

}

function getSelectButton(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    playerNameAray.push(playerName)


    document.getElementById('total-selected-player').innerText = playerNameAray.length;

    setPlayerName(playerName);
}



