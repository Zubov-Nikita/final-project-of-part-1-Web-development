let li = document.getElementsByTagName('li');
let h = document.getElementsByTagName('h2');
let click = 0;
let score = 0;
let radio = document.getElementsByName('radio');
let input = '<input name="radio" type="radio">';
let quizz = document.getElementsByClassName('quizz');
let innerScore = document.getElementById('score');
    document.getElementById('go').addEventListener('click', questionPush);


let arr = [
["", "", "", "", "", 0],
["Первый покемон у Эш Кетчумa?", "Charmander", "Butterfree", "Pikachu", "Bulbasaur", 2],
["Имя и фамилия Марио?", "Марио Марио", "Марио", "Луиджи Марио", "Король Боузер Купа", 0],
["Кто такой король лич?", " Кил'джеден", "Синдрагоса", "Мурадин Бронзобород ", "Артас Менетил", 3],

];

function questionPush() {
test();
innerTest();
h[0].innerHTML = arr[click][0];
li[0].innerHTML = input + arr[click][1];
li[1].innerHTML = input + arr[click][2];
li[2].innerHTML = input + arr[click][3];
li[3].innerHTML = input + arr[click][4];
}
function innerTest() {
  if (click < arr.length - 1) {
    click++;
  } else {
    quizz[0].classList.add('hidden');
    innerScore.innerHTML = "Ваш результат: " + score + " из " + arr.length
    innerScore.classList.remove('hidden');
  }
}

function test() {
  if (radio[arr[click][5]].checked) {
    score++;
  }
}