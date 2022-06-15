//Neste arquivo so existem linhas de comando para ultilizar o MongoDB.

db.create.collection("alunos")

db.alunos.insert({
    "nome": "Felipe",
    "data_nascimento": new Date(1994, 02, 26),
    "curso": {
        "nome": "Sistemas da Informação"
    },
    "notas": [10.0, 9.0, 4.5],
    "habilidades": [
        {
            "nome": "ingles",
            "nivel": "avançado"
        }
    ]
})

db.alunos.find() //Traz todos os registros referentes a query.

db.alunos.remove({ "_id": ObjectId("...") })// Remove um Objeto por ID.

db.alunos.find().pretty()//Traz todos os registros de forma organizada.

