// Questions
const obj1 = {
  category: "Daniel",
  question: "What is my name?",
  choices: ["Daniel", "Josh", "Cole"],
  answer: "Daniel"
};
const obj2 = {
  category: "Daniel",
  question: "What is my age?",
  choices: ["23", "22", "24"],
  answer: "23"
};
const obj3 = {
  category: "Daniel",
  question: "What food do I dislike?",
  choices: ["Eggplant", "Tomatoes", "Lettuce"],
  answer: "Eggplant"
};
const obj4 = {
  category: "Daniel",
  question: "What is my favourite music genre?",
  choices: ["Jazz", "Metal", "Pop"],
  answer: "Jazz"
};
const obj5 = {
  category: "Daniel",
  question: "When do I sleep?",
  choices: ["Late", "Reasonable", "Early"],
  answer: "Late"
};

// Array
const questions = [obj1, obj2, obj3, obj4, obj5];


// Functions
function getRandomQuestion(questions) {
  return questions[Math.floor(4*Math.random())];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(3*Math.random())];
}

function getResults(question, computersChoice) {
  if (computersChoice == question.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  };
}

console.log(getResults({
  category: "Daniel",
  question: "What is my name?",
  choices: ["Daniel", "Josh", "Cole"],
  answer: "Daniel"
}, "Josh"))
