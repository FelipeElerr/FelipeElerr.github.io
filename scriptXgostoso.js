var clock = document.getElementById('real-clock');
    

setInterval(function () {
    clock.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
}, 1000);

function calculuarPedido() {
    let valorCombo = 0;
    let valorAdicionais = 0;
    let valorEntrega = 0;
    let valorPedido = 0;
    let nome = document.getElementById("idNome");
    let telefone = document.getElementById("idTelefone");
    let arrayAdicionais = document.getElementsByName("adicionais");
    let arrayEntrega = document.getElementsByName("entrega");
    valorCombo = parseFloat(document.getElementById("idCombo").value);

    for (let i = 0; i < arrayAdicionais.length; i++) {
        if (arrayAdicionais[i].checked) {
            valorAdicionais += parseFloat(arrayAdicionais[i].value);
        }
    }

    for (let i = 0; i < arrayEntrega.length; i++) {
        if (arrayEntrega[i].checked) {
            valorEntrega = parseFloat(arrayEntrega[i].value);
        }
    }

    valorPedido = valorCombo + valorAdicionais + valorEntrega;
    document.getElementById("idTotalPagar").value = "R$" + valorPedido.toFixed(2);
    document.getElementById("descrPedido").value = "Nome do cliente: " + nome.value + "     Telefone: " + telefone.value +
        "   Valor do Combo: " + " R$" + valorCombo + "   Valor dos Adicionais: " + " R$" + valorAdicionais + "    Valor da entrega:" + " R$" + valorEntrega + "     Valor total do pedido:" + " R$" + valorPedido;
}
function novoPedido(){
    document.getElementById("idFormulario").reset();
}
function recibo(){
    window.print();
}