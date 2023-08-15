import { Calculo } from "../Services/calculo";

describe('Calculo', () => {
    describe('fazVerificacoesIniciais', () => {
        it('deve retornar mensagem de forma de pagamento inválida', () => {
            const metodo = 'cheque';
            const itens = ['cafe,2'];
            const resultado = Calculo.fazVerificacoesIniciais(metodo, itens);
            expect(resultado).toEqual('Forma de pagamento inválida!');
        });

        it('deve retornar mensagem de carrinho vazio', () => {
            const metodo = 'dinheiro';
            const itens = [];
            const resultado = Calculo.fazVerificacoesIniciais(metodo, itens);
            expect(resultado).toEqual('Não há itens no carrinho de compra!');
        });

        it('deve retornar mensagem de item extra sem o principal', () => {
            const metodo = 'credito';
            const itens = ['chantily,1'];
            const resultado = Calculo.fazVerificacoesIniciais(metodo, itens);
            expect(resultado).toEqual('Item extra não pode ser pedido sem o principal');
        });

        it('deve retornar null para verificações válidas', () => {
            const metodo = 'dinheiro';
            const itens = ['cafe,1'];
            const resultado = Calculo.fazVerificacoesIniciais(metodo, itens);
            expect(resultado).toBeNull();
        });
    });

    describe('fazCalculoDeValorTotalSemDesconto', () => {
        it('deve calcular o valor total sem desconto', () => {
            const itens = ['cafe,2', 'sanduiche,1'];
            const resultado = Calculo.fazCalculoDeValorTotalSemDesconto(itens);
            expect(resultado).toEqual(12.50);
        });

        it('deve retornar mensagem de item inválido por quantidade', () => {
            const itens = ['cafe,-2'];
            const resultado = Calculo.fazCalculoDeValorTotalSemDesconto(itens);
            expect(resultado).toEqual('Quantidade inválida!');
        });

    });

    describe('aplicaImpostoOuDesconto', () => {
        it('deve aplicar desconto para pagamento em dinheiro', () => {
            const metodo = 'dinheiro';
            const valorTotal = 100.00;
            const resultado = Calculo.aplicaImpostoOuDesconto(metodo, valorTotal);
            expect(resultado).toEqual(95.00);
        });

        it('deve aplicar imposto para pagamento em crédito', () => {
            const metodo = 'credito';
            const valorTotal = 100.00;
            const resultado = Calculo.aplicaImpostoOuDesconto(metodo, valorTotal);
            expect(resultado).toEqual(103.00);
        });
    });
});
