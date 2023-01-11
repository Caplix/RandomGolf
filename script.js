
var golfkølle = ["driver", "3 Wood", "5 Wood", "4 iron", "5 iron", "6 iron", "7 iron", "8 iron", "9 iron", "PW", "SW", "putter"];

var randomClub = golfkølle[Math.floor(Math.random() *golfkølle.length)];

let test = document.getElementById("test")


console.log(randomClub);

test.innerHTML = randomClub



