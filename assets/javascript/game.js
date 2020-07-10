$(document).ready(function() {
    // VARIABLES
    // ==================================================================================
    let gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
     randomNumber = (min, max) =>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let currentRandom = randomNumber(19, 120);
    $(`#random-number`).html(currentRandom);




    gameReset = () => {
        currentRandom = randomNumber(19, 120);
        $(`#random-number`).html(currentRandom);
        counter = 0;
        $(`#current-total`).html(counter);
        gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        rubyValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(rubyValue), 1);
        diamondValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(diamondValue), 1);
        sapphireValue = gemValues[Math.floor(Math.random() * gemValues.length)];
        gemValues.splice(gemValues.indexOf(sapphireValue), 1);
        emeraldValue = gemValues[Math.floor(Math.random() * gemValues.length)];
    }



        $(`#ruby-click`).on(`click`, () => {
            $(`#win-loss`).html(``);
            counter += rubyValue;
            $(`#current-total`).html(counter);
            if(counter > currentRandom) {
                $(`#win-loss`).html(`Thou lost! Choose a crystal to try again...`);
                losses++;
                $(`#losses`).html(losses);
                gameReset();
            } else if
            (counter === currentRandom && counter >= 19) {
                $(`#win-loss`).html(`Thou won! Choose a crystal to see if thy fortune holds...`);
                wins++;
                $(`#wins`).html(wins);
                gameReset();
            }

        })
        $(`#diamond-click`).on(`click`, () => {
            $(`#win-loss`).html(``);
            counter += diamondValue;
            $(`#current-total`).html(counter);
            if(counter > currentRandom) {
                $(`#win-loss`).html(`Thou lost! Choose a crystal to try again...`);
                losses++;
                $(`#losses`).html(losses);
                gameReset();
            } else if
                (counter === currentRandom && counter >= 19) {
                    $(`#win-loss`).html(`Thou won! Choose a crystal to see if thy fortune holds...`);
                    wins++;
                    $(`#wins`).html(wins);
                    gameReset();
                }
        })
        $(`#sapphire-click`).on(`click`, () => {
            $(`#win-loss`).html(``);
            counter += sapphireValue;
            $(`#current-total`).html(counter);
            if(counter > currentRandom) {
                $(`#win-loss`).html(`Thou lost! Choose a crystal to try again...`);
                losses++;
                $(`#losses`).html(losses);
                gameReset();
            } else if
                (counter === currentRandom && counter >= 19) {
                    $(`#win-loss`).html(`Thou won! Choose a crystal to see if thy fortune holds...`);
                    wins++;
                    $(`#wins`).html(wins);
                    gameReset();
                }
        })
        $(`#emerald-click`).on(`click`, () => {
            $(`#win-loss`).html(``);
            counter += emeraldValue;
            $(`#current-total`).html(counter);
            if(counter > currentRandom) {
                $(`#win-loss`).html(`Thou lost! Choose a crystal to try again...`);
                losses++;
                $(`#losses`).html(losses);
                gameReset();
            } else if
                (counter === currentRandom && counter >= 19) {
                    $(`#win-loss`).html(`Thou won! Choose a crystal to see if thy fortune holds...`);
                    wins++;
                    $(`#wins`).html(wins);
                    gameReset();
                }
        })

});
