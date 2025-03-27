import { ProdutoEcologico } from "./ProdutoEcologico";

class Limpeza implements ProdutoEcologico{
    nome: string;
    preco: number;

    constructor (nome:string, preco:number) {
        this.nome = nome;
        this.preco = preco;
    }

}

const produto =  new Limpeza("alcool", 10)