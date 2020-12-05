// A wolf in sheep's clothing
// Exercise in Tech Interview Glints Academy

function warnTheSheep(queue) {
  queue.reverse()
  if(queue[0] == "wolf") {
    return "Pls go away and stop eating my sheep"
  } else {
    let numberOfSheep = queue.indexOf("wolf")
    return `Oi! Sheep number ${numberOfSheep}! You are about to be eaten by a wolf!`
  }
}


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");

//console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])) //"Oi! Sheep number 1! You are about to be eaten by a wolf!"
//console.log(warnTheSheep(["sheep", "sheep", "wolf"])) //"Pls go away and stop eating my sheep"

// DONE
