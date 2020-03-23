<template>
    <section>
      
           <div class="container">
               <div class="row">
                   <div class="col-12 col-md-6">
<iframe src="https://www.google.com/maps/d/embed?mid=1UPMGC3gKiJTlSPusbfnW3XcECxyLv8f1">
        </iframe>
    
                   </div>
                   <div class="col-12 col-md-6" id="tweet">

    <twitter style="height:100vh">
    <div slot="loading">loading .....</div>
   <a class="twitter-timeline" data-lang="en" data-width="100%" data-height="100vh" data-dnt="true" data-theme="dark" href="https://twitter.com/OPENMIC24x7?ref_src=twsrc%5Etfw">Tweets by OPENMIC24x7</a>
  </twitter>

                   </div>


                  
               </div>
           </div>


        <mdb-footer class="font-small footerhead pt-4 mt-4">
            <mdb-container class="text-left">
                <mdb-row>
                    <mdb-col sm="6">
                        <h3 class="">Powered by Health Promotion Bureau & Department of Government Information - Sri Lanka <br/>OPENMIC 24x7 🇱🇰</h3>
                    </mdb-col>
                    <mdb-col sm="6">
                        <tr>
                            <td  class="list-unstyled"> Follow Us:</td>
                            <td width="10"></td>
                            <td  class="list-unstyled">  <a class="footerlink" href="https://twitter.com/OPENMIC24x7">@Twitter</a></td>
                           <td width="10"></td>
                            <td  class="list-unstyled"> <a class="footerlink" href="https://www.facebook.com/OPENMICDigital">@Facebook</a></td>
                            <td width="10"></td>
                            <td class="list-unstyled"><a class="footerlink" href="https://www.instagram.com/openmiclk/">@Instagram</a></td>
                            <td width="10"></td>
                            <td class="list-unstyled"><a class="footerlink" href="https://www.youtube.com/openmiclk">@YouTube</a></td>
                            <td width="10"></td>
                            <td class="list-unstyled"><a class="footerlink" href="https://www.linkedin.com/company/30989692/admin/analytics/visitors/">@Linkedin</a></td>
                        </tr>
                    </mdb-col>
                </mdb-row>
            </mdb-container>
            <div class="footer-copyright footerlast text-center py-3">
                <mdb-container fluid>
                    <h3>OPENMIC Digital Media </h3>
                </mdb-container>
            </div>
        </mdb-footer>
       
    </section>
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