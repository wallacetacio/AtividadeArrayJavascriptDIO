function recebeArray() {
    let arrRecebido = [];

    let numeromax = Number(prompt('Digite a quantidade total de números que quer dar entrada:'));

    if(isNaN(numeromax)){
        alert('Digite apenas numeros.');
        recebeArray();
    }else{
    
        for(let ix = 0; ix < numeromax; ix++){
        let numero;
        numero = Number(prompt(`Digite o número ${ix}:`));
        arrRecebido.push(numero);
    }
}


    for (let i = 0; i < arrRecebido.length; i++) {
        if (arrRecebido[i] % 2 === 0) {
            arrRecebido[i] = 0;
            alert("deu");

        }
        }
    alert(arrRecebido);
    
}

recebeArray();