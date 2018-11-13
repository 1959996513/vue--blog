<template>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>

    </div>
</template>

<script>
  import request from '@/utils/request'
    export default {
        name: "Login",
      data(){
          return{

          }
      },
      methods:{

      },
      //钩子函数,当组件加载完成之后自动执行
      method:function () {
        request({
          url:"/index",
          method:'get'
        }).then((res)=>{
          console.log(res.data)
        })
      }
    }
</script>

<style scoped>

</style>
