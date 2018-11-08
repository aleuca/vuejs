Vue.component('product', {
  template: `
  <div class="product">
            <h1>{{title}}</h1>
            <div class="product-image">
                <img :src='image' class='image' />
                <a :href='link'>
            </div>

            <div class="product-info">
                <div v-for='(variant, index) in variants' :key='variant.variantId' class="color-box" :style='{backgroundColor: variant.variantColor}'
                    @mouseover='updateProduct(index)'>
                </div>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <!-- <p v-show='(variant, index) in variants'>{{inStock}}</p> -->
                <!-- <p v-else-if="inventory < 10 && inventory > 0">Almost out!</p> -->
                <p :class="{'out-of-stock': !inStock}">In Stock</p>
                <p v-if='onSale'>{{onSaleTrue}}</p>
            </div>

        <button v-on:click="addToCart" :disabled="!inStock" :class="{'disabled-button': !inStock}">Add to Cart</button>
        <button v-on:click='takeOutOfCart'>delete Item from Cart</button>

        <div class="cart">
            <p>Cart({{cart}})</p>
        </div>
    </div>
  `,
  data() {
    {
      return {
        product: 'Socks',
        brand: "vue",
        selectedVariant: 0,
        link: 'https://linuxacademy.com/',
        inventory: 500,
        details: ["80%cotton", "20% polyester"],
        onSale: false,
        variants:
          [
            {
              variantId: 225,
              variantColor: 'blue',
              variantSize: '9',
              variantImage: './assets/blue.jpg',
              variantQuantity: 100
            },
            {
              variantId: 331,
              variantColor: 'green',
              variantSize: '8',
              variantImage: './assets/green.jpg',
              variantQuantity: 0
            }
          ],
        cart: 0
      }
    }
  },

  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
      console.log(index)
    },
    takeOutOfCart() {
      this.cart -= 1
    },
  },

  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSaleTrue() {
      return this.brand + ' ' + this.product
    }
  }
})


let app = new Vue({
  el: '#app',
  cart: 0
})