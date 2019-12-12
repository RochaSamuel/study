//VARIÁVEIS GLOBAIS
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

//CHAMA TODAS AS FUNÇÕES QUANDO O DOCUMENTO ESTIVER PRONTO
$(function () {
    atualizaPalavras();
    incializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
    inicializaMarcadores();
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
});


//Nº PALAVRAS DA FRASE
function atualizaPalavras() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    $("#tamanho-frase").text(numPalavras);
};

//CONTADORES
function incializaContadores() {
    campo.on("input", function () {
        var palavras = campo.val().split(/\S+/).length - 1;
        $("#contador-palavras").text(palavras);

        var caracteres = campo.val().length;
        $("#contador-caracteres").text(caracteres);
    })
};


//CRONOMETRO
function inicializaCronometro() {
    var tempo = $("#tempo-digitacao").text();
    campo.one("focus", function () {
        $("#botao-reiniciar").attr("disabled", true);
        var id = setInterval(function () {
            tempo--;
            $("#tempo-digitacao").text(tempo);
            if (tempo < 1) {
                campo.attr("disabled", true);
                clearInterval(id);
                finalizaJogo();
                $("#botao-reiniciar").attr("disabled", false);
            }
        }, 1000);
    })
};

//REINICIAR O GAME
function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
};

//MARCADORES DE BORDA
function inicializaMarcadores() {
    var frase = $(".frase").text();

    campo.on("input", function () {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

//FINALIZA O JOGO E ALTERA O PLACAR
function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}