export function somar (a, b){
    return a + b;
}

export function dobro(n){
    return n * 2;
}

export function media (n1, n2, n3){
    return (n1+n2+n3)/3;
}

export function tabuada (numero, multiplicacao){

        let resultado=numero;
        for(let contador = 1; contador <= multiplicacao; contador++){
            resultado = numero*contador;
    }    
    return resultado;
}


export function temperatura (x){
    let msg = '';
    if (x>=30 && x<38){
        msg='temperatura normal'
    }
    else{
        msg='febre'
    }
    return msg;
}