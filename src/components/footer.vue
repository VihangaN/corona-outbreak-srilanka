<template>
    <mdb-footer color="blue" class="font-small pt-4 mt-4">
        <mdb-container class="text-left">
            <mdb-row>
                <mdb-col sm="6">
                    <h2 class="title">OPENMIC 24x7</h2>
                    <p>Here you can use rows and columns here to organize your footer content.</p>
                </mdb-col>
                <mdb-col sm="6">
                    <h5 class="title">Links</h5>
                    <ul>
                        <li  class="list-unstyled">  <a class="footerlink" href="#!">Twitter</a></li>
                        <li  class="list-unstyled"> <a class="footerlink" href="#!">FaceBook</a></li>
                        <li class="list-unstyled"><a class="footerlink" href="#!">Instagram</a></li>
                        <li class="list-unstyled"><a class="footerlink" href="#!">Email</a></li>
                    </ul>
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </mdb-footer>
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
.footerlink{
    color: black;
    font-size: medium;
    font-style: oblique;
}
</style>