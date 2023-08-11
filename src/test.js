import { Item } from "./Models/item.js";
import { FormasPagamento } from "./Models/formasPagamento.js";

class test {

    mostraItens()   {
        const todosItens = Item.itensCardapio();
        todosItens.forEach(it => {
            console.log(it.descricao)
        });
    }

    testarFormas(forma) {
        if(Object.values(FormasPagamento).includes(forma)){
            console.log(`Forma de pagamento escolhida: ${forma}`);
        } else {
            console.log(`Forma de pagamento "${forma}" não está disponível.`);
        }
    }
    
}

const testInstance = new test();
testInstance.mostraItens(); // Chamar o método imprimirItens

testInstance.testarFormas("debito");
testInstance.testarFormas("credito");
testInstance.testarFormas("dinheiro");
testInstance.testarFormas("cheque"); // Exemplo de forma não disponível
