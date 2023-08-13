//classe com construtor e objetos criados

class Item  {
    //construtor com informacoes dos itens do cardapio
    constructor(codigo=String,descricao=String,valor=Number) {
        this._codigo=codigo;
        this._descricao=descricao;
        this._valor=valor;
    }

    //metodo responsavel por criar os itens 
    static itensCardapio() {
        const todosItens = [
            new Item("cafe","Café",3.00),
            new Item("chantily","Chantily (extra do Café)",1.50),
            new Item("suco","Suco Natural",6.20),
            new Item("sanduiche","Sanduíche",6.50),
            new Item("queijo","Queijo (extra do Sanduíche)",2.00),
            new Item("salgado","Salgado",7.25),
            new Item("combo1","1 Suco e 1 Sanduíche",9.50),
            new Item("combo2","1 Café e 1 Sanduíche",7.50),
        ]

        return todosItens;
    }

    get codigo()    {
        return this._codigo
    }

    //get descricao() {
    //   return this._descricao
    //}

    get valor() {
        return this._valor
    }


}

export {Item};