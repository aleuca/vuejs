import Vue from 'vue'
import App from './App'
import Info from './Info'
import Product from './Product'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
window.onload = function () {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })

  new Vue({
    el: "#info",
    router,
    components: { Info },
    template: "<Info/>",
  })

  new Vue({
    el: "#product",
    router,
    components: { Product },
    template: "<Product/>"
  })
}

// Vue.component('product', {
//   props: {
//     premium: {
//       type: Boolean,
//       required: true,
//     }
//   },
//   template: `
//     <div class="product">
//             <h1>{{title}}</h1>
//             <div class="product-image">
//                 <img :src='image' class='image' />
//                 <a :href='link'>
//             </div>
//             <div>
//               <div class="product-info">
//                 <div v-for='(variant, index) in variants' :key='variant.variantId' class="color-box" :style='{backgroundColor: variant.variantColor}'
//                 @mouseover='updateProduct(index)'>
//                 </div>
//                 <p :class="{'out-of-stock': !inStock}">In Stock</p>
//                 <p>Shipping: {{shipping}}</p>
//                 <p v-if='onSale'>{{onSaleTrue}}</p>
//                 <product-details :details="details" v-for='detail in details'>{{detail}}</product-details>
//                 <product-review></product-review>
//               </div>
//             </div>
//       <button v-on:click="addToCart" :disabled="!inStock" :class="{'disabled-button': !inStock}">Add to Cart</button>
//       <button v-on:click='removeFromCart'>delete Item from Cart</button>
//     </div>
//   `,
//   data() {
//     {
//       return {
//         product: 'Socks',
//         brand: "vue",
//         selectedVariant: 0,
//         link: 'https://linuxacademy.com/',
//         inventory: 500,
//         onSale: false,
//         variants:
//           [
//             {
//               variantId: 225,
//               variantColor: 'blue',
//               variantSize: '9',
//               variantImage: './assets/blue.jpg',
//               variantQuantity: 100
//             },
//             {
//               variantId: 331,
//               variantColor: 'green',
//               variantSize: '8',
//               variantImage: './assets/green.jpg',
//               variantQuantity: 0
//             }
//           ],
//       }
//     }
//   },

//   methods: {
//     addToCart() {
//       this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
//     },
//     removeFromCart() {
//       this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
//     },
//     updateProduct(index) {
//       this.selectedVariant = index
//     },
//   },

//   computed: {
//     title() {
//       return this.brand + ' ' + this.product
//     },
//     image() {
//       return this.variants[this.selectedVariant].variantImage
//     },
//     inStock() {
//       return this.variants[this.selectedVariant].variantQuantity
//     },
//     onSaleTrue() {
//       return this.brand + ' ' + this.product
//     },
//     shipping() {
//       if (this.premium) {
//         return 'free'
//       }
//       return 2.99
//     }
//   }
// })


// let app = new Vue({
//   el: '#app',
//   data: {
//     premium: false,
//     cart: []
//   },
//   methods: {
//     updateCart(id) {
//       this.cart.push(id)
//     },
//     takeOutOfCart(id) {
//       this.cart.pop(id)
//     },
//   }
// })

// Vue.component('product-details', {
//   props: {
//     details: {
//       type: Array,
//       required: true
//     }
//   },
//   template:
//     `
//       <ul>
//         <li v-for="detail in details">{{detail}}</li>
//       </ul>
//   `,
//   data() {
//     return {
//       details
//     }
//   }
// })

// let productDetails = new Vue({
//   el: '#product-info',
//   data: {
//     datails:
//       ["80%cotton", "20% polyester"]
//   }
// })

// Vue.component('product-review', {
//   template: `
//   <input v-model="name">
//   `,
//   data() {
//     return {
//       name: null
//     }
//   }
// })