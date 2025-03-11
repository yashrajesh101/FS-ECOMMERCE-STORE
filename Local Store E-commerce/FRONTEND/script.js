document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:8080/api/products")
        .then(response => response.json())
        .then(data => {
            let productList = document.getElementById("product-list");
            data.forEach(product => {
                let productCard = `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">₹${product.price}</p>
                                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
                productList.innerHTML += productCard;
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});

function addToCart(productId) {
    alert("Added to Cart: " + productId);
}
