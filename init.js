const app = Vue.createApp({
  data: function () {
    return {
      sitename: "Burger Store",
      product: {
        title: "Ham and Cheese burger",
        description: "Authentic burger with awesome taste.",
        price: 1239,
        quantity: 20,
        image: "burger.JPG",
        outOfStock: false
      }
    };
  },
  computed: {
    formatPrice: function () {
      const dollars = this.product.price / 100; // 20.00
      return dollars.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      }); //$20.00
    },
    lowPrice: function () {
      const price = this.product.price;
      if (price < 3000) {
        return true;
      } else {
        return false;
      }
    },
    inStock: function () {
      const inStock = this.product.quantity;
      if (inStock > 0) {
        return "In stock";
      } else {
        return "Out of stock";
      }
    },
    outStock: function () {
      const outofstock = this.product.quantity;
      if (outofstock === 0) {
        return "In Stock!";
      }
    }
  }
});

app.mount("#app");
