import { Item } from "./Models/item.js";
import { FormasPagamento } from "./Models/formasPagamento.js";

class test {

    mostraItens()   {
        const todosItens = Item.itensCardapio();
        todosItens.forEach(it => {
            console.log(it.descricao)
        });
    }
    
}

const testInstance = new test();
testInstance.mostraItens(); // Chamar o método imprimirItens
