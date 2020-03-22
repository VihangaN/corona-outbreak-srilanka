<template>
  <v-app>
   <hero></hero>
   <summery></summery>
  </v-app>
</template>

<script>
import hero from './components/Hero.vue'
import summery from './components/summery'

export default {
  name: 'App',

  components: {
    hero,
    summery
  },

  data: () => ({
    //
  }),
};
</script>
