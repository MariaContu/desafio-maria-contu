import { Verifica } from "../Services/verifica.js";

describe('Verifica',() =>   {

    test('isFormaDePagamentoValida retorna true para forma de pagamento válida', () => {
        const formaDePagamento = 'dinheiro';
        const resultado = Verifica.isFormaDePagamentoValida(formaDePagamento);
        expect(resultado).toBe(true);
    });

    test('isFormaDePagamentoValida retorna false para forma de pagamento inválida', () => {
        const formaDePagamento = 'cheque';
        const resultado = Verifica.isFormaDePagamentoValida(formaDePagamento);
        expect(resultado).toBe(false);
    });

    test('isCarrinhoVazio retorna true para carrinho vazio', () => {
        const itens = [];
        const resultado = Verifica.isCarrinhoVazio(itens);
        expect(resultado).toBe(true);
    });

    test('isCarrinhoVazio retorna false para carrinho não vazio', () => {
        const itens = ['cafe,1', 'sanduiche,2'];
        const resultado = Verifica.isCarrinhoVazio(itens);
        expect(resultado).toBe(false);
    });

    test('isItemExistente retorna true para item existente', () => {
        const codItem = 'cafe';
        const resultado = Verifica.isItemExistente(codItem);
        expect(resultado).toBe(true);
    });

    test('isItemExistente retorna false para item inexistente', () => {
        const codItem = 'pizza';
        const resultado = Verifica.isItemExistente(codItem);
        expect(resultado).toBe(false);
    });

    test('isQuantidadeInvalida retorna true para quantidade inválida', () => {
        const quantidade = "0";
        const resultado = Verifica.isQuantidadeInvalida(quantidade);
        expect(resultado).toBe(true);
    });

    test('isQuantidadeInvalida retorna false para quantidade válida', () => {
        const quantidade = "3";
        const resultado = Verifica.isQuantidadeInvalida(quantidade);
        expect(resultado).toBe(false);
    });

    test('isApenasQuantidadeOuCodigo retorna true para item com quantidade e código', () => {
        const item = 'cafe,1';
        const resultado = Verifica.isApenasQuantidadeOuCodigo(item);
        expect(resultado).toBe(true);
    });

    test('isApenasQuantidadeOuCodigo retorna false para item apenas com quantidade', () => {
        const item = '3';
        const resultado = Verifica.isApenasQuantidadeOuCodigo(item);
        expect(resultado).toBe(false);
    });

    test('isApenasExtra retorna true para carrinho com café e chantily', () => {
        const itens = ['cafe,1', 'chantily,1'];
        const resultado = Verifica.isApenasExtra(itens);
        expect(resultado).toBe(true);
    });

    test('isApenasExtra retorna false para carrinho com chantily sem café', () => {
        const itens = ['chantily,1'];
        const resultado = Verifica.isApenasExtra(itens);
        expect(resultado).toBe(false);
    });

});