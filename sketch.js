let questionIndex = 0;
let questions = [
  {
    question: "Onde as pessoas costumam ter contato mais direto com a natureza?",
    options: ["Na cidade", "No campo", "Em ambos"],
    correct: 1
  },
  {
    question: "Qual desses itens é mais comum no campo?",
    options: ["Shopping centers", "Fazendas", "Arranha-céus"],
    correct: 1
  },
  {
    question: "Onde você provavelmente encontraria mais prédios altos?",
    options: ["No campo", "Na cidade", "No litoral"],
    correct: 1
  },
  {
    question: "Em qual lugar é mais provável que as pessoas dependam mais de transporte público para se locomover?",
    options: ["No campo", "Na cidade", "Nenhum dos dois"],
    correct: 1
  },
  {
    question: "Onde o ritmo de vida é geralmente mais acelerado?",
    options: ["No campo", "Na cidade", "Em áreas turísticas"],
    correct: 1
  },
  {
    question: "Onde as pessoas têm mais acesso a grandes opções de entretenimento, como cinemas e teatros?",
    options: ["No campo", "Na cidade", "Nenhum dos dois"],
    correct: 1
  },
  {
    question: "Qual desses elementos é mais comum no campo?",
    options: ["Trânsito congestionado", "Ruídos de carros e sirenes", "Vastas áreas verdes"],
    correct: 2
  }
];

let selectedOption = null;
let score = 0;

function setup() {
  createCanvas(600, 400);
  textSize(24);
  textAlign(CENTER, CENTER);
  noLoop();
}

function draw() {
  background(220);
  displayQuestion();
}

function displayQuestion() {
  let question = questions[questionIndex];
  text(question.question, width / 2, 50);
  
  // Display options
  for (let i = 0; i < question.options.length; i++) {
    let y = 150 + i * 50;
    if (selectedOption === i) {
      fill(200, 200, 255); // Highlight selected option
    } else {
      fill(255);
    }
    rect(150, y, 300, 40);
    fill(0);
    text(question.options[i], width / 2, y + 20);
  }

  // Next button
  fill(255, 100, 100);
  rect(250, 300, 100, 40);
  fill(0);
  text("Próxima", width / 2, 320);
}

function mousePressed() {
  // Check if an option is selected
  for (let i = 0; i < questions[questionIndex].options.length; i++) {
    let y = 150 + i * 50;
    if (mouseX > 150 && mouseX < 450 && mouseY > y && mouseY < y + 40) {
      selectedOption = i;
    }
  }

  // Check if the "Next" button was clicked
  if (mouseX > 250 && mouseX < 350 && mouseY > 300 && mouseY < 340) {
    if (selectedOption !== null) {
      // Check if the selected option is correct
      if (selectedOption === questions[questionIndex].correct) {
        score++;
      }

      // Move to the next question
      questionIndex++;
      selectedOption = null;

      // Check if the quiz is over
      if (questionIndex >= questions.length) {
        displayResults();
      } else {
        redraw();
      }
    }
  }
}

function displayResults() {
  background(220);
  textSize(32);
  text(`Sua pontuação: ${score} de ${questions.length}`, width / 2, height / 2);
  noLoop();
}