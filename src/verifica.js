import { FormasPagamento } from "./Models/formasPagamento.js"; //importa metodos de pagamento

class Verifica  {   //classe criada para facilitar e diminuir codigo fonte principal. Essa classe realiza as verificacoes necessarias durante os testes

    //metodo para a verificacao se o metodo de pagamento inserido é válido
    static verificaFormaPagamento(forma)    {
        if(Object.values(FormasPagamento).includes(forma)){
            console.log(`Forma de pagamento escolhida: ${forma}`);
        } else {
            console.log(`Forma de pagamento "${forma}" não está disponível.`);
        }
    }

    //verifica se o carrinho esta vazio, []
    static verificaCarrinhoVazio(itens=[]) {
        if(itens.length == '0') "Não há itens no carrinho de compra!"
    }

    //verifica se o codigo fornecido existe na lista de produtos, exemplo: [pizza,1]
    static verificaSeItemExiste()   {}

    //verifica se foi inserido um item com quantidade 0, por exemplo: [cafe,0]
    static verificaQuantidadeZero() {}

    //verifica se foi fornecida apenas a quantidade, sem um código existente
    static verificaApenasQuant()    {}

    //verifica se o item extra existe junto do principal, caso contrario será informado que a venda é invalida
    static verificaItemExtra()  {}
    
}

export {Verifica};