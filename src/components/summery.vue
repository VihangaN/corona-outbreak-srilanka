<template>
    <section id="summery">
       
         <br>
        <div class="container mx-auto">
              <div class="row" id="title-summery">
        <div class="main_title text-center">
           Current summery
        </div>
        
    

        <div id="switch">
          <span id="toggle">  Srilanka </span>  <v-switch  v-model="switch1" inset ></v-switch> Global
           
        </div>
         </div>
         <br>
            <div class="row">
                <div class="col-12 col-xs-12 col-sm-4 col-lg-4">

                    <div id="card" class="infected">
                        <div id="content">
                        <img src="../assets/corona.svg" alt="" id="title">
                            <br>
                            <span class="new">
                                නව ආසාදිතයන්
                            </span>
                            <span class="new-number">
                                5
                            </span>
                            <span class="all">
                                මුලු ආසාදිතයන්
                            </span>
                             <span class="all-number">
                                77
                            </span>
                        </div>
                           
                    </div>
                </div>



                <div class="col-12 col-xs-12 col-sm-4 col-lg-4">
                    <div id="card" class="death">
                        <div id="content">
                        <img src="../assets/coroner.svg" alt="" id="title">
                            <br>
                            <span class="new">
                                නව මරණ
                            </span>
                            <span class="new-number">
                                0
                            </span>
                            <span class="all">
                                මුලු මරණ
                            </span>
                             <span class="all-number">
                                0
                            </span>
                        </div>
                           
                    </div>
                </div>


                <div class="col-12 col-xs-12 col-sm-4 col-lg-4">
                       <div id="card" class="recovered">
                        <div id="content">
                        <img src="../assets/recovered.svg" alt="" id="title">
                            <br>
                            <span class="new">
                               සුවය ලැබූවන්
                            </span>
                            <span class="new-number">
                                1
                            </span>
                           
                        </div>
                           
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {

    data () {
    return {
      switch1: false,
     
    }
  },
    
}
</script>

<style scoped>

*{
    margin:0;
    padding: 0;
}

.number{
    margin-top:70px;
    font-size: 60px;
}
#summery{
    height:100vh;
    background: #409bf0;
    /* display: flex;
    justify-content: center; */
}
.main_title{
 text-align: center;
font-size: 30px;
color:#ffffff;
width:100%;
}

#title-summery{
    margin-top:70px;
   
}

#sl, #gl{
    background: chartreuse;
    padding:10px;
    width:100px;
    margin-left:2px;
    outline: none;
}

#sl{
    border-top-left-radius: 40px;
     border-bottom-left-radius: 40px;
}

#gl{
    
    border-top-right-radius: 40px;
     border-bottom-right-radius: 40px;

}
#switch{
   margin-top:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    font-size: 20px;
}
#card{
    width:100%;
   
    height:400px;
   display: flex;
  justify-content: center;
  align-items:flex-start;
  border-radius: 12px;
    
}

.infected{
background-color: #ffa502;
}

.death{
background-color: #ff4757;
}

.recovered{
background-color: #2ed573;
}

#content{
  /* display: block; */
 text-align: center;
}

#title{
    width:50px;
    margin-top:40px;
  
}
.new{
    text-align: center;
    margin-top:20px;
    display: block;
    color:#fff;
    font-weight:400;
    font-size:30px;
  
}

.new-number{
    text-align: center;
    margin-top:20px;
    display: block;
    color:#fff;
    font-weight:600;
    font-size:30px;
  
}

.all{
    text-align: center;
    margin-top:20px;
    display: block;
    color:#fff;
    font-weight:400;
    font-size:22px;
  
}

#toggle{
    padding:10px;
    margin-left:10px;
}

.all-number{
    text-align: center;
    margin-top:20px;
    display: block;
    color:#fff;
    font-weight:600;
    font-size:30px;
  
}
</style>