const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// MySql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'practicasoa',
    port: '3307'
});

// Route
app.get('/', (req, res) => {
    res.send('Bienvenido ..!');
});

// all customers
app.get('/cuenta', (req, res) => {
    const sql = 'SELECT * FROM cuenta';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

app.get('/cuenta/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM cuenta WHERE idcuenta = ${id}`;
    connection.query(sql, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No hay resultados');
        }
    });
});

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO cuenta SET ?';

    const customerObj = {
        saldocuenta: req.body.saldocuenta,
        tipocuenta: req.body.tipocuenta,
        banco_idbanco: req.body.banco_idbanco
    };

    connection.query(sql, customerObj, error => {
        if (error) throw error;
        res.send('Cuenta creada!');
    });
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { saldocuenta, tipocuenta, banco_idbanco } = req.body;
    const sql = `UPDATE cuenta SET saldocuenta = '${saldocuenta}', tipocuenta='${tipocuenta}' , banco_idbanco= '${banco_idbanco}' WHERE idcuenta =${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        res.send('Cuenta actualizada!');
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM cuenta WHERE idcuenta= ${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        res.send('Cuenta eliminada');
    });
});

// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('El servidor esta funcionando!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));