<template>
  <div class="main">
  <router-link to="/wen" class="name">
    <span v-bind:class="{active:this.$route.path=='/wen'}">文章</span>
  </router-link>
  <router-link  class="name" to="/archive">
    <span  v-bind:class="{active:this.$route.path=='/archive'}">归档</span>
  </router-link>
  <router-link  to="/tags" class="name">
    <span  v-bind:class="{active:this.$route.path=='/tags'}">标签</span>
  </router-link>
  <router-link  to="/reading"  class="name">
    <span  v-bind:class="{active:this.$route.path=='/reading'}">阅读</span>
  </router-link>
  <router-link  to="/"  class="name" >
    <span   v-bind:class="{active:this.$route.path=='/'}">关于我</span>
  </router-link>
  </div>
</template>

<script>
    export default {
        name: "Left",
        created(){
          console.log()
        }
    }
</script>

<style scoped>
  .main{
  text-align: center;
    display: flex;
    justify-content: center;
  }
.name{
  width: 200px;
  text-decoration: none;
  font-size: 22px;
  margin-right: 20px;
}
.active{
  color: #df5000;
}

span{
  color:rgba(255,255,255,.6);

}


</style>
