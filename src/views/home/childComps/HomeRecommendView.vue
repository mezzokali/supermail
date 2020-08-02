<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link" class="content">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    width: 100%;
  }
  .recommend-item {
    flex: auto;
  }
  .content {
    display: inline-block;
    color: #000000;
    text-decoration: none;
  }
  .recommend-item img {
    width: 80%;
    padding: 10px 0;
  }
</style>
