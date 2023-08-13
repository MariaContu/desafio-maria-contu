import { Item } from "../Models/item";
import { Verifica } from "./verifica";


class Calculo {

    static fazVerificacoesIniciais(metodo,itens)    {
        // verificamos se o metodo de pagamento é valido
        if(!Verifica.isFormaDePagamentoValida(metodo)) return "Forma de pagamento inválida!";
        //verificamos então, se o carrinho esta vazio
        if(Verifica.isCarrinhoVazio(itens)) return "Não há itens no carrinho de compra!";
        //vamos verificar a existencia de um extra sem o item principal
        if(!Verifica.isApenasExtra(itens)) { //se o extra existir sem o principal, retorna false
            return "Item extra não pode ser pedido sem o principal";
        } 
        return null;
    }    

    static fazCalculoDeValorTotalSemDesconto(itens) {
        const todosItens=Item.itensCardapio();
        //criar variavel responsavel por incrementar o valor
        let valorTotal = 0;

        //for para a incrementacao do valor a cada item da lista
        for(const i of itens)   {

            //verifica se existe apenas a quantidade ou apenas o codigo
            if (!Verifica.isApenasQuantidadeOuCodigo(i)) { //se nao tiver , retorna false
                return "Item inválido!"
            }

            const [codigoI,quantI] = i.split(',');  //separa codigo e quantidade

            if (!Verifica.isItemExistente(codigoI)) { //se o codigoI nao existir em itens, retorna false
                return "Item inválido!";
            }
            
            if (Verifica.isQuantidadeInvalida(quantI)) { //se a quantI for invalida, retorna true
                return "Quantidade inválida!";
            }

            //ok, item existe e a quantidade é valida, iniciaremos a incrementação do valor total
            //vamos criar uma variavel valorI para calcular o valor do item do codigo * a quantidade do item: quantI
            const itemI = todosItens.find(item => item.codigo == codigoI);
            valorTotal+=(itemI.valor*parseInt(quantI)); //incrementacao de valorTotal
        }
        return valorTotal;
    }

    static aplicaImpostoOuDesconto(metodo,valorTotal)    {
        if (metodo=='dinheiro') {  
            //desconto de 5% do valor total
            return valorTotal*0.95;
        }
        else if(metodo=='credito')   {
            //imposto de 3% sobre o valor total
            return valorTotal*1.03;
        }
        else    {
            return valorTotal;
        }
    }
}

export {Calculo};