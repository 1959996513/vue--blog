<template>
  <div class="archive-container">
    <div>
      <section v-for="year in years">
        <h4 style="color: #a71d5d;">{{ year }}年</h4>
        <div class="list" v-for="intro in introductions[year]">
          <p>
            <router-link :to="'/articles/' + intro.id" style="color: orange;text-decoration: none;padding-left: 20px;">
              {{ intro.title }}
            </router-link>
            <span class="time"> {{ intro.publishTime }}</span>
          </p>
        </div>
      </section>


    </div>

    <el-collapse>
      <el-collapse-item>
        <template slot="title" v-for="year in years">
          {{year}}
        </template>
        <div  v-for="year in years">
        <div v-for="intro in introductions[year]">
          <router-link :to="'/articles/' + intro.id" style="color: orange;text-decoration: none;padding-left: 20px;">
            {{ intro.title }}
          </router-link>
          <span class="time"> {{ intro.publishTime }}</span>
        </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import moment from 'moment'
  import request from '@/util/request'

  export default {
    name: "Archive",
    data() {
      return {
        introductions: {},
        years: []
      }
    },
    created() {
      request({
        url: '/gui',
        method: 'get'
      }).then(res => {
        for (let intro of res.data) {
          const introYear = moment(intro.publishTime).year()
          if (this.years.indexOf(introYear) === -1) {
            this.years.push(introYear)
            this.introductions[introYear] = []
          }
          intro.publishTime = moment(intro.publishTime).format('MM-DD')
          this.introductions[introYear].push(intro)
        }
      })
        .catch(err => alert(err))
    }
  }
</script>

<style scoped>
  p:nth-child(1) {
    border-top: #2c3e50 1px solid;
  }

  p {
    border-bottom: #2c3e50 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .time {
    color: #df5000;
  }

</style>
