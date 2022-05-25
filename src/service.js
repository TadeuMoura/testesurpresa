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
    let msg =true;
    if (a=='amarelo'||a=='amarela'||a=='vermelho'||a=='vermelha'||a=='azul'){msg=true;}
    else{msg=false}

    return msg;
}

export function cinema (inteiras,meias,dia){
    let valor=0;

    if(dia==1){valor= (inteiras+meias)*12;}

    else{valor=inteiras*24+meias*12}

    return valor;
}
