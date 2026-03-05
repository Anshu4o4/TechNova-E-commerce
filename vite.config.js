import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, 'shop.html'),
        product: resolve(__dirname, 'product.html'),
        cart: resolve(__dirname, 'cart.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        auth: resolve(__dirname, 'auth.html'),
        categories: resolve(__dirname, 'categories.html'),
        deals: resolve(__dirname, 'deals.html'),
        wishlist: resolve(__dirname, 'wishlist.html'),
      },
    },
  },
});
