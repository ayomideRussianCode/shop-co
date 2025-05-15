// src/api/dummyProductsApi.js

// Sample product image URLs
const productImages = {
    tshirt: 'https://cdnjs.cloudflare.com/ajax/libs/placekitten/2.0.0/grey/200/200.jpg', // Replace with actual placeholder in real app
    jeans: 'https://cdnjs.cloudflare.com/ajax/libs/placekitten/2.0.0/grey/200/201.jpg',
    checkeredShirt: 'https://cdnjs.cloudflare.com/ajax/libs/placekitten/2.0.0/grey/200/202.jpg',
    stripedTshirt: 'https://cdnjs.cloudflare.com/ajax/libs/placekitten/2.0.0/grey/200/203.jpg',
  };
  
  // Product data
  const productsData = [
    {
      id: 1,
      name: 'T-shirt with Tape Details',
      image: productImages.tshirt,
      rating: 4.5,
      reviews: 145,
      currentPrice: 120,
      originalPrice: null,
      discount: null,
      category: 'tshirts',
      inStock: true
    },
    {
      id: 2,
      name: 'Skinny Fit Jeans',
      image: productImages.jeans,
      rating: 4.2,
      reviews: 195,
      currentPrice: 240,
      originalPrice: 260,
      discount: 10,
      category: 'pants',
      inStock: true
    },
    {
      id: 3,
      name: 'Checkered Shirt',
      image: productImages.checkeredShirt,
      rating: 4.7,
      reviews: 140,
      currentPrice: 180,
      originalPrice: null,
      discount: null,
      category: 'shirts',
      inStock: true
    },
    {
      id: 4,
      name: 'Sleeve Striped T-shirt',
      image: productImages.stripedTshirt,
      rating: 4.6,
      reviews: 120,
      currentPrice: 130,
      originalPrice: 160,
      discount: 20,
      category: 'tshirts',
      inStock: true
    }
  ];
  
  // API functions
  
  /**
   * Simulates fetching all products with optional delay
   * @param {number} delay - Delay in milliseconds to simulate network latency
   * @returns {Promise} Promise that resolves to array of products
   */
  export const fetchProducts = (delay = 500) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, delay);
    });
  };
  
  /**
   * Simulates fetching a single product by ID
   * @param {number} id - Product ID to fetch
   * @param {number} delay - Delay in milliseconds to simulate network latency
   * @returns {Promise} Promise that resolves to a product or null
   */
  export const fetchProductById = (id, delay = 300) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = productsData.find(p => p.id === id) || null;
        resolve(product);
      }, delay);
    });
  };
  
  /**
   * Simulates fetching products by category
   * @param {string} category - Category to filter by
   * @param {number} delay - Delay in milliseconds to simulate network latency
   * @returns {Promise} Promise that resolves to filtered array of products
   */
  export const fetchProductsByCategory = (category, delay = 400) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = productsData.filter(p => p.category === category);
        resolve(filteredProducts);
      }, delay);
    });
  };
  
  /**
   * Simulates fetching new arrivals
   * @param {number} limit - Maximum number of products to return
   * @param {number} delay - Delay in milliseconds to simulate network latency
   * @returns {Promise} Promise that resolves to array of products
   */
  export const fetchNewArrivals = (limit = 4, delay = 600) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real API, you would sort by date and take the newest
        const newArrivals = [...productsData].slice(0, limit);
        resolve(newArrivals);
      }, delay);
    });
  };
  
  export default {
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory,
    fetchNewArrivals
  };