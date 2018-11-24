<template>
<div>
  <!--<nav>-->
    <!--<ul class="tags">-->
      <!--<span style="color: #a71d5d">所有标签:</span><br>-->
      <!--<li v-for="tag in tags" style="display: inline-block">-->

        <!--<span class='name'>{{tag}}</span>&nbsp;&nbsp;&nbsp;-->

      <!--</li>-->
    <!--</ul>-->
  <!--</nav>-->
  <!--<ul class="tag-list">-->
    <!--<li v-for="tag in tags">-->
      <!--<span :id="tag" :name="tag"  class='name'>{{ tag }}</span>-->
      <!--<ul>-->
        <!--<li v-for="intro in introductions[tag]">-->
          <!--<router-link :to="'/articles/' + intro.id" style="color: darkseagreen;">{{ intro.title }}</router-link>-->
          <!--<span class="time"> {{ intro.publishTime }}</span>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</li>-->
  <!--</ul>-->



  <el-tabs type="border-card" style="background-color: rgba(0,0,0,.5)">
    <el-tab-pane  v-for="tag in tags" :key='index'>
      <span slot="label"  :id="tag" :name="tag">{{tag}}</span>
      <div v-for="intro in introductions[tag]">
        <router-link :to="'/articles/' + intro.id" style="color: darkseagreen;">{{ intro.title }}</router-link>
        <span class="time"> {{ intro.publishTime }}</span>
      </div>

    </el-tab-pane>

  </el-tabs>
</div>
</template>

<script>
  import moment from 'moment'
  import request from '@/util/request'
    export default {
        name: "Tags",
      data() {
        return {
          introductions: {},
          tags: [],
          activeName: 'second'
        }
      },
      created() {
      request({
        url:'/tagss',
        method:'get'
      }).then(res => {
        for (let intro of res.data) {
          intro.tags = intro.tags ? intro.tags.split(',') : []
          intro.publishTime = moment(intro.publishTime).format('MM-DD')
          for (let tag of intro.tags) {
            if (this.tags.indexOf(tag) === -1) {
              this.tags.push(tag)
              this.introductions[tag] = []
            }
            this.introductions[tag].push(intro)
          }
        }
      }).catch(err =>{
        console.log(err);
      })
      },
      methods:{
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>

span{
  color: #df5000;
}
  .name{
  background-color: #df5000;
    color: white;
    border-radius: 5px;
    width: 50px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
  }
  .tags{
    border-bottom: 1px solid ;
  }
</style>
