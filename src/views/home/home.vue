<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import { getHomeMultidata } from "../../network/home";

  export default {
    name: "home",
    components: {
      NavBar
    },
    data() {
      return {
        banners:[],
        recommends:[],
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    color: #ffffff;
    background-color: var(--color-tint);
  }
</style>
