let carts = document.querySelectorAll('.cart')

let products = [
    {
        name: '5 Best fragrant plants',
        price: 1000,
        tag: "fps/1.jpg",
        incart: 0
    },
    {
        name: 'Mini Succulent Pack',
        price: 499,
        tag: "fps/2.webp",
        incart: 0
    },
    {
        name: 'Herbal seeds pack',
        price: 400,
        tag: "fps/3.jpg",
        incart: 0
    },
    {
        name: 'Cactus-Pebble decor',
        price: 600,
        tag: "fps/9.jpg",
        incart: 0
    },
    {
        name: 'White-Ceramic Pot',
        price: 600,
        tag: "fps/5.jpg",
        incart: 0
    },
    {
        name: 'Rake & 2 shovel set',
        price: 790,
        tag: "fps/6.webp",
        incart: 0
    },
    {
        name: 'Roses plants set (five)',
        price: 1500,
        tag: "fps/7.jpg",
        incart: 0
    },
    {
        name: 'Hanging floral plants',
        price: 800,
        tag: "fps/8.jpg",
        incart: 0
    },



    {
        name: 'Zinnia F1 Elegans Purple - Flower Seeds',
        price: 70,
        tag: "shop/seeds/1a.webp",
        incart: 0
    },
    {
        name: 'Marigold Pusa Navrangi - Desi Flower Seeds',
        price:29,
        tag: "shop/seeds/2a.webp",
        incart: 0
    },
    {
        name: 'Gazania Sun Shine Mixed Color - Flower Seeds',
        price: 100,
        tag: "shop/seeds/3a.webp",
        incart: 0
    },
    {
        name: 'Celosia plumosa Mixed Color - Desi Flower Seeds',
        price:30,
        tag: "shop/seeds/4a.webp",
        incart: 0
    },
    {
        name: 'Spinach Green Sprouts - Microgreen Seeds',
        price: 200,
        tag: "shop/seeds/5a.webp",
        incart: 0
    },
    {
        name: 'Beet Root Dark Red - Desi Vegetable Seeds',
        price: 30,
        tag: "shop/seeds/6a.webp",
        incart: 0
    },
    {
        name: 'Kale Green Edible - Vegetable Seeds',
        price: 70,
        tag: "shop/seeds/7a.jpg",
        incart: 0
    },
    {
        name: 'Cauliflower F1 Hybrid - Vegetable Seeds',
        price: 200,
        tag: "shop/seeds/8a.webp",
        incart: 0
    },



    {
        name: '5.7 inch (14 cm) Apple Round Ceramic Pots - Pack of 2',
        price: 800,
        tag: "shop/pots/1a.webp",
        incart: 0
    },
    {
        name: '16 inch (41 cm) Grower Round Plastic Pot (Terracotta Color) (set of 3)',
        price: 429,
        tag: "shop/pots/2a.webp",
        incart: 0
    },
    {
        name: '3 inch (8 cm) Grower Round Plastic Pot',
        price: 400,
        tag: "shop/pots/3a.webp",
        incart: 0
    },
    {
        name: '17.7 inch (45 cm) Bowl No. 45 Round Plastic Pot (Black) (set of 3)',
        price: 500,
        tag: "shop/pots/4a.webp",
        incart: 0
    },
    {
        name: '17.7 inch (45 cm) Small Window Rectangle Plastic Pot (Black) (set of 3)',
        price: 300,
        tag: "shop/pots/5a.webp",
        incart: 0
    },
    {
        name: '7.9 inch (20 cm) Bello Railing D Shape plastic Planters (Mix Color) - Pack Of 6',
        price: 770,
        tag: "shop/pots/6a.jpg",
        incart: 0
    },
    {
        name: '11.3 inch (29 cm) Ronda No. 2926 Wooden Finish Round Plastic Planter (Brown)',
        price: 700,
        tag: "shop/pots/7a.webp",
        incart: 0
    },
    {
        name: '2.5 inch (6 cm) Square Glass Vase',
        price: 200,
        tag: "shop/pots/8a.webp",
        incart: 0
    },



    {
        name: 'Plant Nutrients Kit (Pack of 16) for Healthy Garden',
        price: 900,
        tag: "shop/fertilizers/1.webp",
        incart: 0
    },
    {
        name: 'Plant O Boost (Overall Growth Booster, 10 g) (set of 10)',
        price: 300,
        tag: "shop/fertilizers/2a.webp",
        incart: 0
    },
    {
        name: 'Pack of Plant Growth and Flower Boosters',
        price: 200,
        tag: "shop/fertilizers/3.webp",
        incart: 0
    },
    {
        name: 'Plant O Boost (Special Flower Booster, 10 g) (set of 10)',
        price: 100,
        tag: "shop/fertilizers/4.webp",
        incart: 0
    },
    {
        name: 'Vermicompost - 1 kg (Set of 2)',
        price: 200,
        tag: "shop/fertilizers/5.webp",
        incart: 0
    },
    {
        name: 'Nutrient-rich general purpose potting soil mix - 5 kg',
        price: 390,
        tag: "shop/fertilizers/6.webp",
        incart: 0
    },
    {
        name: 'Coco Peat Block - 4 kg (Expands Up to 60 - 70 L)',
        price: 300,
        tag: "shop/fertilizers/7.jpg",
        incart: 0
    },
    {
        name: 'General Purpose Garden Potting Soil Mix - 5 kg',
        price: 300,
        tag: "shop/fertilizers/8.webp",
        incart: 0
    },




    {
        name: 'Basic Garden Tool Kit - Gardening Tools',
        price: 700,
        tag: "shop/access/1.webp",
        incart: 0
    },
    {
        name: 'Pressure Sprayer (1.5 ltr) - Gardening Tool',
        price: 129,
        tag: "shop/access/2.webp",
        incart: 0
    },
    {
        name: 'Transplanting Trowel No. MMI 83 - Gardening Tool',
        price: 100,
        tag: "shop/access/3.webp",
        incart: 0
    },
    {
        name: 'Pruning Shear No. MMI 58 - Gardening Tool',
        price: 300,
        tag: "shop/access/4.webp",
        incart: 0
    },
    {
        name: 'Rake & 2 shovel set',
        price: 790,
        tag: "shop/access/5.webp",
        incart: 0
    },
    {
        name: 'Hedge Shear with Wooden Handle No. MMI-78 - Gardening Tool',
        price: 390,
        tag: "shop/access/6.jpg",
        incart: 0
    },
    {
        name: '2 inch (5 cm) Khurpa Steel Handle with Grip No. MMI 88 - Gardening Tool',
        price: 70,
        tag: "shop/access/7.webp",
        incart: 0
    },
    {
        name: 'Pruning Shear No. MMI 64 - Gardening Tool',
        price: 200,
        tag: "shop/access/8.webp",
        incart: 0
    },




    {
        name: 'Marble Chips Pebbles (Mix Color, Small, Polished) - 1 kg',
        price: 100,
        tag: "shop/pebbles/2.jpg",
        incart: 0
    },
    {
        name: 'Aquarium Pebbles (Blue, Small) - 1 kg',
        price: 99,
        tag: "shop/pebbles/1.webp",
        incart: 0
    },
    {
        name: 'Super Marble Pebbles (White, Small, Polished) - 1 kg',
        price: 200,
        tag: "shop/pebbles/3.webp",
        incart: 0
    },
    {
        name: 'Garden Pebbles (Mix Color, Small) - 1 kg',
        price: 300,
        tag: "shop/pebbles/4.webp",
        incart: 0
    },
    {
        name: 'Aquarium Pebbles (Yellow, Small) - 1 kg',
        price: 100,
        tag: "shop/pebbles/5.webp",
        incart: 0
    },
    {
        name: 'Stone Sand (White) - 1 kg',
        price: 170,
        tag: "shop/pebbles/6.jpg",
        incart: 0
    },
    {
        name: 'Super Granite Pebbles (Black, Medium, Polished) - 1 kg',
        price: 110,
        tag: "shop/pebbles/7.webp",
        incart: 0
    },
    {
        name: 'Onex Pebbles (Aqua Green Color, Medium) - 1 kg',
        price: 200,
        tag: "shop/pebbles/8.webp",
        incart: 0
    }




];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartnumbers(products[i]);
        totalcost(products[i]);
    })
}

