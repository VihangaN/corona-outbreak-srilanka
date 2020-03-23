<template>
  <v-app>
    <v-container fluid ma-0 pa-0>
   <hero></hero>
   <summery></summery>

   <summerymap></summerymap>
        <br/>

    </v-container>
  </v-app>
</template>

<script>
import hero from './components/Hero.vue'
import summery from './components/summery'
//import hospital from './components/footer'
import summerymap from './components/summery-map'


export default {
  name: 'App',

  components: {
    hero,
    summery,
   // hospital,
    summerymap,
   
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
*{
  scroll-behavior: smooth;
}
</style>
