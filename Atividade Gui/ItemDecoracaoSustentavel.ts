import { ProdutoEcologico } from "./ProdutoEcologico";

class  ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string;
    preco: number;

    constructor (nome:string, preco:number) {
        this.nome = nome;
        this.preco = preco;
    }



}

const item = new ItemDecoracaoSustentavel("pinheiro", 90)