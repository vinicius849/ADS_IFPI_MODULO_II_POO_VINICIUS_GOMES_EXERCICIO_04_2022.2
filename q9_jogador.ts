/* 9. Crie uma classe chamada Jogador e nela:
a. Crie 3 atributos inteiros representando força, nível e pontos atuais;
b. Crie um construtor no qual os 3 parâmetros são passados e inicialize os
respectivos atributos;
c. Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da
multiplicação de força pelo nível. Esse resultado é o dano de ataque do
jogador;
d. Crie um método chamado atacar em que é passado um outro jogador
(atacado) como parâmetro. Nele e é feita a subtração do dano (método
calcularAtaque) dos pontos do atacado;
e. Crie um método chamado estaVivo que retorna true caso o atributo pontos
do jogador seja maior que zero e falso caso contrário.
f. Altere o método atacar para usar o método está vivo e desconsiderar a
operação, ou seja, não atacar, caso o jogador passado por parâmetro não
esteja vivo.
g. Crie um método chamado toString() que retorna a representação textual do
produto concatenando todos os seus atributos.
h. Avalie em com testes dois jogadores instanciados e inicializados através do
construtor. Utilize o método de ataque de cada jogador e ao final, verifique
qual jogador tem mais pontos. */

class Jogador1 {
    forca : number;
    nivel : number;
    pontos_atuais : number;
    constructor(forca : number, nivel : number, pontos_atuais : number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
}
    let jogador1 : Jogador1 = new Jogador1(45, 75, 10);  // Pontuações para meu Jogador1.

    function CalcularAtaque() {
        return (this.forca * this.nivel);
    }
        console.log("Esse cálculo da força pelo nível do jogador irá gerar um dano ao jogador.");

class Jogador2 {
    forca : number;
    ataque : number;
    pontos_vitoria : number;  
    constructor(forca : number, ataque : number, pontos_vitoria : number) {
        this.forca = forca;
        this.ataque = ataque;
        this.pontos_vitoria = pontos_vitoria;
    }
}
    let jogador2 : Jogador2 = new Jogador2(90, 150, 20);  // Pontuações para meu Jogador2.


function EstaVivo() {
        console.log("Calcula-se um valor maior que zero para número de pontos do meu jogador caso esteja jogando.");
    if (this.pontos_atuais > 0) {
        return true;
    }else{
        return false;
    }
}

function EstarCansado() {
    console.log("Meu jogador está exauto e a estamina não funciona corretamente, logo não irá jogar.");
    if (this.forca + this.ataque > 200) {
        return this.pontos_vitoria;
    }else{
        return false;
    }
}

function Pontuacao() {
    console.log("Comparando os resultados para ver qual jogador obteve mais pontos, com os métodos EstaVivo() e EstarCansado()");
    console.log("Jogador1 ou Jogador2 ??");
    if (this.pontos_atuais(jogador1) > this.pontos_vitoria(jogador2)) {
        return true;
    }else{
        return false;
    }
}

function soma(this.forca, this.nivel, this.pontos_atuais, this.forca, this.ataque, this.pontos_vitoria) {
    return this.forca + this.nivel + this.pontos_atuais + this.forca + this.ataque + this.pontos_vitoria;
}
console.log(soma(this.forca + this.ataque));
console.log(soma(this.pontos_atuais + "this.pontos_vitoria"));
console.log(soma(this.nivel));

// Fim da questão da comparação de vida dos jogadores 1 e 2.



