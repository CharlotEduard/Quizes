//Grava nas variaveis os valores dos acertos das questoes, caso não tenha respondido ele salva o valor como 0;
var T1 = parseFloat(localStorage.getItem("T1") || "0");
var T2 = parseFloat(localStorage.getItem("T2") || "0");
var T3 = parseFloat(localStorage.getItem("T3") || "0");
var T4 = parseFloat(localStorage.getItem("T4") || "0");
var T5 = parseFloat(localStorage.getItem("T5") || "0");
var T6 = parseFloat(localStorage.getItem("T6") || "0");
var T7 = parseFloat(localStorage.getItem("T7") || "0");
var T8 = parseFloat(localStorage.getItem("T8") || "0");
var T9 = parseFloat(localStorage.getItem("T9") || "0");
var T10 = parseFloat(localStorage.getItem("T10") || "0");
var T11 = parseFloat(localStorage.getItem("T11") || "0");
var T12 = parseFloat(localStorage.getItem("T12") || "0");
var T13 = parseFloat(localStorage.getItem("T13") || "0");
var T14 = parseFloat(localStorage.getItem("T14") || "0");
var T15 = parseFloat(localStorage.getItem("T15") || "0");
var T16 = parseFloat(localStorage.getItem("T16") || "0");
var T17 = parseFloat(localStorage.getItem("T17") || "0");
var T18 = parseFloat(localStorage.getItem("T18") || "0");
var T19 = parseFloat(localStorage.getItem("T19") || "0");
var T20 = parseFloat(localStorage.getItem("T20") || "0");
var T21 = parseFloat(localStorage.getItem("T21") || "0");
var T22 = parseFloat(localStorage.getItem("T22") || "0");
var T23 = parseFloat(localStorage.getItem("T23") || "0");
var T24 = parseFloat(localStorage.getItem("T24") || "0");
var T25 = parseFloat(localStorage.getItem("T25") || "0");
var T26 = parseFloat(localStorage.getItem("T26") || "0");
var T27 = parseFloat(localStorage.getItem("T27") || "0");
var T28 = parseFloat(localStorage.getItem("T28") || "0");
var T29 = parseFloat(localStorage.getItem("T29") || "0");
var T30 = parseFloat(localStorage.getItem("T30") || "0");
var T31 = parseFloat(localStorage.getItem("T31") || "0");
var T32 = parseFloat(localStorage.getItem("T32") || "0");
var T33 = parseFloat(localStorage.getItem("T33") || "0");
//Mostra nos elementos a porcentagem de acertos
document.getElementById("T1").innerHTML = T1 + "%";
document.getElementById("T2").innerHTML = T2 + "%";
document.getElementById("T3").innerHTML = T3 + "%";
document.getElementById("T4").innerHTML = T4 + "%";
document.getElementById("T5").innerHTML = T5 + "%";
document.getElementById("T6").innerHTML = T6 + "%";
document.getElementById("T7").innerHTML = T7 + "%";
document.getElementById("T8").innerHTML = T8 + "%";
document.getElementById("T9").innerHTML = T9 + "%";
document.getElementById("T10").innerHTML = T10 + "%";
document.getElementById("T11").innerHTML = T11 + "%";
document.getElementById("T12").innerHTML = T12 + "%";
document.getElementById("T13").innerHTML = T13 + "%";
document.getElementById("T14").innerHTML = T14 + "%";
document.getElementById("T15").innerHTML = T15 + "%";
document.getElementById("T16").innerHTML = T16 + "%";
document.getElementById("T17").innerHTML = T17 + "%";
document.getElementById("T18").innerHTML = T18 + "%";
document.getElementById("T19").innerHTML = T19 + "%";
document.getElementById("T20").innerHTML = T20 + "%";
document.getElementById("T21").innerHTML = T21 + "%";
document.getElementById("T22").innerHTML = T22 + "%";
document.getElementById("T23").innerHTML = T23 + "%";
document.getElementById("T24").innerHTML = T24 + "%";
document.getElementById("T25").innerHTML = T25 + "%";
document.getElementById("T26").innerHTML = T26 + "%";
document.getElementById("T27").innerHTML = T27 + "%";
document.getElementById("T28").innerHTML = T28 + "%";
document.getElementById("T29").innerHTML = T29 + "%";
document.getElementById("T30").innerHTML = T30 + "%";
document.getElementById("T31").innerHTML = T31 + "%";
document.getElementById("T32").innerHTML = T32 + "%";
document.getElementById("T33").innerHTML = T33 + "%";
//funcao pra gerar graficos
window.onload = function () {
    var options = {
        animationEnabled: true,
        title: {
            text: "Meu desempenho"
        },
        axisX: {
            title: "Areas da matematica"
        },
        data: [
            {
                // Adicionar as colunas dos temas de matematica
                type: "column",
                dataPoints: [
                    { label: "T1", y: T1 },
                    { label: "T2", y: T2 },
                    { label: "T3", y: T3 },
                    { label: "T4", y: T4 },
                    { label: "T5", y: T5 },
                    { label: "T6", y: T6 },
                    { label: "T7", y: T7 },
                    { label: "T8", y: T8 },
                    { label: "T9", y: T9 },
                    { label: "T10", y: T10 },
                    { label: "T11", y: T11 },
                    { label: "T12", y: T12 },
                    { label: "T13", y: T13 },
                    { label: "T14", y: T14 },
                    { label: "T15", y: T15 },
                    { label: "T16", y: T16 },
                    { label: "T17", y: T17 },
                    { label: "T18", y: T18 },
                    { label: "T19", y: T19 },
                    { label: "T20", y: T20 },
                    { label: "T21", y: T21 },
                    { label: "T22", y: T22 },
                    { label: "T23", y: T23 },
                    { label: "T24", y: T24 },
                    { label: "T25", y: T25 },
                    { label: "T26", y: T26 },
                    { label: "T27", y: T27 },
                    { label: "T28", y: T28 },
                    { label: "T29", y: T29 },
                    { label: "T30", y: T30 },
                    { label: "T31", y: T31 },
                    { label: "T32", y: T32 },
                    { label: "T33", y: T33 }
                ]
            }
        ]
    };

    $("#chartContainer").CanvasJSChart(options);
}




