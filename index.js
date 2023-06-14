//getelementsbyid is a function or a methof since it is attached and count-el is the argument passed into it
//innertext alternative mdn
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let answerEl = document.getElementById("answer-el");
let count = 0;
let answer = count + dashSeperator;

function increment() {
  console.log("clicked");
  count++;
  countEl.textContent = count;
}

function save() {
  let dashSeperator = count + " - ";
  saveEl.textContent += dashSeperator;
  console.log(count);
  let stopCount = 0;
  countEl.textContent = stopCount;
  count = 0;
}
function compile() {
  answerEl.textContent = answer;
}

let welcomeEl = document.getElementById("welcome-el");
let name1 = " TO SON STAFF COUNTER ";
let greeting = " WELCOME";
welcomeEl.innerText = greeting + name1;
