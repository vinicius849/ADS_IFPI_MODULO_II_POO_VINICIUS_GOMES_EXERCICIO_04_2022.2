/* 7. Uma classe Equipamento com:
a. um atributo ligado (tipo boolean)
b. dois métodos liga() e desliga(). O método liga torna o atributo ligado true e
o método desliga torna o atributo ligado false.
c. Crie um método chamado inverte(), que muda o status atual (se ligado,
desliga...se desligado, liga)
d. Crie um método que estaLigado() que retorna o valor do atributo ligado
e. Altere o comportamento dos métodos liga para caso o equipamento já
esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.
f. Instancie uma classe Equipamento e teste todos os seus métodos. */

class Equipamento {
    ligado : boolean;
    desligado : boolean;
    constructor(ligado : boolean, desligado : boolean) {
        this.ligado = ligado;
        this.desligado = desligado;
    }
}

let equipamento : Equipamento = new Equipamento(this.ligado, this.desligado);

const array1 = ["one", "two", "three"];  // Tempo de permanecer ligado e/ou desligado meu equipamento.
console.log("array1: ", array1);

const reversed = array1.reverse();
console.log("reversed: ", reversed);  // ["three", "two", "one"]
console.log("Se ligado, deliga...se desliga, liga.");
    
function LigaDesliga() {
    if (this.ligado in class {Equipamento}) {
            return true;
    }else if (this.desligado in class {Equipamento}) {
            return false;
    }
}

function DesligaLiga() {
    if (!(this.ligado in class {Equipamaneto})) {
        return true;
    }else{
        return false;
    }
}