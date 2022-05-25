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

export function cor (a){
    a=a.toLowerCase();
    return (a=='amarelo'||a=='amarela'||a=='vermelho'||a=='vermelha'||a=='azul')
}

export function cinema (inteiras,meias,dia,nacional){
    if(nacional.toLowerCase()=='sim')
    return (inteiras+meias)*5;

    else if(dia.toLowerCase()=='sim')
    return (inteiras+meias)*14.25;

    else return (inteiras*28,50)+(meias*14.25);
}

export function letra (texto, caractere){
    let qtd = 0;
    for (let letra of texto){
        if(letra == caractere)
        qtd++;
    }
    return qtd;
}


