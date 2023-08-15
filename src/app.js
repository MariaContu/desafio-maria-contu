import { Item } from "./Models/item.js";
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    console.log("-------------------------------");
    console.log("Bem-Vindo(a) à Lanchonete da DB");
    console.log("-------------------------------");

    console.log("Os itens disponiveis no cardapio são: ");
    
    const listaItens = Item.itensCardapio();
    for(const i of listaItens)  console.log(i.codigo);    

    const itens = [];

    function coletarItens() {
        rl.question("\nGostaria de adicionar algum item no seu carrinho? (S/N): ", (resposta) => {
            if (resposta.toUpperCase() === 'S') {
                coletarNovoItem();
            }
            else if(resposta.toUpperCase() === 'N') {
                console.log("Itens adicionados ao carrinho:");
                for (const item of itens) {
                    console.log(item);
                }
                coletarMetodoDePagamento(itens);
            }
            else    {
                console.log("Resposta Inválida!")
                coletarItens();
            }
        });
    }

    function coletarNovoItem() {
        rl.question("Digite o item e a quantidade que gostaria de adicionar seguindo o modelo a seguir: cafe,2: ", (novoItem) => {
            itens.push(novoItem);
            console.log(`Item adicionado: ${novoItem}`);
            coletarItens();
        });
    }

    function coletarMetodoDePagamento(itens) {
        rl.question("Qual é o método de pagamento? ", (metodoDePagamento) => {
            console.log(`Você escolheu o método de pagamento: ${metodoDePagamento}`);
            realizaCalculo(metodoDePagamento,itens);
            rl.close();
        });
    }

    function realizaCalculo(metodo,itens)   {
        const c = new CaixaDaLanchonete();
        const resposta = c.calcularValorDaCompra(metodo,itens);

        console.log(resposta)
    }

    coletarItens();
}

main();
