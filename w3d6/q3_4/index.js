const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

let products = [{
        id: 1,
        name: "PlayStation 5",
        price: 500,
        description: "new playstation 5 with two controllers"
    }, {
        id: 2,
        name: "Xbox One",
        price: 600,
        description: "Xbox One with one controller and one game"
    },
    {
        id: 3,
        name: "Nitando",
        price: 300,
        description: "Nitando 2021 with 4 games installed"
    }
];


let shoppingCart = [];

app.get('/', (req, res) => {
    res.render("shop", {
        products: products
    });
});

app.get("/product", (req, res) => {
    let selectedProduct = products.find(x => x.id == req.query.id);
    res.render("product", { product: selectedProduct });
});


app.post('/addToCart', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;

    let selectedProduct = shoppingCart.find(x => x.name == name);
    let newProd;

    if (selectedProduct != null || selectedProduct != undefined) {
        selectedProduct.quantity += 1;
    } else {
        newProd = {
            name: name,
            price: price,
            quantity: 1,

        }
        shoppingCart.push(newProd);
    }

    res.redirect('/cart');
});

app.get("/cart", (req, res) => {
    res.render("shoppingcart", { shoppingCart: shoppingCart });
});

app.listen(3000, () => console.log('localhost:3000'));