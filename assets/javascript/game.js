$(document).ready(function() {
    // VARIABLES
    // ==================================================================================
    const gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    let wins = 0;
    let losses = 0;
    let counter = 0;


    // FUNCTIONS
    // ==================================================================================
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    function newGame() {
        let currentRandom = randomNumber(19, 120);
        $(`#random-number`).html(currentRandom);
        
        let rubyValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(rubyValue), 1);
        let diamondValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(diamondValue), 1);
        let sapphireValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(sapphireValue), 1);
        let emeraldValue = gemValues[Math.floor(Math.random() * gemValues.length)];

        console.log(rubyValue);
        console.log(diamondValue);
        console.log(sapphireValue);
        console.log(emeraldValue);

        $(`#ruby-click`).on(`click`, function() {
            counter += rubyValue;
            $(`#current-total`).html(counter);

        })
        $(`#diamond-click`).on(`click`, function() {
            counter += diamondValue;
            $(`#current-total`).html(counter);
        })
        $(`#sapphire-click`).on(`click`, function() {
            counter += sapphireValue;
            $(`#current-total`).html(counter);
        })
        $(`#emerald-click`).on(`click`, function() {
            counter += emeraldValue;
            $(`#current-total`).html(counter);
        })


    }

    newGame();
    $(`#wins`).html(wins);
    $(`#losses`).html(losses);


















});