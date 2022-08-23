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
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldAmmount = parseFloat(inputFieldString);
    if (typeof inputFieldAmmount !== 'number') {
        alert('Please Enter valid number')
    }
    else if (inputFieldAmmount < 0) {
        alert('please enter positive number')
        return;
    }
    return inputFieldAmmount;
};

// set Input value by a common function:
function setElementValueById(textid, value) {
    if (isNaN(value)) {
        alert('please enter number')
        return value;
    }
    const expenses = document.getElementById(textid)
    expenses.innerText = value;

};


// calculate buton start
document.getElementById('btn-calculate').addEventListener('click', function () {


    const PlayerFieldAmmount = getInputValueById('player-field')

    const totalSelectedPlayer = document.getElementById('total-selected-player');
    totalSelectedPlayer.innerText = playerNameAray.length;


    const selectedNumberString = totalSelectedPlayer.innerText;
    const selectedPlayer = parseInt(selectedNumberString);

    const Expenses = PlayerFieldAmmount * selectedPlayer;

    setElementValueById('expenses', Expenses)

});
// calculate buton end


document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const manegerField = getInputValueById('manager-field');
    const coachField = getInputValueById('coach-field')

    const managerCoachTotal = manegerField + coachField;
    setElementValueById('Final-total', managerCoachTotal)

    const Expenses = document.getElementById('expenses');
    const ExpensesString = Expenses.innerText;
    const summationOfCalculation = parseFloat(ExpensesString);

    const finalTotal = summationOfCalculation + managerCoachTotal;
    setElementValueById('Final-total', finalTotal)
    // console.log(finalTotal)
});


// button disabled function
function disableButton(button) {
    const totalSelectedPlayer = parseFloat((document.getElementById('total-selected-player')).innerText);
    console.log(totalSelectedPlayer)
    if (totalSelectedPlayer < 6) {

        document.getElementById(button).setAttribute('disabled', true);
        document.getElementById(button).style.backgroundColor = 'Lavender'
    }
}

// button disabled event handlar
document.getElementById('btn-messy').addEventListener('click', function () {
    disableButton('btn-messy')

})

document.getElementById('btn-naymar').addEventListener('click', function () {
    disableButton('btn-naymar')

})

document.getElementById('btn-mbappe').addEventListener('click', function () {
    disableButton('btn-mbappe')

})

document.getElementById('btn-machado').addEventListener('click', function () {
    disableButton('btn-machado')

})

document.getElementById('btn-ramos').addEventListener('click', function () {
    disableButton('btn-ramos')

})


document.getElementById('btn-renato').addEventListener('click', function () {
    disableButton('btn-renato')

})
