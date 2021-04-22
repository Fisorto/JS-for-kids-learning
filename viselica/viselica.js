
var chWord = function () {
    var words = ["программа","kek"];
    
    return words[Math.floor(Math.random() * words.length)];
};


var word = chWord();

var lines = function(word){
    var answ = [];
    for (var i = 0; i < word.length;i++){
        answ[i]= "_";
    }
    return answ;
};
var onlyLines = lines (word);

$("#pole_igri").append("<p><h1>" + onlyLines + "</h1></p>");

var remainLetters = word.lentgth;
$("input").keyup(function () {
    var value = $(this).val();
    $("p").text(value);
}).keyup();
/*var p = "p";
var her = console.log($("#bukva").val());*/






/*alert("Добро пожаловать в игру висилица, отгадай слово:")
var words = ["программа","макака","прекрасный","оладушек","капитель","балюстрада","подставка","горшок","рибофлафин","тетраэдр","ингибитор"];
var word = words[Math.floor(Math.random()*words.length)];
    
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
        }



        var remainingLetters = word.length;
        var popitka = 10;
        while (remainingLetters > 0 && popitka > 0) {
            alert (answerArray.join(""));
            var guess = prompt(" Угадайте букву, или нажмите Отмена для выхода из игры." + "Осталось попыток : " + popitka);
            var guess2 = guess.toLowerCase();
            
        if (guess2 === null) {
            break;
        } else if (guess2.length !== 1){
            alert("Пожалуйста, введите одиночную букву.");
        } else { 
            var flag = true;
            for (var j = 0; j < word.length; j++) {
                if (answerArray[j]===guess2){
                    alert("Такая буква уже есть");
                    flag = false;
                    
                }else if(word[j] === guess2) {
                    answerArray[j] = guess2;
                    remainingLetters--;
                    flag = false;
                } 
            }
            if(flag !== false){
                popitka--;
            }
        }
        
        }
        
        alert(answerArray.join(""));
        if (popitka > 0) {
        alert("Отлично! Было загалано слово : " + word);
        } else {
        alert("Неправильно! загаданное слово было : " + word);
        }*/

