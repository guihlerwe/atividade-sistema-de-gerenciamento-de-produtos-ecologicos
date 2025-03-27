import { ProdutoEcologico } from "./ProdutoEcologico";
class AlimentoOrganico implements ProdutoEcologico{
    nome: string;
    preco: number;

    constructor (nome:string, preco:number) {
        this.nome = nome;
        this.preco = preco;
    }
    

}

const alimento = new AlimentoOrganico("banana", 100);










/* const contaCorrente = new ContaCorrente(1000);

contaCorrente.depositar(500);

contaCorrente.sacar(200);

contaCorrente.sacar(1301);

import { ContaBancaria } from "./contabancaria";
class ContaCorrente implements ContaBancaria {
    saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    depositar(valor: number): void {
        this.saldo += valor;;
    }

    sacar(valor:number): void{
        if(this.saldo>0){

            this.saldo-=valor;
        }else{
            console.log("nao há saldo");
        }
    }



}
    */