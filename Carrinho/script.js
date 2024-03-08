function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome) ;
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "block"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectCamisas = document.getElementById("selectCamisas");
    var selectPersonalizacao = document.getElementById("selectPersonalizacao");
    var selectAcessorios = document.getElementById("selectAcessorios");
    var selectSouvenir = document.getElementById("selectSouvenir");
    var selectSocios = document.getElementById("selectSocios");
    var selectResultados = document.getElementById("selectResultado")

    var total = 0;
    var camisas = 0;
    var personalizacao = 0;
    var acessorios = 0;
    var souvenir = 0;
    var socios = 0;

    switch (selectCamisas.value) {
        case Camisa-Home:
            total += 250,00;
            camisa += 250,00;
        break;
        case Camisa-Away:
            total += 250,00;
            camisa += 250,00;
        break;
        case Camisa-GreenHell:
                total += R$300,00;
                camisa += R$300,00;
        break;
        case Camisa-Brasil:
            total += R$199,00;
            camisa += R$199,00;
        break;
        case Camisa-Goleiro:
            total += R$199,00;
            camisa += R$199,00;
        break;
    }
    switch (selectPersonalizacao.value) {
        case Nome:
            total += 8,00;
            salgado += 8,00;
        break;
        case Salgados-Assados:
            total += 13,00;
            salgado += 13,00;
        break;
        case Sanduíches-Naturais:
                total += 15,00;
                salgado += 15,00;
        break;
    }
    switch (selectBebidas.value) {
        case Cafés:
            total += 10,00;
            bebida += 10,00;
        break;
        case Sucos:
            total += 15,00;
            selectBebidas += 15,00;
        break;
        case Bebidas-Geladas:
                total += 7,00;
                bebida += 7,00;
        break;
    

    }
    document.getElementById("pedido-pronto").style.display = "block";
    document.getElementById("doces-pronto").textContent = selectDoces.value + "R$" + doce.toFixed(2);
    document.getElementById("salgados-pronto").textContent = selectDoces.value + "R$" + salgado.toFixed(2);
    document.getElementById("bebidas-pronto").textContent = selectDoces.value + "R$" + bebida.toFixed(2);
    resultadoSpan.textContent = "R$" + total.toFixed(2);

}

func