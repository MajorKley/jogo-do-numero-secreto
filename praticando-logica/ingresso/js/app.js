
function comprar(){
let tipo = document.getElementById('tipo-ingresso').value;
let quantidade = document.getElementById('qtd').value;

if(tipo.value=='pista'){
    comprarPista(quantidade);
}else if (tipo.value =='superior'){
    comprarSuperior(quantidade);
}else{
    comprarInferior(quantidade);
}

}

function comprarPista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > quantidadePista){
        alert('Quantidade Pista Indisponível!');
    }else{
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra Realizada com Sucesso!');
    }
}

function comprarSuperior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > quantidadeSuperior){
        alert('Quantidade Superior Indisponível!');
    }else{
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra Realizada com Sucesso!');
    }
}

    function comprarInferior(quantidade){
        let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if(quantidade > quantidadeInferior){
            alert('Quantidade Inferior Indisponível!');
        }else{
            quantidadeInferior = quantidadeInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = quantidadeInferior;
            alert('Compra Realizada com Sucesso!');
        }
    }