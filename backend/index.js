const express = require('express');

const app = express();

app.use(express.json());

//Tipos de Parâmetros:

//Query Params: request.query (Filtros, paginação, ordenação, ...)
//Route Params:  request.params (Identificar um recurso na altereação ou remoção)
//Body: request.body (Dados para criação ou alterção de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Hello World'});
});

app.listen(3333);