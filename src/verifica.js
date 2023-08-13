import { FormasPagamento } from "./Models/formasPagamento.js"; //importa metodos de pagamento
import { Item } from "./Models/item.js";

class Verifica  {   //classe criada para facilitar e diminuir codigo fonte principal. Essa classe realiza as verificacoes necessarias durante os testes

    //metodo para a verificacao se o metodo de pagamento inserido é válido
    static isFormaDePagamentoValida(forma)    {
        return Object.values(FormasPagamento).includes(forma);  //se a forma existir, retorna true, se n existir, retorna false
    }

    //verifica se o carrinho esta vazio, []
    static isCarrinhoVazio(itens=[]) {
        return itens.length === 0; //se o carrinho estiver vazio, retorna true, se tiver itens dentro retorna false
    }

    //verifica se o codigo fornecido existe na lista de produtos, exemplo: [pizza,1]
    static isItemExistente(codItem)   {
        //se o item nao estiver na lista de itens, retorna false, do contrario indica true
        const todosItens = Item.itensCardapio();
        console.log(todosItens.some(item=>item.codigo == codItem));
        return todosItens.some(item=>item.codigo == codItem);
    }

    //verifica se foi inserido um item com quantidade 0
    static isQuantidadeInvalida(quantidade) {
        const quant = parseInt(quantidade);
        return quant <= 0;
    }

    //verifica se foi fornecida apenas a quantidade, sem um código existente
    static isApenasQuantidadeOuCodigo(item="")    {     //se tiver , vai retornar true, ou seja não é apenas a quantidade, do contrario retorna false
        return item.includes(',');
    }

    //verifica se o item extra existe junto do principal, caso contrario será informado que a venda é invalida
    static isApenasExtra    (todosItens=[])  {
        const itensCodigos = todosItens.map(item => item.split(',')[0]);    //divide a lista de itens criando uma lista apenas com os codigos

        const hasCafe = itensCodigos.includes('cafe');  //true se houver cafe
        const hasSanduiche = itensCodigos.includes('sanduiche'); //true se houver sanduiche

        if(itensCodigos.includes('chantily') && !hasCafe)    {  //verifica a existencia simultanea de cafe e chantily
            return false;
        }
        if(itensCodigos.includes('queijo') && !hasSanduiche)    { //verifica existencia simultanea de queijo e sanduiche
            return false;
        }

        return true;
    }
    
}

export {Verifica};