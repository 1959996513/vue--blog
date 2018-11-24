<template>
  <div class="zhuye">
  <div id='boxss'>
    <h1 style='color: #0086b3;padding-left: 20px;'><p style="font-size: 18px;font-family: '黑体-繁';">刘虎木博客</p><p style="font-size:8px;">ssss.1314.com</p></h1>
    <left></left>
  </div>
    <div class='zhu'>
    <div id="app">
      <router-view/>
    </div>
    </div>
  </div>

</template>

<script>

  import Left from '@/components/common/Left'
    export default {
      name: 'App',
      components:{
    Left
     }

  }

</script>

<style>

  *{
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
.zhuye{
  position: relative;
  top: -1000px;
}
  #app{
  width: 60%;
   padding-top: 50px;
  margin: 0 auto;
    z-index: 9999;
    /*background-image: url("./assets/u=2277205688,447980561&fm=26&gp=0.jpg");*/



    background-repeat: no-repeat;
    background-size: cover;
  height: 900px;
}

#boxss{
 background-color: rgba(96,96,96,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

}

</style>
