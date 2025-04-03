import { ProdutoEcologico } from "./ProdutoEcologico";

class Limpeza implements ProdutoEcologico{
    nome: string;
    preco: number;
    volume: number;

    constructor (nome:string, preco:number, volume:number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
    list: Limpeza[]=[]

    cadastrarLista(produto: Limpeza) {
        this.list.push(produto);
    }

    exibir (): void{
        console.log (`Os detalhes do produto ${produto.nome} são preco:${produto.preco}, volume: ${produto.material}`);
     }

}

const produto = new Limpeza("cloro pinheiro", 90, 3 );
produto.cadastrarLista(produto)