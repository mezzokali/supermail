<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <Scroll class="scroll-content"
            ref="scroll"
            :probe-type="3"
            @scrollPostion="scrollPosition"
            :pull-up-load="true"
            @pullingUp="LoadMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行', '新款', '精选']" class="tab-control" @itemClick="itemClick"></tab-control>
      <goods-list :goodslist="showType"></goods-list>
    </Scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";
  import BackTop from "@/components/content/backtop/BackTop";

  import TabControl from "@/components/content/tabcontrol/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";

  import { getHomeMultidata, getHomeGoods } from "@/network/home";


  export default {
    name: "home",
    components: {
      GoodsList,
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners:[],
        recommends:[],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      showType() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      // 事件监听相关方法
      itemClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      scrollPosition(position) {
        this.isShowBackTop = -position.y > document.querySelector('#home').offsetHeight
      },
      LoadMore() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
      },

      // 网络请求相关方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        }).catch(err => {
          console.log(err);
        })
      },
      // 防抖动
      bounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      const refresh = this.bounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('itemImageLoad',() => {
        refresh()
      })
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .home-nav {
    color: #ffffff;
    background-color: var(--color-tint);
    position: fixed;
    width: 100%;
    z-index: 9;
    top: 0;
  }
  .scroll-content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
