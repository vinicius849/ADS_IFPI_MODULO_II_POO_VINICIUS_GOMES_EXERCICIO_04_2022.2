/* 3. Considere a classe Radio e as instruções que fazem seu uso abaixo:
class Radio {
volume : number;
constructor(volume : number) {
this.volume = volume;
}
}
let r : Radio = new Radio();
r.volume = 10;
Justifique o erro de compilação e proponha uma solução. */

class Radio {
    volume : number;
    constructor (volume : number) {
        this.volume = volume;
    }
}
    let r : Radio = new Radio(10);
    r.volume = 10;

/* Justifiquei meu erro propondo o this.volume que instancia meu atributo
volume de forma correta e, por último, meu constructor é especificado por 
um new Node chamado new Radio(10); onde 10 é um number. */