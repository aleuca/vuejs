
<template>
  <div id="app">
  </div>
</template>

<script defer>
/* eslint-disable */
export default {
  data() {
    return {
      premium: false,
      cart: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    takeOutOfCart(id) {
      this.cart.pop(id);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

