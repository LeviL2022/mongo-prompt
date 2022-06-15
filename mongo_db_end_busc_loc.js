db.alunos.find({
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
    ],
    "localizacao": {
        "endereco": "Rua Vergueiro, 3185",
        "cidade": "São Paulo",
        "país": "Brasil",
        "coordinates": [-23.588213, -46.632356],
        "type": "Point"
    }
})

//Foi adicionado a cada aluno o atributo localização, 
//que recebe coordenadas da esfera terrestre e tem o tipo "Point" que é um ponto geográfico.

db.alunos.createIndex({
    localizacao: "2dsphere"
})
//Um indice foi criado com o atributo "localização" que recebe um padrão 2d somente sobre latitude e longitude.

db.alunos.aggregate([
    {
        $geoNear: {
            near: {
                coordinates: [-23.588213, -46.632356],
                type: "Point"
            },
            distanceField: "distancia.calculada",
            spherical: true
        }
    }
])

//"Aggregate" agrega as informações de geo localização, distância e posição do individuo descrito nas coordenadas.

db.alunos.aggregate([
    {
        $geoNear: {
            near: {
                coordinates: [-23.588213, -46.632356],
                type: "Point"
            },
            distanceField: "distancia.calculada",
            spherical: true,
            num: 3
        }
    }, { $skip: 1 }
])

//Esse ultimo modelo limita a saida de informações em 3 e ignora(Skip) o primeiro item do array.