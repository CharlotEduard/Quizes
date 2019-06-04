//variavel do quiz
var quiz = document.getElementById("quiz");
//variavel do enunciado
var ques = document.getElementById("question");
//variavel da imagem da questão
var imgQuestion = document.getElementById("imgQuestion");
// variaveis das alternativas
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var opt5 = document.getElementById("option5");
//Variavel das imagens
var imgAlt1 = document.getElementById("imgAlt1");
var imgAlt2 = document.getElementById("imgAlt2");
var imgAlt3 = document.getElementById("imgAlt3");
var imgAlt4 = document.getElementById("imgAlt4");
var imgAlt5 = document.getElementById("imgAlt5");
// variavel resultado
var res = document.getElementById("result");
//botoes pra sair e proxima pergunta
var nextbutton = document.getElementById("next");
var q = document.getElementById('quit');
// variavel com a quantidade de perguntas
var tques = questions.length;
// varaivel com o valor de acertos
var score = 0;
// variavel contadora com a pegunta atual
var quesindex = 0;

function quit() {
    quiz.style.display = 'none';
    result.style.display = '';
    q.style.display = "none";
    var f = score / tques;
    result.textContent = "Sua pontuação foi de: " + (f * 100).toFixed(2) + "%";
}

function give_ques(quesindex) {
    //chama os textos da questão
    ques.textContent = quesindex + 1 + ". " + questions[quesindex][0];
    opt1.textContent = questions[quesindex][1];
    opt2.textContent = questions[quesindex][2];
    opt3.textContent = questions[quesindex][3];
    opt4.textContent = questions[quesindex][4];
    opt5.textContent = questions[quesindex][5];
    
    //chama as imagens da questão
    imgQuestion.src = questions[quesindex][6];
    imgAlt1.src = questions[quesindex][7];
    imgAlt2.src = questions[quesindex][8];
    imgAlt3.src = questions[quesindex][9];
    imgAlt4.src = questions[quesindex][10];
    imgAlt5.src = questions[quesindex][11];

    return;
}
give_ques(0);

function nextques() {
    var selected_ans = document.querySelector('input[type=radio]:checked');
    if (!selected_ans) {
        alert("Marque uma Alternativa");
        return;
    }
    if (selected_ans.value == questions[quesindex][12]) {
        score = score + 1;
    }
    selected_ans.checked = false;

    quesindex++;
    if (quesindex == tques - 1)
        nextbutton.textContent = "Finish";
    var f = score / tques;

    if (quesindex == tques) {
        /*q.style.display = 'none';
        quiz.style.display = 'none';
        result.style.display = '';
        result.textContent = "Sua pontuação foi de: " + (f * 100).toFixed(2) + "%";*/
        quit();
        return;
    }
    give_ques(quesindex);
}