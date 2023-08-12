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
        console.log(Object.values(FormasPagamento).includes(forma));  //se a forma existir, retorna true, se n existir, retorna false
    }

    testaIsItemExistente(codItem=String)  {
        const todosItens = Item.itensCardapio();
        console.log(todosItens.some(item=>item.codigo == codItem));
        //return todosItens.some(item=>item.codigo == codItem);
    }

    testaQuantZero(item="")    {
        const[,quant] = item.split(',');
        console.log(quant==0)
        //return quant == 0;
    }

    testaApenasQuantidade(item="") {
        console.log(item.includes(','));
    }

    testaIsApenasExtra    (todosItens=[])  {
        const itensCodigos = todosItens.map(item => item.split(',')[0]);

        const hasCafe = itensCodigos.includes('cafe');
        const hasSanduiche = itensCodigos.includes('sanduiche');

        if(itensCodigos.includes('chantily') && !hasCafe)    {
            console.log(false)
            return false;
        }
        if(itensCodigos.includes('queijo') && !hasSanduiche)    {
            console.log(false)
            return false;
        }
        console.log(true)
        return true;
    }
}

const testInstance = new test();
//testInstance.mostraItens(); // Chamar o método imprimirItens

//testInstance.testarFormas("debito");
//testInstance.testarFormas("credito");
//testInstance.testarFormas("dinheiro");
//testInstance.testarFormas("cheque"); // Exemplo de forma não disponível

//testInstance.testaIsItemExistente('cafe');
//testInstance.testaIsItemExistente('pizza');

//testInstance.testaQuantZero('cafe,1');
//testInstance.testaQuantZero('cafe,0');

//testInstance.testaApenasQuantidade("1");
//testInstance.testaApenasQuantidade("cafe,1");

testInstance.testaIsApenasExtra(['cafe,1', 'queijo,1'])
testInstance.testaIsApenasExtra(['cafe,1', 'sanduiche,1','chantily,1'])
testInstance.testaIsApenasExtra(['cafe,1','sanduiche,1', 'queijo,1'])
testInstance.testaIsApenasExtra(['queijo,1'])