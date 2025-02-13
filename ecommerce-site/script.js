const products = [
    {
        id: 1,
        name: "Miss Brasil 2024",
        images: [
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Japan 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 100.00
    },
    {
        id: 2,
        name: "Miss Japan 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 200.00
    },
    {
        id: 3,
        name: "Miss Russia 2024",
        images: [
            "img/Miss Russia 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Japan 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 300.00
    },
    {
        id: 4,
        name: "Miss Ukraine 2024",
        images: [
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Japan 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 400.00
    },
    {
        id: 5,
        name: "Miss USA 2024",
        images: [
            "img/Miss USA 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Japan 2024.jpg", 
            "img/Miss Russia 2024.jpg",
        ],
        price: 500.00
    },
    {
        id: 6,
        name: "Miss França 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 150.00
    },
    {
        id: 7,
        name: "Miss Alemanha 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 250.00
    },
    {
        id: 8,
        name: "Miss Itália 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 350.00
    },
    {
        id: 9,
        name: "Miss Espanha 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 450.00
    },
    {
        id: 10,
        name: "Miss Canadá 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 550.00
    },
    {
        id: 11,
        name: "Miss Austrália 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 650.00
    },
    {
        id: 12,
        name: "Miss Índia 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 750.00
    },
    {
        id: 13,
        name: "Miss África do Sul 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 850.00
    },
    {
        id: 14,
        name: "Miss Nova Zelândia 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 950.00
    },
    {
        id: 15,
        name: "Miss Portugal 2024",
        images: [
            "img/Miss Japan 2024.jpg", 
            "img/Miss Brasil 2024.jpg", 
            "img/Miss Russia 2024.jpg", 
            "img/Miss Ukraine 2024.jpg", 
            "img/Miss USA 2024.jpg"
        ],
        price: 1050.00
    }
];

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} adicionado ao carrinho!`);
}

function renderProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = '';

    // Limitar para 15 produtos (5 colunas * 3 linhas)
    const limitedProducts = products.slice(0, 15);

    limitedProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        
        productDiv.innerHTML = `
            <div id="carousel-${product.id}" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    ${product.images.map((img, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${img}" class="d-block w-100" alt="${product.name}">
                        </div>
                    `).join('')}
                </div>
                <a class="carousel-control-prev" href="#carousel-${product.id}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-${product.id}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <h3>${product.name}</h3>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        
        productGrid.appendChild(productDiv);
    });
    let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} adicionado ao carrinho!`);
}

function viewCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ''; // Limpa itens anteriores

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        cart.forEach(item => {
            cartItemsContainer.innerHTML += `
                <div>
                    <h5>${item.name}</h5>
                    <p>Preço: R$ ${item.price.toFixed(2)}</p>
                </div>
            `;
        });
    }

    $('#cartModal').modal('show'); // Exibe o modal do carrinho
    }

    function proceedToPayment() {
        alert("Opções de pagamento: Cartão de crédito, PayPal, Boleto.");
    }

// Renderiza os produtos ao carregar a página
document.addEventListener('DOMContentLoaded', renderProducts);

}

// Renderiza os produtos ao carregar a página
document.addEventListener('DOMContentLoaded', renderProducts);
