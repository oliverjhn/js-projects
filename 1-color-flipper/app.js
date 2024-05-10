const hexlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getValue() {
  return hexlist[getRandomNumber(0, 15)];
}

const body = document.body;
const color_btn = document.getElementById("color-btn");
const color_text = document.getElementById("color-text");

color_btn.addEventListener("click", () => {
  changeColor();
});

function createRandomColor() {
  let getPair = () => {
    let first_value = getValue();
    let second_value = getValue();
    return `${first_value}${second_value}`;
  };
  return `${getPair()}${getPair()}${getPair()}`;

  // alert(getPair());

  // alert(first_value);
  // return first_value;
}

function changeColor() {
  let randomColor = `#${createRandomColor().toUpperCase()}`;
  body.style.background = randomColor;
  color_text.textContent = randomColor;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

changeColor();
