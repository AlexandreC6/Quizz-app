const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector('.quizz-form');
form.addEventListener("submit",handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const results = [];

  const inputsChecked = document.querySelectorAll("input[type='radio']:checked");

  inputsChecked.forEach((inputChecked, index) =>{

    if (inputChecked.value === responses[index]) {
      results.push(true)
    } else {
      results.push(false)
    }
  });
  showResult(results);
  showColor(results);
}

const titleResult = document.querySelector('.results h2');
const markResult = document.querySelector('.mark');
const helpResult = document.querySelector('.help');

function showResult(results) {

  const errorNumber = results.filter(el => el === false).length;
  console.log(errorNumber);

  switch (errorNumber) {
    case 0:
      titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
      helpResult.textContent = "Quelle culture ...";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>5 / 5</span>";
      markResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>4 / 5</span>";
      markResult.style.display = "block";
      break;
    case 2:
      titleResult.textContent = `✨ Encore un effort ... 👀`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>3 / 5</span>";
      markResult.style.display = "block";
      break;
    case 3:
      titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>2 / 5</span>";
      markResult.style.display = "block";
      break;
    case 4:
      titleResult.textContent = `😭 Peut mieux faire ! 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>1 / 5</span>";
      markResult.style.display = "block";
      break;
    case 5:
      titleResult.textContent = `👎 Peut mieux faire ! 👎`;
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span>0 / 5</span>";
      break;

    // Si n'est pas dans les case
    default:
      titleResult.textContent = "Wops, cas innatendu.";
  }
}

const questions = document.querySelectorAll('.question-block')

function showColor(results) {
  results.forEach((_, index) => {
    if (results[index]) {
      questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
    } else {
      questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)"
    }
  })
}

const radioInputs = document.querySelectorAll('input[type="radio"]');

radioInputs.forEach(radioInput => radioInput.addEventListener('input', resetColor));

function resetColor(event){

  const index = event.target.getAttribute('name').slice(1) -1;
  // block de question
  console.log(questions[index]);
  const parentQuestionBlock = questions[index];

  parentQuestionBlock.style.backgroundColor = '#f1f1f1';
  parentQuestionBlock.style.backgroundImage = 'none';
}
