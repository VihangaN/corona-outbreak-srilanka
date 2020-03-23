<template>
    <video-bg :sources="['https://videohost-cubsl.000webhostapp.com/cvexplain.mp4']" img="demo/assets/bg.jpg">
        <div id="hero">
            <div class="main_title">
                COVID-19 Live Tracker Sri Lanka

            </div>

            <img id="logo" src="../assets/logo_openmic.png" alt="" class="center">

            <a href="#summery"><button id="view">View</button></a>
        </div>

    </video-bg>



</template>

<script>

    export default {

    }
</script>

<style scoped>

    *{
        margin:0;
        padding: 0;
    }
    #hero{
        height:100vh;
        background: #409bf0be;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main_title{
        font-size: 50px;
        font-weight: 600;
        color:#ffffff;
        margin-top: -52px;
    }

    #logo{
        width: 150px;
        display: block;
        display: -ms-flexbox;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 30%;
        height: 30%;
        width: 20%;
        margin-left: auto;
        margin-right: auto;
    }

    #view{
        width: 150px;
        display: block;
        display: -ms-flexbox;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 65%;
        background:#ffffff00;
        padding:10px;
        border:4px solid #fff;
        color:#fff;
        border-radius: 40px;
        font-size:20px;
        font-weight: 800;
        outline: none;
        transition: 1s;
        margin-left: auto;
        margin-right: auto;
    }

    #view:hover{
        background:#fff;
        color:#4e4d4d;
        transition: 1s;
    }

    @media screen  and (max-width:720px){
        .main_title{
            font-size:35px;

        }
    }

    @media screen  and (max-width:495px){
        .main_title{
            font-size:30px;
            text-align: center;
            display: block;

        }
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }


</style>