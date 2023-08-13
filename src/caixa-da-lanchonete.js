import { Calculo } from "./Services/calculo.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {   //metodo principal do projeto, utilizado para os testes fornecidos
        
        //fazemos as verificacoes iniciais: forma de pagamento, carrinho vazio e extra sem principal
        const resultadoVerificacoes = Calculo.fazVerificacoesIniciais(metodoDePagamento,itens);
        if (resultadoVerificacoes!==null) {
            return resultadoVerificacoes;
        }
        // se forma de pagamento for válida, o carrinho não estiver vazio e o extra estiver junto de um principal, seguimos o restante do código
        
        //metodo para calcular valor total sem aplicacao de desconto ou imposto
        const valorSemDesconto = Calculo.fazCalculoDeValorTotalSemDesconto(itens);
        if(typeof valorSemDesconto === 'string') return valorSemDesconto;

        //calculamos valorSemDesconto, entao vamos aplicar as especificações dependendo do metodo de pagamento
        const valorTotalFinal = Calculo.aplicaImpostoOuDesconto(metodoDePagamento,valorSemDesconto);

        return "R$ " + valorTotalFinal.toFixed(2).replace('.',',');
    }
}

export { CaixaDaLanchonete };
