function calcula() {
    document.getElementById("nomeSubmetido").innerHTML = "Nome: " + nome.value;

    document.getElementById("idadeSubmetida").innerHTML = "Idade: " + idade.value + " anos";

    var dataSeparada = dataNascimento.value.split("-");

    var mes = converteMes(dataSeparada[1]);

    document.getElementById("dataNascimentoSubmetida").innerHTML = "Data Nascimento: " +
        dataSeparada[2] + " de " + mes + " de " + dataSeparada[0];

    document.getElementById("pesoSubmetido").innerHTML = "Peso: " + peso.value + " Kg";

    document.getElementById("alturaSubmetida").innerHTML = "Altura: " + altura.value + " m";

    if (idade.value < 16) {
        alert("Usuario tem menos de 16 anos, nao pode ser calculado o IMC!")
    } else {
        var imc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));

        var situacao = verificaSituacaoImc(imc);

        document.getElementById("imc").innerHTML = "IMC: " + imc + " - " + situacao;
    }
}

function converteMes(mes) {
    if (mes == "01") {
        return "Janeiro";
    } else if (mes == "02") {
        return "Fevereiro";
    } else if (mes == "03") {
        return "Março";
    } else if (mes == "04") {
        return "Abril";
    } else if (mes == "05") {
        return "Maio";
    } else if (mes == "06") {
        return "Junho";
    } else if (mes == "07") {
        return "Julho";
    } else if (mes == "08") {
        return "Agosto";
    } else if (mes == "09") {
        return "Setembro";
    } else if (mes == "10") {
        return "Outubro";
    } else if (mes == "11") {
        return "Novembro";
    } else if (mes == "12") {
        return "Dezembro";
    } else {
        return "Mes Inválido";
    }
}

function verificaSituacaoImc(imc) {
    if (imc < 17) {
        return "Muito abaixo do peso";
    } else if (imc > 17 && imc < 18.49) {
        return "Abaixo do peso";
    } else if (imc > 18.5 && imc < 24.99) {
        return "Peso normal";
    } else if (imc > 25 && imc < 29.99) {
        return "Acima do peso";
    } else if (imc > 30 && imc < 34.99) {
        return "Obesidade I";
    } else if (imc > 35 && imc < 39.99) {
        return "Obesidade II (severa)";
    } else if (imc > 40) {
        return "Obesidade III (morbida)";
    } else {
        return "Não foi possivel fazer o calculo!";
    }
}
