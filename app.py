from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)


CORS(app)


class Pergunta(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ask = db.Column(db.String(255), unique=True)
    answer = db.Column(db.String(255))



@app.route('/',  methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('template.html')

    ask = request.form['ask']
    answer = request.form['answer']
    

    pergunta = Pergunta(ask=ask, answer=answer)
    db.session.add(pergunta)
    db.session.commit()
    
    return 'Pergunta e resposta criadas com sucesso!'



@app.route('/perguntas', methods=['GET'])
def obter_perguntas():
    perguntas = Pergunta.query.all()
    perguntas_json = []
    for pergunta in perguntas:
        perguntas_json.append({
            'id': pergunta.id,
            'ask': pergunta.ask,
            'answer': pergunta.answer
        })
    return jsonify(perguntas_json)




with app.app_context():
    db.create_all()


app.run()
