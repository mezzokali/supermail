<template>
  <div id="swiper">
    <div class="swiper-content">
      <div class="swiper-item" v-for="item in url"><img :src="item" alt=""></div>
    </div>
    <div class="indicator">

    </div>
  </div>
</template>

<script>
  export default {
    name: "category",
    data() {
      return {
        url: [
          'http://p1.music.126.net/Sblh0nv5z2qnNwBq-UGD0Q==/109951165181889481.jpg',
          'http://p1.music.126.net/G76KlpEfj5iaYXvQHTbCMQ==/109951165183969755.jpg',
          'http://p1.music.126.net/x6UKP37wvRU4ng1hcIWrlA==/109951165183498227.jpg',
          'http://p1.music.126.net/YVAFRb2wqp0JuQATNLswPQ==/109951165182899839.jpg'
        ],
        currentIndex:1,
      }
    }
  }
</script>

<style scoped>
  #swiper {
    overflow: hidden;
    position: relative;
  }
  .swiper-item {
    overflow: hidden;
    width: 100%;
    flex: 1;
  }
  img {
    max-width: 100%;
  }
</style>
