
<template>
  <div id="product">
  <h1>{{title}}</h1>
      <img :src="iconUrl"/>
      <div v-for='(variant, index) in variants' :key='variant.variantId' class="color-box" :style='{backgroundColor: variant.variantColor}' @mouseover='updateProduct(index)'></div>
      <Info/>
  </div>
</template>

<script>
/* eslint-disable */
import Info from "./Info";

export default {
  components: {
    Info,
  },
  data() {
    return {
      image: "",
      brand: "Vue Socks",
      name: "Blue",
      selectedVariant: 0,
      inStock: false,
      variants: [
        {
          brand: "hello",
          variantId: 225,
          variantColor: "blue",
          variantSize: "9",
          variantImage: require("./assets/blue.jpg"),
          variantQuantity: 100,
        },
        {
          variantId: 331,
          variantColor: "green",
          variantSize: "8",
          variantImage: require("./assets/green.jpg"),
          variantQuantity: 0,
        },
      ],
    };
  },
  computed: {
    iconUrl() {
      return this.variants[this.selectedVariant].variantImage;
    },
    title() {
      return this.brand + " " + this.name;
    },
  },
  methods: {
    updateProduct(index) {
      return (this.selectedVariant = index);
    },
  },
};
</script>

<style>
img {
  height: 200px;
  width: 200px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin: 10px;
}
</style>

