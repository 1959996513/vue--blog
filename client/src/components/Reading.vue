<template>
<div>
  <table>
    <tr>
    <td>书名</td>
    <td>作者</td>
    <td>评价</td>
    </tr>
    <tr v-for="{name,author,score} in books">
      <td>{{name}}</td>
      <td>{{author}}</td>
      <td>
        <star :score='score'></star>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
  import moment from 'moment'
  import request from '@/util/request'
  import Star from '@/components/common/Star'
    export default {
        name: "Reading",
       components:{
        Star
        },
       data(){
          return{
            books:[]
          }

       },
      created(){
        request({
          url:'/readings',
          method:'get'
        }).then(res =>{
          this.books = res.data
        }).catch(err=>{
          console.log(err);
        })
      }

    }
</script>

<style scoped>
  table{
    margin-top: 50px;
    width: 100%;
    border-top: 1px solid #333333;
  }


td{

  border-right: 1px solid #333333;
  display: inline-block;
  width: 33%;
  height: 4em;
  line-height: 4em;
}
  td:nth-child(3){
    border-right: 0;
  }
  tr:nth-child(1){
    color: #a71d5d;
  }
  tr{
    text-align: center;
    color: #df5000;

  }

  tr>td{
    border-bottom: 1px solid #333333;
  }
</style>
