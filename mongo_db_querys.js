//Exemplos de Querys do tipo OR, AND e IN .

db.alunos.find({
    $or: [
        { "curso.nome": "Sistemas da Informação" },
        { "curso.nome": "Engnharia Quimica" }
    ]
}) //Traz um ou outro.

db.alunos.find({
    $or: [
        { "curso.nome": "Sistemas da Informação" },
        { "curso.nome": "Engnharia Quimica" },
        { "curso.nome": "Moda" }
    ], "nome": "Daniela" // (,) representa o AND nas  querys.
}) // Traz um ou outro e Daniela (Caso tenha).

db.alunos.find({
    "curso.nome": {
        $in: ["Sistemas da Informação", "Engenahria Quimica"]
    }
}) //Traz todos que estão nos cursos.