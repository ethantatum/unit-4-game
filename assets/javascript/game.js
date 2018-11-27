$(document).ready(function() {
    // VARIABLES
    // ==================================================================================
    const gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    let wins = 0;
    let losses = 0;
    let counter = 0;

    $(`#wins`).html(wins);
    $(`#losses`).html(losses);   
    
    let rubyValue = gemValues[Math.floor(Math.random() * gemValues.length)];
    gemValues.splice(gemValues.indexOf(rubyValue), 1);
    let diamondValue = gemValues[Math.floor(Math.random() * gemValues.length)];
    gemValues.splice(gemValues.indexOf(diamondValue), 1);
    let sapphireValue = gemValues[Math.floor(Math.random() * gemValues.length)];
    gemValues.splice(gemValues.indexOf(sapphireValue), 1);
    let emeraldValue = gemValues[Math.floor(Math.random() * gemValues.length)];

    // FUNCTIONS
    // ==================================================================================
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let currentRandom = randomNumber(19, 120);
    $(`#random-number`).html(currentRandom);
    
    
    
    
    function gameReset() {
        currentRandom = randomNumber(19, 120);
        $(`#random-number`).html(currentRandom);
        counter = 0;
        $(`#current-total`).html(counter);
        rubyValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(rubyValue), 1);
        diamondValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(diamondValue), 1);
        sapphireValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(sapphireValue), 1);
        emeraldValue = gemValues[Math.floor(Math.random() * gemValues.length)];
    }



        $(`#ruby-click`).on(`click`, function() {
            counter += rubyValue;
            $(`#current-total`).html(counter);
            console.log(counter);
            if(counter > currentRandom) {
                alert(`You lose!`);
                losses++;
                $(`#losses`).html(losses);
                gameReset();
            } else if 
            (counter === currentRandom && counter >= 19) {
                alert(`You win!`)
                wins++;
                $(`#wins`).html(wins);
                gameReset();
            }
            
        })
        $(`#diamond-click`).on(`click`, function() {
            counter += diamondValue;
            $(`#current-total`).html(counter);
            console.log(counter);
            if(counter > currentRandom) {
                alert(`You lose!`);
                losses++;
                $(`#losses`).html(losses);
                gameReset();
            } else if 
                (counter === currentRandom && counter >= 19) {
                    alert(`You win!`)
                    wins++;
                    $(`#wins`).html(wins);
                    gameReset();
                }
        })
        $(`#sapphire-click`).on(`click`, function() {
            counter += sapphireValue;
            $(`#current-total`).html(counter);
            console.log(counter);
            if(counter > currentRandom) {
                alert(`You lose!`);
                losses++;
                $(`#losses`).html(losses);
                gameReset();
            } else if 
                (counter === currentRandom && counter >= 19) {
                    alert(`You win!`)
                    wins++;
                    $(`#wins`).html(wins);
                    gameReset();
                }
        })
        $(`#emerald-click`).on(`click`, function() {
            counter += emeraldValue;
            $(`#current-total`).html(counter);
            console.log(counter);
            if(counter > currentRandom) {
                alert(`You lose!`);
                losses++;
                $(`#losses`).html(losses);
                gameReset();
            } else if 
                (counter === currentRandom && counter >= 19) {
                    alert(`You win!`)
                    wins++;
                    $(`#wins`).html(wins);
                    gameReset();
                }
        })
    

});


// Not resetting crystal values