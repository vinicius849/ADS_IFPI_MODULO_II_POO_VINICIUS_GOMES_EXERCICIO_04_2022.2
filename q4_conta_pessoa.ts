/* Considerando o uso da classe Conta apresentada em aula e seu uso abaixo:
let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);

c1.transferir(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
a. Qual o resultado dos dois "prints"? Justifique sua resposta.
b. O que acontece com o objeto para o qual a referência c1 apontava? */

class Conta {
    conta : string;
    sacar : number;
    transferir : number;

    constructor (conta : string, sacar : number, transferir : number) {
        this.conta = conta;
        this.sacar = sacar;
        this.transferir = transferir;
    }
}
    let c1 : Conta = new Conta("1", 100, 50);
    let c2 : Conta = new Conta("2", 100, 50);
    let c3 : Conta = new Conta("3", 100, 50);

    c1 = c2;
    c3 = c1;
    c3 = c2;

function SacarDinheiro() {
    if (c3 % 10 == 10) {
        console.log("Condição para minha conta ter saldo 10.");
    }else{
        return null;
    }

    let c1 : Conta = new Conta("1", 10, 50);
    c1.sacar = 10;
}

function TransferirDinheiro() {
    if (c1 % 2 == 50) {
        console.log("Condição if para o resto uma transferência de $50,00.");
    }else{
        return null;
    }

    let c3 : Conta = new Conta("3", 50, 10);
    c1.transferir = 50;
}

    let c1 : Conta = new Conta("1", 100, 50);
    let c2 : Conta = new Conta("2", 100, 50);
    c2 = c1;

/* Referência de Objetos
O objeto que era referenciado por c2 é perdido;
c1 e c2 apontarão para o mesmo endereço em memória, ou seja,
apontarão para o memso objeto;
Quaisquer alteração em c1 e/ou c2 resultará na alteração de ambos. */

    let c1 : Conta = new Conta("1", 100, 50);
    let c2 : Conta = new Conta("2", 100, 50);
    let c3: Conta = new Conta("3", 100, 50);

    console.log(`O meu novo saldo será ${c1.consultarSaldo}.`);
    console.log(`O meu novo saldo em conta 2 será ${c2.consultarSaldo}.`);
    console.log(`O meu novo saldo em conat 3 será ${c3.consultarSaldo}.`);

/* a. Interpretativo a questão dos prints pois, inicialmente, em c3 tenho que criar
um constructor para ele e atribuir valores como por exemplo elucidados acima em conta,
sacar e tranferir. /*

/* b. Fiz uma atribuição: 
c1 = c2
c3 = c1
c3 = c2
Com isso, eu, programador consigo montar funções para como se fosse realmente abstrair 
uma situação computacional d euma instituição bancária: que possui tranferência de R$50,00
e saldo de R$10,00 de acordo com a comparação dos resultados acima. */



