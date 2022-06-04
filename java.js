
const productsList = document.getElementById('productsList');
const searchBar = document.getElementById('searchBar');
let products = [];

searchBar.addEventListener('keyup',(e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = products.filter((charcter) => {
        return (
            charcter.title.toLowerCase().includes(searchString) || charcter.description.toLowerCase().includes(searchString)
        );
    });
    displayProducts(filteredProducts);
});

const loadProducts = async () => {
    try {
        const res = await fetch('product_dummy_data.txt');
        products = await res.json();
        displayProducts(products);
    } catch (err) {
        console.error(err);
    }
};

const displayProducts = (products1) => {
    const htmlString = products1
        .map((product) => {
            return `
            <li class="product">
                <h2>${product.title}</h2>
                <p>Category: ${product.category}
                <br><br>Description: ${product.description}
                <br><br>Price: ${product.price}
                <br><br>Rating: ${product.rating}</p>
                <img src="${product.images[0]}"></img>
            </li>
        `;
        })
        .join('');
    productsList.innerHTML = htmlString;
};

loadProducts();