var questions = [
  {
    title: "1. What is HTML",
    option: [
      "Programming Language",
      "Scripting Language",
      "Markup Language",
      "None of the above",
    ],
    correctAnswer: "Markup Language",
  },
  {
    title: "2. What is CSS",
    option: [
      "Styling Language",
      "Gora Language",
      "Kala Language",
      "None of the above",
    ],
    correctAnswer: "Styling Language",
  },
  {
    title: "3. What is JS",
    option: [
      "Programming Language",
      "Scripting Language",
      "Markup Language",
      "None of the above",
    ],
    correctAnswer: "Programming Language",
  },
  {
    title: "4. What is React",
    option: [
      "Programming Language",
      "Scripting Language",
      "Markup Language",
      "None of the above",
    ],
    correctAnswer: "Programming Language",
  },
];
var containerElement = 0
function startQuiz(event) {
  var startElement = event.target;
  startElement.className = "hide";
  var quiz1Element = document.getElementById("question-container");
  quiz1Element.className = "";
  
  var q1Element = document.getElementById("title");
  q1Element.innerHTML = questions[containerElement].title;
  var optionElement = document.getElementById('optionso')
  optionElement.innerHTML = ''
var option = questions[containerElement].option
for (var i = 0; i < option.length; i++) {
  var inputElement = document.createElement('input')
  inputElement.type = 'radio'
  inputElement.value = option[i]
  optionElement.append(inputElement)
  optionElement.append(option[i])

}

  
}



function nextBtn() {
    if(containerElement < questions.length -1 ){

 containerElement++
    var q1Element = document.getElementById("title");
    console.log('containerElement',containerElement);
    console.log('q1Element',q1Element);
    q1Element.innerHTML = questions[containerElement].title;
}
}

function restart() {

  var resultElement = document.getElementById('result')
  resultElement.className = 'hide'

  var questionContainer = document.getElementById('question-container')
  questionContainer.className = ''

var containerElement = 0
var q1Element = document.getElementById("title");
q1Element.innerHTML = questions[containerElement].title;
}
