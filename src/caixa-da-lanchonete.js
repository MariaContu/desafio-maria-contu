import { Item } from "./Models/item.js"; //import para acessar descricao e valores de itens
import { Verifica } from "./verifica.js"; //import para fazer as verificacoes de: metodo de pagamento; se carrinho esta vazio e se o item extra nao esta sem o principal

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {   //metodo principal do projeto, utilizado para os testes fornecidos
        // verificamos se o metodo de pagamento é valido
        if(!Verifica.isFormaDePagamentoValida) return "Forma de pagamento inválida!";
        //verificamos então, se o carrinho esta vazio
        if(Verifica.isCarrinhoVazio) return "Não há itens no carrinho de compra!";
        
        // se forma de pagamento for válida e o carrinho não estiver vazio, seguimos o restante do código

        

        return "";
    }

}

export { CaixaDaLanchonete };
