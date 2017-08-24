/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function() {


  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function() {

    let resetButton = $("#reset");
    let numberofResets = $("#num-resets");
    let teamOneShoot = $("#teamone-shoot");
    let teamOneNumShots = $("#teamone-numshots");
    let teamTwoShoot = $("#teamtwo-shoot");
    let teamOneNumHits = $("#teamone-numhits");
    let teamTwoNumShots = $("#teamtwo-numshots");
    let teamTwoNumHits = $("#teamtwo-numhits")
    let sound = $("#sound");

    //Once Team One's SHOOT button is clicked, will add 1 to the shot counter.
    //If the ramdomNumber produced is less than 3, shot will be missed. Everything else should produce a goal.)
    //    teamOneShoot.addEventListener("click", function(){ <---------JS CODE
    teamOneShoot.click(function() {
      console.log("Team One Shoot button clicked");

      let newteamOneNumShots = parseInt(teamOneNumShots.html()) + 1;
      teamOneNumShots.html(newteamOneNumShots)

      let randomNumber = (Math.random() * 5) + 1
      if (randomNumber < 5) {
        alert("Missed!");
      } else {
        alert("GOAAAALLLLLLLLL!!");
        let newteamOneNumHits = parseInt(teamOneNumHits.html()) + 1;
        teamOneNumHits.html(newteamOneNumHits);
        $("body").css({
        backgroundColor: "blue"
        })
        //  sound.play()
      }
    })

//
// //Once Team Two's SHOOT button is clicked, will add 1 to the shot counter.
// //If the ramdomNumber produced is less than 3, shot will be missed. Everything else should produce a goal.)
    teamTwoShoot.click(function() {
        console.log("Team Two Shoot button clicked");

        let newteamTwoNumShots = parseInt(teamTwoNumShots.html()) + 1;
        teamTwoNumShots.html(newteamTwoNumShots)

        let randomNumber = (Math.random() * 5) + 1
        if (randomNumber < 5) {
          alert("Missed!");
        } else {
          alert("GOAAAALLLLLLLLL!!");
          let newteamTwoNumHits = parseInt(teamTwoNumHits.html()) + 1;
          teamTwoNumHits.html(newteamTwoNumHits);
          $("body").css({
          backgroundColor: "yellow"
          })
    //  sound.play()
    }
  })

// //Once the RESET button is clicked, add one to the reset counter.
    resetButton.click(function() {
      console.log("Reset Button Clicked!");
    let resets = parseInt(numberofResets.html()) + 1;
    numberofResets.html(resets)
    // //Once the reset button is clicked, reset all goals and shots to zero.
    let clearvalues = 0;
      teamOneNumShots.html(clearvalues);
      teamOneNumHits.html(clearvalues);
      teamTwoNumShots.html(clearvalues);
      teamTwoNumHits.html(clearvalues);
      $("body").css({
      backgroundColor: "white"
      })
    })

// })
//
// //Once Team One or Team Two makes a goal, play a cheering crowd sound.

}) //$function
})();





//})();
