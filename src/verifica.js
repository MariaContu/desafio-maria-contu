import { FormasPagamento } from "./Models/formasPagamento.js"; //importa metodos de pagamento
import { Item } from "./Models/item.js";

class Verifica  {   //classe criada para facilitar e diminuir codigo fonte principal. Essa classe realiza as verificacoes necessarias durante os testes

    //metodo para a verificacao se o metodo de pagamento inserido é válido
    static isFormaDePagamentoValida(forma)    {
        return Object.values(FormasPagamento).includes(forma);  //se a forma existir, retorna true, se n existir, retorna false
    }

    //verifica se o carrinho esta vazio, []
    static isCarrinhoVazio(itens=[]) {
        return itens.length == 0; //se o carrinho estiver vazio, retorna true, se tiver itens dentro retorna false
    }

    //verifica se o codigo fornecido existe na lista de produtos, exemplo: [pizza,1]
    static isItemExistente(codigo,todosItens=[])   {
        //se o item nao estiver na lista de itens, retorna false, do contrario indica true
        const todosItens = Item.itensCardapio();
        console.log(todosItens.some(item=>item.codigo == codItem));
        return todosItens.some(item=>item.codigo == codItem);
    }

    //verifica se foi inserido um item com quantidade 0, por exemplo: [cafe,0]
    static isQuantidadeZero(item="") {
        const[,quant] = item.split(',');    //verifica se quantidade é 0, se for retorna true, do contrario retorna false
        return quant == 0;
    }

    //verifica se foi fornecida apenas a quantidade, sem um código existente
    static isApenasQuantidade(item="")    {     //se tiver , vai retornar true, ou seja não é apenas a quantidade, do contrario retorna false
        return item.includes(',');
    }

    //verifica se o item extra existe junto do principal, caso contrario será informado que a venda é invalida
    static isApenasExtra    ()  {}
    
}

export {Verifica};