<template>
  <div id="app">
  <Hero></Hero>
  </div>
</template>

<script>

import Hero from './components/Hero'

export default {
  name: 'App',
  components: {
   Hero,
  }
}
</script>

<style>

@font-face {
  font-family: 'Product Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
}


#app {
  font-family: Product Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
margin:0;
padding:0;
}
</style>
