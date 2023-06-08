// Colocar coisa do js pro html OK
function print(id, html = "<h1>TOMA NO CU</h1>") {
    document.getElementById(id).innerHTML += html
}
// Fazer requisição na API e passar pro html
async function requestGET() {
    await fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(
            (array) => {
                var arr
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
                    )
                });

            }
        )
    await fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then(
            (array) => {
                var arr
                array.forEach(element => {
                    print("visto",
                        `
                        <div class="col-lg-12 col-12 border bg-light">

                <div class="item1">
                    <h6>Melhores preços!</h6>
                    <a style="margin-left:30px; margin-top:15px" href="details.html?id=${element.id}">Detalhes</a>
                </div>
                <img style="Margin-top: 25px;" src="${element.image}">
                    
                <div class="preco1">
                    <h4>R$${element.price}</h4>
                </div>
            </div>
                        `
                    )
                });

            }
        )
}

requestGET()