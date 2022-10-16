/* Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
solicitações de reservas feitas conforme abaixo:
class Hotel {
    quantReservas : number;
    adicionarReserva() : void {
    quantReservas++;
    }
} */

/*Podemos afirmar que haverá um problema de compilação, pois a variável inteira não
foi inicializada previamente? Justifique. */

class Hotel {
    quantReservas : number;
    adicionarReserva() : void {
    quantReservas++;  // Método incorreto de incremento, necessita de uma estrutura de repetição for.
    }
}

/* Erro:
Não é possível localizar o nome 'quantReservas' pois para criarmos um objeto, devemos realizar uma instanciação;
Como um objeto é uma instância de uma classe, tal qual um banco de dados é uma instância de um esquema (ecossistema
computacional). */

/* Relembrando as informações contidas nos slides de Type Script:
Instanciar um objeto é o equivalente a:
Alocar uma área de memória, atribuirmos a uma variável o endereço dessa área;
E dizemos que uma variável é uma referência para um objeto. */

// Modo correto da 1ª questão com exemplo de funcionamento do meu hotel.
class Hotel {
    quantReservas : number;
    constructor(15 : number) {
        this.quantReservas = this.quantReservas++;
    }
    adicionarReservas() : void {
        console.log("Há + " + this.quantReservas);
    }
}

/* Irá ter um problema de compilação pois existem três tipos de
elementos para mina classe Hotel: a quantidade de reservas é de 
um tipo número, para eu adicionar uma nova preciso instanciar um 
constructor do tipo void();
E; por último, o termo quantReservas++ é um incremento colocado
propositalmente para dar erro de compilação pois não está declarado
previamente no escopo da minha classe Hotel. */