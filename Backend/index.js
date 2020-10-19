const express = require('express');
const port = 5000;
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
const products = [
    {
        id: 1,
        title: 'Minecraft',
        price: 90,
        writer: 'Name',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 2,
        title: 'Saphine',
        price: 160,
        writer: 'OK',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 3,
        title: 'Naurto',
        price: 123,
        writer: 'JIMMY',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 4,
        title: 'Soqp',
        price: 1233,
        writer: 'JOHNU',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 5,
        title: 'Soqp',
        price: 1233,
        writer: 'JOHNU',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 6,
        title: 'Soqp',
        price: 1233,
        writer: 'JOHNU',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 7,
        title: 'Soqp',
        price: 1233,
        writer: 'JOHNU',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 8,
        title: 'Soqp',
        price: 1233,
        writer: 'JOHNU',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 9,
        title: 'Soqp',
        price: 1233,
        writer: 'JOHNU',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 10,
        title: 'Soqp',
        price: 1233,
        writer: 'JOHNU',
        image: 'img/81BGaOfUtsL.jpg'
    },
    {
        id: 11,
        title: 'Soqp',
        price: 1233,
        writer: 'JOHNU',
        image: 'img/81BGaOfUtsL.jpg'
    }
];
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            res.send(products[i]);
            return;
        }
    }
    res.status(400).send({ msg: 'Not found' });
});

app.post('/testpost', (req, res) => {
    console.log(req.body);
});
app.listen(port, () => {
    console.log(`Running in port ${port}`);
});
