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
async function requestGET() {
    await fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(array => {
            var arr;
            array.forEach(element => {
                print("products",
                    `
                    <div 
                    class="col-lg-3 col-10 bg-light border " style="margin-right: 70px; margin-top: 20px;" >
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
            .then(element => {
                print("product-details",
                    `
                

                    <div class="row>
                <div class="col-lg-3 col-10 bg-light border" style="margin-right: 0px; margin-top: 20px;">
                <img style="margin-top:55px; margin-left: 55px;" src="${element.image}">

                <div class="col-lg-5 col-10 bg-dark border" style="float: right; color:white; margin-top:20px; margin-right:35px">
                <h5 style="margin-left:15px;" class="mt-2">${element.title}</h5>
                <p style="margin-left:15px;">ID do Produto: ${element.id}</p>
                <br><br>
                 <h6>Melhor da categoria!</h6>
                 <br><br>
                 <p style="margin-left: 15px;">${element.description}</p style="margin-left: 15px;">
                <br><br><br><br><br><br>
                
                
            <div style="margin-left:15px;"class="valor7">
         <h4 style="color: green;">R$${element.price * 5},00 à vista</h4>
            <p>12x de ${(element.price / 12).toFixed(2)} sem juros </p>
            <h6>${element.category}</h6>
                </div>
                <button style="width: 140px; height: 50px;" class="botao1">Comprar</button></a>
                </div>
                </div>

               
                </div>
                
                
                
                `
                );
            });
    }

}

// Chamar a função requestGET
requestGET("products")