//classe com construtor e objetos criados

class Cardapio  {
    //construtor com informacoes dos itens do cardapio
    constructor(codigo=String,descricao=String,valor=Number) {
        this.codigo=codigo;
        this.descricao=descricao;
        this.valor=valor;
    }

    //metodo responsavel por criar os itens 
    static criaItens() {
        new Cardapio("cafe","Café",3.00);
        new Cardapio("chantily","Chantily (extra do Café)",1.50)
        new Cardapio("suco","Suco Natural",6.20);
        new Cardapio("sanduiche","Sanduíche",6.50);
        new Cardapio("queijo","Queijo (extra do Sanduíche)",2.00);
        new Cardapio("salgado","Salgado",7.25);
        new Cardapio("combo1","1 Suco e 1 Sanduíche",9.50);
        new Cardapio("combo2","1 Café e 1 Sanduíche",7.50);
    }
}

export {Cardapio};