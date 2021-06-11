const stage = document.querySelector(".container");
let seconds = 40;
let lastNumber = 0;
let currentRow = [];

const generatePattern = (lenght) => {
  const pattern = [1, 2, 3, 4, 5];
  for (let i = 0; i < 5; i++) {
    let randomPosition = Math.floor(Math.random() * 5);
    const aux = pattern[i];
    pattern[i] = pattern[randomPosition];
    pattern[randomPosition] = aux;
  }
  return pattern;
};

const printMassage = (content) => {
  const message = document.createElement("div");
  message.classList.add("message");
  message.textContent = content;
  stage.appendChild(message);
};

const checkPattern = () => {
  let correctCounter = 0;
  for (let i = 0; i < 5; i++) {
    const item = document.getElementById(i);
    if (pattern[i] === Number(item.textContent)) {
      item.classList.add("correct");
      correctCounter++;
    }
    item.classList.add("blocked");
    item.removeAttribute("id");
  }
  if (correctCounter === 5) {
    printMassage("...You save the day");
    clearInterval(timer);
  } else {
    createRow();
  }
};

const changeSymbol = (item) => {
  currentNumber = Number(item.textContent);
  item.textContent = currentNumber < 5 ? currentNumber + 1 : 1;
};

const createRow = () => {
  const newLine = document.createElement("div");
  newLine.classList.add("line");
  stage.append(newLine);
  for (let col = 0; col < 5; col++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.id = col;
    item.textContent = "\xa0";
    item.addEventListener("click", (e) => {
      changeSymbol(e.target);
    });
    newLine.appendChild(item);
  }
};

check = document.querySelector(".check");
check.addEventListener("click", checkPattern);
const pattern = generatePattern(2);
createRow();

const timer = setInterval(() => {
  const timerLabel = document.querySelector(".timer");
  seconds--;
  timerLabel.textContent = `00:${seconds.toString().padStart(2, "0")}`;
  if (!seconds) {
    clearInterval(timer);
    printMassage("...It's over");
    check.style.pointerEvents = "none";
  }
}, 1000);

//Titulo y timer
//logica de switcheo, no se pueden poner numeros repetidos
//agregar boton send en cada linea al completar los 5 numeros

const COLORS = {
  "rgb(255, 255, 0)": 1,
  "rgb(0, 0, 255)": 2,
  "rgb(255, 0, 0)": 3,
  "rgb(0, 128, 0)": 4,
};
function resolver() {
  setTimeout(function () {
    acumulador.forEach((elem) =>
      document.querySelector(`#form${COLORS[elem]}`).click()
    );
    resolver();
  }, 100 * acumulador.length);
}
resolver();

acumulador.forEach((elem) => {
  let id = 0;
  switch (elem) {
    case "rgb(255, 255, 0)":
      id = 1;
      break;
    case "rgb(0, 0, 255)":
      id = 2;
      break;
    case "rgb(255, 0, 0)":
      id = 3;
      break;
    case "rgb(0, 128, 0)":
      id = 4;
      break;
    default:
      console.log("sos un cara de verga");
      break;
  }
  document.querySelector(`#form${id}`).click();
});
