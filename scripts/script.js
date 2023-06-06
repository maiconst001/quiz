
var app = new Vue({
    el: '#app',
    mounted: async function () {
        let data = await axios.get('https://morte1506u.pythonanywhere.com/perguntas')
        console.log(data.data)
        this.ask = data.data

        this._order = []

        this._order.push(this.order())
        this._order.push(this.order())
        this._order.push(this.order())
        this._order.push(this.order())
    },


    data: {
        the_quest: 0,
        
        _order: [],


        ask: [
        ],

        worlds: [
            'abacate', 'banana', 'cadeira', 'dedo', 'elefante', 'fogo', 'gato', 'helicóptero', 'ilha', 'jacaré',
            'ketchup', 'limão', 'macaco', 'navio', 'olho', 'parque', 'queijo', 'rato', 'sapato', 'tigre',
            'uva', 'vaca', 'xícara', 'zebra', 'amarelo', 'bola', 'carro', 'doce', 'escada', 'faca', 'girafa',
            'hotel', 'igreja', 'janela', 'kiwi', 'limonada', 'macarrão', 'navalha', 'óculos', 'pato', 'queimadura',
            'ratoeira', 'sapo', 'tijolo', 'uísque', 'vagão', 'xarope', 'zangado', 'amigo', 'borboleta', 'cachorro',
            'dado', 'eletricidade', 'família', 'guitarra', 'hamburguer', 'irmão', 'joelho', 'limusine', 'mãe', 'nave',
            'óleo', 'papagaio', 'quebra-cabeça', 'ratoeiro', 'sardinha', 'tatuagem', 'urso', 'vaidade', 'xadrez', 'zoológico',
            'amor', 'bota', 'camisa', 'dente', 'elefanta', 'faca', 'girassol', 'hotelaria', 'ilha', 'jardim', 'limite',
            'macieira', 'navio', 'oliva', 'paixão', 'quebra-nozes', 'ratatouille', 'saudade', 'tênis', 'urubu', 'vapor',
            'xícara', 'zumbido', 'abelha', 'borboleta', 'cachoeira', 'dinossauro', 'eletricista', 'fogo', 'garrafa', 'hidrante',
            'índio', 'jacarandá', 'lâmpada', 'mamute', 'nariz', 'olho', 'pipoca', 'queijo', 'raiz', 'saudade',
            'tartaruga', 'uva', 'vassoura', 'xerife', 'zangado', 'abóbora', 'bicicleta', 'camelo', 'dinheiro', 'escova',
            'faca', 'guitarra', 'hipopótamo', 'igreja', 'janela', 'kiwi', 'laranja', 'macarrão', 'navio', 'ouro',
            'pérola', 'queimadura', 'rádio', 'sapato', 'tigre', 'universo', 'vagão', 'xadrez', 'zebu'
        ]
    },

    methods: {
        
        gerate : function() {
            return Math.floor(Math.random() *  + this.worlds.length);
        },
        order : function() {
            return Math.round(Math.random() * 3);
        },

        changeColor: function(_fruitName) {
            let fruitName = _fruitName.innerText
            if (fruitName == this.ask[this.the_quest].answer) {
              alert('gain')
              this.the_quest += 1
            }else {
                alert('errou -- ' + this.ask[this.the_quest].ask + ' = ' + this.ask[this.the_quest].answer)
                this.the_quest += 1
            }

            if (this.ask.length == this.the_quest) {
                alert('fim')
                this.the_quest = 0
            }

            this._order = []

            this._order.push(this.order())
            this._order.push(this.order())
            this._order.push(this.order())
            this._order.push(this.order())
          }
    }
})

 