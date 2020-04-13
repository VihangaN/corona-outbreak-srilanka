<template>
<div id="container">
<section id="map">

   <div class="maptitle">Map title</div>
 
   <lkmap  class="lkmap"
   
 :color="'#0984e3'" 
 :hoverColor="'#d63031'"
 :strokeColor="'#fff'"
 :activeColor="'#ff7675'"
 :districts="['1','2','3','4','5','6','7','8','7','8','7','8','7','8','7','8','7','8']" 
   
   ></lkmap>
   
  
   </section>

    </div>
</template>

<script>
   
    export default {
        name: 'FooterPage',
        components: {
           
        }
    }
</script>

<style scoped>
section{
    height:100vh;
    margin-top:100px;
}
iframe{
    width:100%;
    height:100vh;
  border:none;
}
#tweet{
    /* overflow-y:scroll; overflow-x:hidden; */
}
.footerlink{
    color: white;
    font-size: medium;

}

ul li{
    display: inline-block;
    margin: 5px;
}
#fu{
    text-align:center;
    display:block;
}

.pb{
    text-align:center;
    font-size:18px;
}

.title{
    font-size: 100px;
    font-weight: bold;
}
 
 #map{
     height:100vh !important;
     position: absolute;
     margin-top:200px;
     width:100%;
 }
 .maptitle{
     text-align: center;
 }

 .twitter{
     position: absolute !important;
 }

 #twitter{
     position: relative;;
     height:100vh;
     width:80%;
     display: inline-block;
     background: chocolate !important;
 }

#container{
    width:100%;
    height:auto;
}

.lkmap{
    margin-top:60px ;
}

.maptitle{
    margin-top:-50px;
}
@media screen and (max-width: 550px){
   .lkmap{
    margin-top:10px ;
} 

.maptitle{
    margin-top:-50px;
}
}
</style>