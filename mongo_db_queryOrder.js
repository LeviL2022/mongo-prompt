db.alunos.find({ "notas": 8.5 })
//Traz a nota especifica.

db.alunos.find({ "notas": { $gt: 5 } })
db.alunos.find({ "notas": { $lt: 5 } })
//Traz os resultados (>) e (<) o valor referido.

db.alunos.findOne({ "notas": { $gt: 5 } })
//Traz 1 unico registro que atende as especificações.

db.alunos.find().sort({ "nome": 1 })
db.alunos.find().sort({ "nome": -1 }).limit(3)
//Traz em ordem crescente ou decrescente e o limit ao fim limita a quantidade da saída.