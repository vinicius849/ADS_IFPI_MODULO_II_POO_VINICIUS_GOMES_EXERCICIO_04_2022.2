/* 2. Ainda sobre a classe do exemplo anterior, considere o código abaixo:
let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);
Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo
quantReservas. */

class Hotel {
    quantReservas : number;
    Hotel["nome"] : string;
    constructor ("Gomes": string) {
        for (this.quantReservas = 0; this.quantReservas > 7; this.quantReservas++) {
            console.log("O meu constructor está aceitando um parâmetro e inicializou um atributo usando laço de iteração for.");
        }
    }
let hotel : Hotel = new Hotel(8);
let hotel : (8, "Gomes", false);
}