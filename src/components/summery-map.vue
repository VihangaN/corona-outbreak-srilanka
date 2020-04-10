<template>
<div>
    <section>
      
           <div class="container">
               <div class="row">
                   <div class="col-12">

                   </div>
                    <div class="col-12" id="tweet">

    <twitter style="height:100vh">
    <div slot="loading">loading .....</div>
   <a class="twitter-timeline" data-lang="en" data-width="100%" data-height="100vh" data-dnt="true" data-theme="dark" href="https://twitter.com/OPENMIC24x7?ref_src=twsrc%5Etfw">Tweets by OPENMIC24x7</a>
  </twitter>

                   </div>


                  
               </div>
           </div>

</section>

        <mdb-footer class="font-small footerhead pt-4 mt-4">
            <mdb-container class="text-left">
                <mdb-row>
                    <mdb-col sm="6">
                        <h3 class="pb">Powered by Health Promotion Bureau & Department of Government Information - Sri Lanka <br/>OPENMIC 24x7 🇱🇰</h3>
                    </mdb-col>
                    <mdb-col sm="6">
                        <ul>
                            <li  class="list-unstyled" id="fu"> Follow Us:</li>
                            <li width="10"></li>
                            <br>
                            <li  class="list-unstyled">  <a class="footerlink" href="https://twitter.com/OPENMIC24x7">@Twitter</a></li>
                           <li width="10"></li>
                            <li  class="list-unstyled"> <a class="footerlink" href="https://www.facebook.com/OPENMICDigital">@Facebook</a></li>
                            <li width="10"></li>
                            <li class="list-unstyled"><a class="footerlink" href="https://www.instagram.com/openmiclk/">@Instagram</a></li>
                            <li width="10"></li>
                            <li class="list-unstyled"><a class="footerlink" href="https://www.youtube.com/openmiclk">@YouTube</a></li>
                            <li width="10"></li>
                            <li class="list-unstyled"><a class="footerlink" href="https://www.linkedin.com/company/30989692/admin/analytics/visitors/">@Linkedin</a></li>
                        </ul>
                    </mdb-col>
                </mdb-row>
            </mdb-container>
            <div class="footer-copyright footerlast text-center py-3">
                <mdb-container fluid>
                    <h3>OPENMIC Digital Media </h3>
                </mdb-container>
            </div>
        </mdb-footer>
       
  
    </div>
</template>

<script>
    import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
    export default {
        name: 'FooterPage',
        components: {
            mdbFooter,
            mdbContainer,
            mdbRow,
            mdbCol
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
    .footerlast{
        background-color: #6451cf;
        color: white;
    }
.footerhead{
    background-color: #1d2331;
    color: white;
}
</style>