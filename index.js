const express = require('express');
const ip = require("ip");
const os = require('os')
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.get('/', (req, res) => {
    res.json({ "status": "OK", "maquina": os.hostname(), "ip": ip.address() });
});

app.get('/health', (req, res) => {
    res.json({ "status": "OK", "maquina": os.hostname(), "ip": ip.address() });
});

app.get('/fahrenheit/:valor/celsius', (req, res) => {

    let valor = req.params.valor;
    let celsius = (valor - 32) * 5 / 9;
    res.json({ "celsius": celsius, "maquina": os.hostname() });
});

app.get('/celsius/:valor/fahrenheit', (req, res) => {

    let valor = req.params.valor;
    let fahrenheit = (valor * 9 / 5) + 32;
    res.json({ "fahrenheit": fahrenheit, "maquina": os.hostname() });
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
