const lunches = [];

const addLunchToEnd = (lunches,lunch) => {
  console.log(lunch + " added to the end of the lunch menu.");
  lunches.push(lunch);
  return lunches;
};

const addLunchToStart = (lunches, lunch) => {
  console.log(lunch + " added to the start of the lunch menu.");
  lunches.unshift(lunch);
  return lunches;
};

const removeLastLunch = (lunches) => {
  if (!lunches.length){
    console.log("No lunches to remove.")
  } else {
    console.log(`${lunches.pop()} removed from the end of the lunch menu.`)
    return lunches;
  } 
}

const removeFirstLunch = (lunches) => {
  if (!lunches.length){
    console.log("No lunches to remove.")
  } else {
    console.log(`${lunches.shift()} removed from the start of the lunch menu.`)
    return lunches;
  }
}

const getRandomLunch = (lunches) => {
    if (!lunches.length){
    console.log("No lunches available.")
  } else {
    const lunch =  lunches[Math.floor(Math.random()*lunches.length)];
    console.log(`Randomly selected lunch: ${lunch}`)
  }
};

const showLunchMenu = (lunches) => {
    if (!lunches.length){
    console.log("The menu is empty.")
  } else {
    console.log(`Menu items: ${lunches.join(", ")}`)
  }
  
};
