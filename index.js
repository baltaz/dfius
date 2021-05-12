const actualLine = 0;
const stage = document.querySelector(".container");

const generatePattern = () => {
  const pattern = [1, 2, 3, 4, 5];
  for (let i = 0; i < 5; i++) {
    let randomPosition = Math.floor(Math.random() * 5);
    const aux = pattern[i];
    pattern[i] = pattern[randomPosition];
    pattern[randomPosition] = aux;
  }
  return pattern;
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
    console.log("ganaste");
  } else {
    createRow();
  }
};

const changeSymbol = (e) => {
  const item = e.target;
  currentNumber = Number(item.textContent);
  item.textContent = currentNumber < 5 ? currentNumber + 1 : 1;
};

const createRow = () => {
  const newLine = document.createElement("div");
  newLine.classList.add("line");
  stage.appendChild(newLine);
  for (let col = 0; col < 5; col++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.id = col;
    item.textContent = "\xa0";
    item.addEventListener("click", (e) => {
      changeSymbol(e);
    });
    newLine.appendChild(item);
  }
};

check = document.querySelector(".check");
check.addEventListener("click", checkPattern);
const pattern = generatePattern();
createRow();

//Solo activar la linea actual
//Hacerlo para dimension dinamica
