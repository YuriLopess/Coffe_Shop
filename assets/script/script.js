let commodityJson = [
    {
        "id": 1,
        "name": "Viennese",
        "img": "../img/productViennese.png",
        "price": 20.00,
        "description": "Ground coffee beans with a hint of cream, evoking the elegance of Vienna."
    },
    {
        "id": 2,
        "name": "Moroccan",
        "img": "../img/productMoroccan.png",
        "price": 20.00,
        "description": "Coffee beans with spices like cinnamon and cardamom, inspired by Moroccan cuisine."
    },
    {
        "id": 3,
        "name": "Orleans",
        "img": "../img/productNewOrleans.png",
        "price": 20.00,
        "description": "Coffee beans with chicory, reflecting the tradition and culture of New Orleans."
    },
    {
        "id": 4,
        "name": "Italian",
        "img": "../img/productItalian.png",
        "price": 20.00,
        "description": "Dark roasted coffee beans, offering an intense and full-bodied flavor profile."
    },
    {
        "id": 5,
        "name": "Moroccan Blue",
        "img": "../img/productMoroccanBlue.jpg",
        "price": 25.00,
        "description": "Coffee beans with blue tea flavor, offering a unique and refreshing experience."
    },
    {
        "id": 6,
        "name": "Italian Orange",
        "img": "../img/productItalianOrange.jpg",
        "price": 25.00,
        "description": "Coffee beans with orange flavor, adding a citrusy note to the brew."
    },
    {
        "id": 7,
        "name": "Moroccan Pink",
        "img": "../img/productMoroccanPink.jpg",
        "price": 25.00,
        "description": "Coffee beans with rose aroma, providing a floral experience."
    },
    {
        "id": 8,
        "name": "Viennese Green",
        "img": "../img/productVienneseGreen.jpg",
        "price": 25.00,
        "description": "Ground coffee beans with mint, providing a refreshing flavor."
    }
]


commodityJson.map((item, index) => {
    //console.log(item);
    
    let coffeItem = document.querySelector('.models .coffeItem').cloneNode(true);

    console.log(coffeItem);
})
