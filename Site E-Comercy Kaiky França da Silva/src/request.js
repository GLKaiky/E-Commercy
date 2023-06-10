function print(id, html = "<h1>TOMA NO CU</h1>") {
    document.getElementById(id).innerHTML += html;
  }
  
  function requestCleanGET(url) {
    return fetch(url)
      .then(res => res.json())
  }

  
  
  async function requestGET() {
    await fetch('https://fakestoreapi.com/products/category/electronics')
      .then(res => res.json())
      .then((array) => {
        array.forEach(element => {
          print("products", `
              <div class="col-lg-2 col-md-4 col-12 bg-light border" style="margin-right: 70px; margin-top: 20px; padding:20px">
                <div row>
                  <a href="detalhes.html?id=${element.id}"><button style="width: 240px; height: 50px;" class="botao1">Detalhes</button></a>
                </div>
                <img style="width: 140px; height: 120px" src="${element.image}">
                <h5 class="mt-2">${element.title}</h5>
                <div class="valor7">
                  <h4 style="color: green;">R$${element.price * 5},00 à vista</h4>
                  <p>12x de ${(element.price / 12).toFixed(2)} sem juros </p>
                  <h6>${element.category}</h6>
                </div>
              </div>
            `);
        });
      });
  
  }
  
  requestGET();

  function print(id, html) {
    document.getElementById(id).innerHTML += html;
  }
  
  function requestCleanGET(url) {
    return fetch(url)
      .then(res => res.json());
  }

  
  
  async function requestGET() {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics');
    const array = await response.json();
  
    array.forEach(element => {
      print("products", 
      `
      <div class="col-lg-2 col-md-4 col-12 bg-light border" style="margin-right: 70px; margin-top: 20px; padding:20px">
      <div row>
        <a href="detalhes.html?id=${element.id}"><button style="width: 140px; height: 50px;" class="botao1">Detalhes</button></a>
      </div>
      <img style="width: 140px; height: 120px; margin-top:20px;" src="${element.image}">
      <h5 class="mt-2">${element.title}</h5>
      <div class="valor7">
        <h4 style="color: green;">R$${element.price * 5},00 à vista</h4>
        <p>12x de ${(element.price / 12).toFixed(2)} sem juros </p>
        <h6>${element.category}</h6>
      </div>
    </div>
  `
  );
});
  }

  
  
  requestGET();
  
  document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Limpa os resultados anteriores
    
  
    fetch('https://fakestoreapi.com/products/category/electronics ')
      .then(res => res.json())
      .then(array => {
        const matchingProducts = array.filter(element => element.title.toLowerCase().includes(searchTerm));
        if (matchingProducts.length === 0) {
          alert("Nenhum resultado encontrado.");
          return location.reload();
        } else {
          matchingProducts.forEach(element => {
            print("products", `
              <div class="col-lg-2 col-md-4 col-12 bg-light border" style="margin-right: 70px; margin-top: 20px; padding:20px">
                
                  <a href="detalhes.html?id=${element.id}"><button style="width: 240px; height: 50px;" class="botao1">Detalhes</button></a>
                
                <img style="width: 140px; height: 120px" src="${element.image}">
                <h5 class="mt-2">${element.title}</h5>
                <div class="valor7">
                  <h4 style="color: green;">R$${element.price * 5},00 à vista</h4>
                  <p>12x de ${(element.price / 12).toFixed(2)} sem juros </p>
                  <h6>${element.category}</h6>
                </div>
              </div>
            `);
          });
        }
      })
      .catch(error => {
        alert('Erro ao buscar os produtos:', error);
      });
  });
  
  