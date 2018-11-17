<template>
  <div class="login-container">

    <section class="form">
            <span class="slogan" style="color: #df5000;">博客后台登录页面
                <span>/ 版权:刘虎木</span>
            </span>
      <div class="shuru">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-renxiangmoshi"></use>
        </svg>
        <input v-validate="'required'" type="text" id="user" name="user" placeholder="Username" v-model="LoginFrom.user">
      </div>

      <div class="shuru">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima1"></use>
        </svg>
        <input v-validate="'required'"  type="password" id="password" name='password' placeholder="Password" v-model="LoginFrom.password" @keyup.enter="login">
      </div>

      <button id="login" @click="login">登录</button>
    </section>
    <footer>Always.</footer>
    <notifications grop='user'></notifications>
    <notifications grop='admin'></notifications>
  </div>
</template>

<script>
  // <!--设置验证提示消息-->
  import {validator} from  'vee-validate'
  //设置生成token
  import {setToken} from "../utils/auth";
  const dict = {
    custom:{
      user:{
        required:"你的用户名不能为空"
      },
      password:{
        required:()=>"密码不能为空"
      }
    }
  };
  import request from '@/utils/request'
  export default {
    name: "Login",
    data(){
      return{
        LoginFrom:{
          user:'',
          password:''
        }
      }
    },
    methods:{
      login:function () {
        //首先拿到验证成功失败的结果,如果成功了,在进行登陆,如果失败了,则进行消息提示...
        if(this.errors.items.length === 0){
          request({
            url:"/login",
            method:'post',
            data:this.LoginFrom
          }).then(res=>{
            //如果用户忙密码不正确要给出提示
            // console.log(res)
            if(res.sucess){
              let token = res.token;
              setToken(token)
              this.$store.commit('SET_TOKEN',token);
              this.$router.push('/list')
            }else{
              this.$notify({
                type:'error',
                grop:'admin',
                title:'登录失败',
                text:res.message
              })
              this.LoginFrom={}
            }
            //将token存到cookie中去
            //跳转到博客首页
          }).catch(err=>{
            console.log(err)
          })
        }else{
          this.$notify({
            type:'warn',
            grop:'user',
            title:'验证失败',
            text:this.errors.items[0].msg
          })
        }
      }
    },
    // //钩子函数,当组件加载完成之后自动执行
    // mounted:function () {
    //   request({
    //     url:"/index",
    //     method:'get'
    //   }).then((res)=>{
    //     console.log(res)
    //   })
    // }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  /*引入全局scss*/
  @import  "../assets/style/variable";
  .login-container {
    height: 100%;
    background-image: url("../../static/img/zhu.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @include flex($flow: column wrap);
    font-family: "KaiShu", "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    .login-head {
      @include flex;
      width: 100%;
      height: 3em;
      font-size: 2rem;
    }
    .form {
      .shuru{
        display: flex;
        justify-content: center;
        align-content: center;
      }
      .icon{
        width: 3em;
        height: 2.5em;
      }
      @include flex($flow: column wrap);
      width: 400px;
      height: 250px;
      border-radius: 5px;
      // box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, .3);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
      .slogan {
        font-size: 1.6rem;
        margin-bottom: 1em;
        //color: $quote;
        span {
          color: $base;
        }
      }
      input {
        font: {
          size: 1rem;
          family: Dosis, Arial, sans-serif;
        }
        margin-bottom: 2em;
        width: 20em;
        height: 2.5em;
        outline-color: $base;
        border-radius: 3px;
        border: 1px solid #ccc;
      }
      button {
        color: $white;
        font: {
          size: 1.6rem;
          family: KaiShu, Arial, sans-serif;
        }
        width: 6em;
        height: 2em;
        border: none;
        background: $base;
        outline: none;
        cursor: pointer;
      }
    }
    footer {
      height: 4em;
      @include flex;
      justify-self: flex-end;
    }
  }
</style>
