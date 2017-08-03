/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
function handValue(hand) {

let handA = [];
let handTotalC = 0;
let handTotalA = 0;
let handTotalF = 0;
let handTotalH = 0;
let output = 0;


  for(let i=0; i<hand.length; i++){
    if (hand[i] === "A") {
      handA.push(hand[i]);
    } else if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
        hand[i] = 10; handTotalF += hand[i];
    } else {
        handTotalC += (parseInt(hand[i], 10));
    }
  }

  handTotalH = (handTotalF + handTotalC);


  for (let j=0; j<handA.length; j++) {
    if (handTotalH >= 11) {
      handA[j] = 1; handTotalA += handA[j];
    } else {
      handA[j] = 11; handTotalA += handA[j];
    }
  }

  output = (handTotalA + handTotalH)

console.log(output);
return (output);

}
