<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control :title="['流行', '新款', '精选']" class="tab-control"></tab-control>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";

  import TabControl from "@/components/content/tabcontrol/TabControl";

  import { getHomeMultidata } from "@/network/home";


  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl
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
  #home {
    padding-top: 44px;
  }
  .home-nav {
    color: #ffffff;
    background-color: var(--color-tint);
    position: fixed;
    width: 100%;
    z-index: 9;
    top: 0;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
