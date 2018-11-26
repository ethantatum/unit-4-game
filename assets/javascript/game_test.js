$(document).ready(function() {
// VARIABLES
    // ==================================================================================
    const gemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    let wins = 0;
    let losses = 0;
    let counter = 0;

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let currentRandom = randomNumber(19, 120);
    $(`#random-number`).html(currentRandom);

    let thisCrystal = $(`.gem-click`);

    thisCrystal.attr(`data-crystalvalue`, gemValues[Math.floor(Math.random() * gemValues.length)]);

    console.log(thisCrystal);

    $(`.gem-click`).on(`click`,  function() {
        let crystalValue =  ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $(`#current-total`).html(counter);
        if (counter === currentRandom) {
            alert("You win!");
          }
      
          else if (counter >= currentRandom) {
            alert("You lose!!");
          }
    })
































})