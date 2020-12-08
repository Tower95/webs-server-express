const http = require('http');

http.createServer((req, res) => {


        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salario = {
            nombre: "Ismael",
            salario: 20000,
            edad: 25,
            url: req.url

        }
        res.write(JSON.stringify(salario));
        res.end();
    })
    .listen(8082);

console.log('escuchando el puerto 8082');