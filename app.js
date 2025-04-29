// Sample Product Data (Replace with your actual product information)
const products = [
    {
        id: 1,
        name: "Organic Green Big Capsicum",
        quantityInfo: "1000gm",
        price: 24.00,
        imageUrl: "./capsicum.jpg", // Replace with actual image path
        bestDate: false // true or false if it has a "Best Date" label
    },
    {
        id: 2,
        name: "Seoul Topokki",
        quantityInfo: "1000gm",
        price: 24.00,
        imageUrl: "./fideos.jpg", // Replace with actual image path
        bestDate: true
    },
     {
        id: 3,
        name: "Cavendish banana Malaysia",
        quantityInfo: "1000gm",
        price: 0.40,
        imageUrl: "./banana.jpg", // Replace with actual image path
        bestDate: false
    },
     {
        id: 4,
        name: "Organic 100% Italian avocado",
        quantityInfo: "1000gm", // Adjust quantity info as needed
        price: 12.35,
        imageUrl: "./avocado.jpg", // Replace with actual image path
        bestDate: false
    },
    // Add more product objects here following the same structure
    {
        id: 5,
        name: "Mahin Brand Basmati Rice",
        quantityInfo: "1000gm",
        price: 24.00,
        imageUrl: "./rice.jpg", // Replace with actual image path
        bestDate: false
    },
     {
        id: 6,
        name: "Mehfil Basmati Extra Long Grain",
        quantityInfo: "1000gm",
        price: 13.25,
        imageUrl: "./basmati.jpg", // Replace with actual image path
        bestDate: false
    },
     {
        id: 7,
        name: "Lemon Big Size",
        quantityInfo: "1000gm", // Adjust
        price: 4.40,
        imageUrl: "./lemon.jpg", // Replace with actual image path
        bestDate: false
    },
    // ... add all other products from the image
];

// Function to render products on the page
function renderProducts(productsToRender) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Clear existing products before rendering

    productsToRender.forEach(product => {
        // Create the main product card div
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Create image element
        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.name;
        productCard.appendChild(img);

        // Add "Best Date" label if applicable
        if (product.bestDate) {
             const bestDateSpan = document.createElement('span');
             bestDateSpan.classList.add('best-date');
             bestDateSpan.textContent = 'Best Date';
             productCard.appendChild(bestDateSpan);
        }


        // Create product name element
        const name = document.createElement('h3');
        name.textContent = product.name;
        productCard.appendChild(name);

        // Create quantity info element
         const quantityInfo = document.createElement('p');
         quantityInfo.classList.add('quantity-info');
         quantityInfo.textContent = product.quantityInfo;
         productCard.appendChild(quantityInfo);


        // Create price and add button container
        const priceAddContainer = document.createElement('div');
        priceAddContainer.classList.add('price-add');

        // Create price element
        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = `$${product.price.toFixed(2)}`; // Format price
        priceAddContainer.appendChild(price);

        // Create add button
        const addButton = document.createElement('button');
        addButton.classList.add('add-button');
        addButton.innerHTML = '<i class="fas fa-plus"></i>'; // Plus icon
        // You would add an event listener here for adding to cart
        // addButton.addEventListener('click', () => {
        //     addToCart(product.id); // Call your add to cart function
        // });
        priceAddContainer.appendChild(addButton);

        // Append price and add button container to card
        productCard.appendChild(priceAddContainer);

        // Append the complete product card to the container
        productsContainer.appendChild(productCard);
    });
}

// --- Functions you would implement for dynamic features ---

// Example: Add to Cart function (Placeholder)
function addToCart(productId) {
    console.log(`Product with ID ${productId} added to cart.`);
    // Implement actual cart logic here (e.g., update cart state, local storage)
}

// Example: Filter Products function (Placeholder)
function filterProducts(category) {
    console.log(`Filtering products by category: ${category}`);
    // Implement filtering logic and then call renderProducts() with filtered data
    // renderProducts(filteredData);
}

// Example: Sort Products function (Placeholder)
function sortProducts(criteria) {
     console.log(`Sorting products by: ${criteria}`);
     // Implement sorting logic and then call renderProducts() with sorted data
    // renderProducts(sortedData);
}


// --- Initial Render ---
// Render all products when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);

    // You could add event listeners to the filter and sort elements here
    // const categoryFilter = document.querySelector('.filter');
    // categoryFilter.addEventListener('click', () => {
    //     // Get selected category and call filterProducts()
    // });
    // const sortFilter = document.querySelector('.sort');
    // sortFilter.addEventListener('click', () => {
    //     // Get selected criteria and call sortProducts()
    // });
});
