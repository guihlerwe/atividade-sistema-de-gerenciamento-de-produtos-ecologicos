import { ProdutoEcologico } from "./ProdutoEcologico";

class  ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string;
    preco: number;
    material : string;
    dimensoes : {
        largura: number,
        altura : number,
        profundidade : number
    }

    list: ItemDecoracaoSustentavel[]=[]

    constructor (nome:string, preco:number, material: string, dimensoes : {
        largura: number,
        altura : number,
        profundidade : number}) 
        {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;

    }

    cadastrarLista(item: ItemDecoracaoSustentavel) {
        this.list.push(item);
    }

    exibir (): void{
        console.log (`Os detalhes do item ${item.nome} são preco:${item.preco}, material: ${item.material}  e dimensoes: ${item.dimensoes}`);
     }

}

const item = new ItemDecoracaoSustentavel("pinheiro", 90, "plastico", {largura:20, altura:90, profundidade:80});
item.cadastrarLista(item)