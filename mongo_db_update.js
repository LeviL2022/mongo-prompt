db.alunos.update(
    { "curso.nome": "Sistemas de Informação" },
    {
        $set: {
            "curso.nome": "Sistemas da Informação"
        }
    }, { multi: true }
)
//{ multi: true } = por padrão é false. Muda mais de uma linha pois o Set por padrão só altera a primeira informação que el encontra.

db.alunos.update(
    { "_id": ObjectId("...") },
    {
        $push: {
            notas: 8.5
        }
    }
)
//Atualiza algo especifico do objeto, nesse caso um array com notas foi alterado.

db.alunos.update(
    { "_id": ObjectId("...") },
    {
        $push: {
            notas: { $each: [8.5, 3] }
        }
    }
)
//Atualiza a array com mais de um numero.