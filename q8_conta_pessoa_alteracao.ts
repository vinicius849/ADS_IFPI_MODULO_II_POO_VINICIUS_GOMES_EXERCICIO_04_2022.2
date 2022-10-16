/* 8. Altere a classe conta dos slides conforme as instruções abaixo:
a. Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
saque deixe saldo negativo, o mesmo não será realizado, retornando falso;
b. Altere o método transferir() para que retorne também um valor lógico e que
não seja feita a transferência caso o sacar() na conta origem não seja
satisfeito;
c. Verifique as diferentes operações implementadas. Continuação da 4ª questão. */

class Conta {
    conta : string;
    saldo : number;
    transferir : number;

    constructor (conta : string, saldo : number, transferir : number) {
    this.conta = conta;
    this.saldo = saldo;
    this.transferir = transferir;
    }
}

    let conta : Conta = new Conta("Banco do Brasil", 500, 100);
    
function SacarDinheiro() {
    if (this.saldo % 500 === 0) {
        return false;
    }else{
        return true;
    }
}

function TransferirDinheiro() {
    while (this.tranferir < 400) {
        console.log("Se eu solicitei no meu constructor que tenho R$500,00 de saldo no BB e transferí R$100,00 então tenho R$400,00 sobrando.");
    return this.consultarSaldo;
    }
}

// Observa-se diferentes métodos de se implementar esta questão utiizando uma conta em Banco.
