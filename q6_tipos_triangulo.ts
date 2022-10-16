/* 6. Crie uma classe chamada Triangulo que:
a. Possua 3 atributos inteiros representando os lados;
b. Crie um método que retorna true se os lados formarem um triângulo de
acordo com a regra: |b-c| < a < b+c;
c. Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleno() que retorne
verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
método. Eles devem chamar antes de tudo, o método da questão b. e
retornar false se esse método já retornar false também;
d. Instancie classes Triangulo de diferentes lados e seus métodos. */

class Triangulo {
    lado_1 : number;
    lado_2 : number;
    hipotenusa : number;
    constructor(lado_1 : number, lado_2 : number, hipotenusa : number) {
       this.lado_1 = lado_1;
       this.lado_2 = lado_2;
       this.hipotenusa = hipotenusa; 
    }
}
    let triangulo : Triangulo = new Triangulo(45, 45, 90);
    while (this.hipotenusa < this.lado_1 + this.lado_2) {
        console.log("De acordo com meus cálculos e conhecimentos, este é um Triângulo Isósceles.");
    
class Triangulo2 {
    cateto_oposto : number;
    cateto_adjacente : number;
    formula : number;
    constructor(cateto_oposto : number, cateto_adjacente : number, formula : number) {
        this.cateto_oposto = cateto_oposto;
        this.cateto_adjacente = cateto_adjacente;
        this.formula = formula;
    }
}
    }

    let triangulo2 : Triangulo = new Triangulo(60, 60, 60);
    while (this.hipotenusa = this.cateto_oposto = this.cateto_adjacente) {
        console.log("De acordo com o exposto acima, meu triângulo é Equilátero.");
    }

class Triangulo3 {
    lado_oposto : number;
    lado_adjacente : number;
    formula : number;
    constructor(lado_oposto : number, lado_adjacente : number, formula : number) {
        this.lado_oposto = lado_oposto;
        this.lado_adjacente = lado_adjacente;
        this.formula = formula;
    }
}

    let triangulo3 : Triangulo = new Triangulo(35, 65, 80);
    while (this.lado_oposto != this.lado_adjacente != this.formula) {
        console.log("Para finalizar e olhando a minha fórmula dada na questão 6, meu triângulo é Escaleno.");
    }

/* Fim da questão |b - c| < a < b + c ; Confirmando o Teorema de Pitágoras, partindo de minha Hipotenusa
e os senos e cossenos dos respectivos triângulos.
Situação: Criei uma classe Triângulo para servir de parâmetro para todos os triângulos, e após isso criei 
mais 3 constructores para os três tipos de triângulos: Equilátero(todos os lados são iguais juntamente com
seus ângulos interno), Isósceles(é um triângulo que possui dois lados iguais e um diferente) e, por último
e não menos importante o Escaleno(é um triângulo com todos os seus lados e ângulos internos diferentes). */

    

    



    