function onloadcartnumbers() {
    let productnumbers = localStorage.getItem('cartnumbers');

    if (productnumbers) {
        document.querySelector('.main-cart span').textContent = productnumbers;

    }
}


function cartnumbers(product) {

    let productnumbers = localStorage.getItem('cartnumbers');

    productnumbers = parseInt(productnumbers);

    if (productnumbers) {
        localStorage.setItem('cartnumbers', productnumbers + 1);
        document.querySelector('.main-cart span').textContent = productnumbers + 1;
    } else {
        localStorage.setItem('cartnumbers', 1);
        document.querySelector('.main-cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsincart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {

        product.incart = 1;
        cartItems = {
            [product.tag]: product
        }

    }

    localStorage.setItem("productsincart", JSON.stringify(cartItems));
    console.log("My cart items are", cartItems);
}

function totalcost(product) {
    // console.log("price", product.price);
    let cartcost = localStorage.getItem('totalcost');

    console.log("my cartcost is", cartcost);
    console.log(typeof cartcost);

    if (cartcost != null) {
        cartcost = parseInt(cartcost);
        localStorage.setItem("totalcost", cartcost + product.price);
    } else {
        localStorage.setItem("totalcost", product.price);
    }

}





function displaycart() {
    let cartItems = localStorage.getItem("productsincart");
    cartItems = JSON.parse(cartItems);

    let productcontainer = document.querySelector(".products")

    console.log(cartItems);
    if (cartItems && productcontainer) {
        productcontainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productcontainer.innerHTML +=


        `<div class="cart-items products">
            <div class="cart-row">
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${item.tag}" width="100" height="100">
                    <span class="cart-item-title">${item.name}</span>
                </div>
                <span class="cart-price cart-column">₹${item.price},00</span>
                
            </div>
        </div>`
                
               
           
        }
        );
    }

}


displaycart();
onloadcartnumbers();

// cart end

// <img class="product-title" src=${item.tag}>

// 
{/* <div class="product">  
<img src=${item.tag}/>
<span class="cart-item-title">${item.name}</span>
</div>
<span class="cart-price cart-column">₹${item.price},00</span>
<div class="cart-quantity cart-column quantity">
<ion-icon name="arrow-up-circle-outline"> </ion-icon>
<span> ${item.incart}</span>
<ion-icon name="arrow-down-circle-outline"> </ion-icon>
</div>
<div><button class="btn btn-danger" type="button">REMOVE</button></div>` */}



//      
{/* <div class="product-container">
<div class="products">
<ion-icon name="trash-outline" class="product-title"></ion-icon>

<span class="product-title">
${item.name}
</span>
</div>
<div class="price">
₹${item.price},00
</div>
<div class="quantity">
<ion-icon name="arrow-up-circle-outline"> </ion-icon>
<span> 
${item.incart}
</span>
<ion-icon name="arrow-down-circle-outline"> </ion-icon>
</div>
<div class="total">
₹${item.incart * item.price},00
</div> 


<div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>

                <div class="total cart-price cart-column">₹${item.incart * item.price},00
                </div>

*/}
