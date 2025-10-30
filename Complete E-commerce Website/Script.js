 const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const products = document.querySelectorAll('.product');

    function filterProducts() {
      const searchValue = searchInput.value.toLowerCase();
      const selectedCategory = categoryFilter.value;

      products.forEach(product => {
        const name = product.querySelector('h4').textContent.toLowerCase();
        const category = product.getAttribute('data-category');

        if ((selectedCategory === 'all' || category === selectedCategory) &&
            name.includes(searchValue)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }

    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);