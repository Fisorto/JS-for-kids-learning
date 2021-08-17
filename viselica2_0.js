
function randomWord() {
    const words = ["программа",
                    "амогус",
                    "макака",
                    "прекрасный",
                    "оладушек",
                    "капитель",
                    "балюстрада",
                    "подставка",
                    "горшок",
                    "рибофлафин",
                    "тетраэдр",
                    "ингибитор"];
    let a = Math.floor(Math.random()*words.length)
    return words[a];
};
let word = randomWord();
//Выбор рандомного слова

function podcherk(word) {
    let array=[];
    for (let i = 0; i < word.length; i++) {
        array[i] = "_";
    }
    return array;
};
let zagadka = podcherk(word);
//Кодировка слова

let letters = word.length;
let popitka = 10;
let trueLetters = [];
let falseLetters = [];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, 500, 500);
function base() {
    ctx.beginPath();
    ctx.moveTo(50, 450);
    ctx.lineTo(450, 450);
    ctx.stroke();
};
//base();

function vertical() {
    ctx.beginPath();
    ctx.moveTo(150, 450);
    ctx.lineTo(150, 100);
    ctx.stroke();  
};
//vertical();

function gorizontal() {
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();
};
//gorizontal();

function string() {
    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.lineTo(300, 150);
    ctx.stroke();   
};
//string();

function torso (){
    ctx.beginPath();
    ctx.moveTo(300, 190);
    ctx.lineTo(300, 300);
    ctx.stroke();
};
//torso();

function leftArm() {
    ctx.beginPath();
    ctx.moveTo(300, 230);
    ctx.lineTo(250, 210);
    ctx.stroke();  
};
//leftArm();

function rightArm() {
    ctx.beginPath();
    ctx.moveTo(300, 230);
    ctx.lineTo(350, 210);
    ctx.stroke();   
};
//rightArm()
 
function leftLeg() {
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(280, 350);
    ctx.stroke();
};
//leftLeg();

function rightLeg() {
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(320, 350);
    ctx.stroke();
};
//rightLeg();

function head() {
    ctx.beginPath();
    ctx.arc(300, 170, 20, 0, Math.PI * 2, true)
    ctx.stroke();   
}
//head();

//Функции для рисования

document.querySelector('button').onclick = myClick;
function myClick() {
    let vvod = document.getElementById('vvod').value;
    let litera = vvod.toLowerCase();

    if(litera.length !== 1 && popitka > 0 && letters > 0) {
        document.getElementById('texti').innerHTML = "Введите одну букву";
        //Проверка на количество символов     
    }else if (litera.length === 1 && popitka > 0 && letters > 0) {
        let flag = true;
        let secondFlag = true;
        for (let i = 0; i < word.length; i++) {
            if (zagadka[i] === litera) {
                document.getElementById('texti').innerHTML = "Такая буква уже есть";
                flag = false;
                //Проверка на повторения правильных букв
            } else if (word[i] === litera){
                document.getElementById('texti').innerHTML = "Правильная буква";
                letters --;
                    if(secondFlag === true) {
                        trueLetters.push(litera);
                        document.getElementById('true').innerHTML ="Правильные буквы: " + trueLetters;
                        secondFlag = false;
                    }    
                zagadka[i] = litera;
                flag = false;
                //Подстававление правильной буквы в слово
            }

        } if (flag !== false) {
            document.getElementById('texti').innerHTML = "Такой буквы нет";
            popitka--;
            falseLetters.push(litera);
            document.getElementById('false').innerHTML ="Неправильные буквы: " + falseLetters;
            //Уменьшение количства попыток при вводе неправильной буквы
        }
    }
    
    if(popitka === 0) {
        document.getElementById('texti').innerHTML = "Вы проиграли!";
    }
    if(letters === 0) {
        document.getElementById('texti').innerHTML = "Вы победили!";
    }
    //Две проверки на конец игры

    document.getElementById('try').innerHTML ="Количесвто попыток: " + popitka;
    document.getElementById('igra').innerHTML = zagadka;
    document.getElementById('vvod').value = "";
    //Игровое поле

   //Все что дальше рисование висельника:
    if(popitka === 9) {
        base()
    }
    if(popitka === 8) {
        vertical()
    }
    if(popitka === 7) {
        gorizontal();
    }
    if(popitka === 6) {
        string();
    }
    if(popitka === 5) {
        head();
    }
    if(popitka === 4) {
        torso();
    }
    if(popitka === 3) {
        leftArm();
    }
    if(popitka === 2) {
        rightArm()
    }
    if(popitka === 1) {
        leftLeg();
    }
    if(popitka === 0) {
        rightLeg();
    }
};

myClick();

    