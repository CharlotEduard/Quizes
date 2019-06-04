//Grava nas variaveis os valores dos acertos das questoes, caso não tenha respondido ele salva o valor como 0;
var T1 = parseFloat(localStorage.getItem("T1") || "0");
var T2 = parseFloat(localStorage.getItem("T2") || "0");
var T3 = parseFloat(localStorage.getItem("T3") || "0");
//Mostra nos elementos a porcentagem de acertos
document.getElementById("T1").innerHTML = T1 + "%";
document.getElementById("T2").innerHTML = T2 + "%";
document.getElementById("T3").innerHTML = T3 + "%";


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
                    { label: "T3", y: T3 }
                ]
            }
        ]
    };

    $("#chartContainer").CanvasJSChart(options);
}




