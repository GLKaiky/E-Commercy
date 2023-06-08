function print(id, html = "<h1>TOMA NO CU</h1>") {
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML = html;
    }
}

// Obtém a URL atual
var urlParams = new URLSearchParams(window.location.search);

// Obtém o valor do parâmetro 'id'
var productId = urlParams.get('id');

// Fazer requisição na API e passar para o HTML
async function requestGET(id) {
    await fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(array => {
            var arr;
            array.forEach(element => {
                print("products",
                    `
                    <div 
                        class="col-lg-3 col-10 bg-light border "
                        style="margin-right: 70px; margin-top: 20px;"
                    >
                        <img src="${element.image}">
                        <h5 class="mt-2">${element.title}</h5>
                        <div class="valor7">
                            <h4>R$${element.price}</h4>
                            <h6>${element.category}</h6>
                            <a href="details.html?id=${element.id}">Detalhes</a>
                        </div>
                    </div>
                    `
                );
            });
        });

    // Utilize o valor do ID do produto para carregar as informações detalhadas do produto e exibi-las na página
    if (productId) {
        await fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(product => {
                print("product-details",
                    `
                    <h2>${product.title}</h2>
                    <img src="${product.image}">
                    <p>${product.description}</p>
                    <h4>Price: $${product.price}</h4>
                    <h5>Category: ${product.category}</h5>
                    `
                );
            });
    }
}

// Chamar a função requestGET
requestGET("products");
