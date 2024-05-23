const express = require('express');

const axios = require('axios');
// URL da API que queremos acessar
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
.then(response => {
    // Tratamento bem-sucedido da resposta
    console.log(response.data);
})
.catch(error => {
    // Tratamento de erro
    console.error(`Erro ao acessar a API: ${error}`);
});

const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
res.render('index', {});
});

app.post('/loadData', async (req, res) => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts"; // Exemplo de URL da API
        const response = await axios.get(url);
        const posts = response.data;
        res.render('loaded', { posts });
    } catch (error) {
        console.error(error);
        res.send('Erro ao carregar dados.');
    }
    });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
