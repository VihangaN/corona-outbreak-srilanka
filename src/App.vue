<template>
  <v-app>
    <v-container fluid ma-0 pa-0>
   <hero></hero>
   <summery></summery>
<section>
   <summerymap></summerymap>
   </section>
<section id="twitter">
  
 <twit id="tcontainer"></twit>
 
  
    
</section>
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

#twitter{
  margin-top:1000px;
  width:100%;
  left:50%;
  position: absolute;
  transform: translate(-50%);
  background: #292F33;

}

#tcontainer{
  width:90%;
    left:50%;
  position: relative;
  transform: translate(-50%);
}

</style>
