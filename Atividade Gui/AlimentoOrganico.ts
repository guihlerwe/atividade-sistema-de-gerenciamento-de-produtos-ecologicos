import { ProdutoEcologico } from "./ProdutoEcologico";
class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade  : Date;
    ingredientes : string[];

    list: AlimentoOrganico[]  = []

    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }



    cadastrarLista(alimento: AlimentoOrganico) {
        this.list.push(alimento);
    }

    exibir (): void{
       console.log (`Os detalhes do alimento ${alimento.nome} são preco:${alimento.preco}, data de validade: ${alimento.dataValidade}  e igredientes: ${alimento.ingredientes}`);
    }

    
}
const alimento = new AlimentoOrganico("verdura", 80, new Date("20/1/2000"), ["nada"])
alimento.cadastrarLista(alimento);


