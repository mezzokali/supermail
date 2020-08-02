<template>
  <div id="swiper" @mouseout="startTimer" @mouseover="stopTimer">
    <div class="container" :style="style">
      <slot></slot>
    </div>
    <div class="directions">
      <a href="" class="arrow" @click.prevent="scrollContent(-1)">
        <img src="../../../assets/image/swiper/last.svg" alt="">
      </a>
      <a href="" class="arrow" @click.prevent="scrollContent(1)">
        <img src="../../../assets/image/swiper/next.svg" alt="">
      </a>
    </div>
    <div class="indicator">
      <a href="" class="indicator-item" v-for="(item,index) in count" :class="isActive(index)" @click.prevent="jump(index)"></a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data() {
      return {
        count: 1,
        currentIndex: 0,
        width:null,
        style: {
          transform:'',
          transition:''
        },
        scrolling: false
      }
    },
    props: {
      interval: {
        type: Number,
        default: 5000
      },
      animDuration: {
        type: Number,
        default: 800
      },
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          this.scrollContent(1)
        },this.interval)
      },
      stopTimer() {
        clearInterval(this.timer)
        this.timer = null
      },
      handleDom() {
        let container = document.querySelector('.container')
        let element = document.getElementsByClassName('swiper-item')
        this.count = element.length
        this.width = container.offsetWidth
        if (this.count > 1) {
          let cloneFirst = element[0].cloneNode(true)
          let cloneLast = element[this.count - 1].cloneNode(true)
          container.insertBefore(cloneLast, element[0])
          container.appendChild(cloneFirst)
          this.currentIndex = 1
        }
      },
      scrollContent(direction, transition = this.animDuration) {
        if (this.scrolling) return
        this.scrolling = true
        this.currentIndex += direction
        this.style.transition = `transform ${transition}ms`
        this.style.transform = `translateX(${-this.currentIndex * this.width}px)`
        setTimeout(() => {
          this.scrolling = false
          this.checkPosition()
        },this.animDuration)
      },
      checkPosition() {
        if (this.currentIndex > this.count) {
          this.scrollContent(-this.count,0)
        } else if (this.currentIndex < 1) {
          this.scrollContent(this.count,0)
        }
      },
      isActive(index) {
        return index === this.currentIndex - 1 || (this.currentIndex === this.count + 1 && index === 0) ? {active: true} : {}
      },
      jump(index) {
        this.scrollContent(index + 1 - this.currentIndex)
      }
    },
    mounted() {
      setTimeout(() => {
        this.handleDom()
        this.startTimer()
        window.addEventListener("blur", () => {
          this.stopTimer()
        })
        window.addEventListener("focus", () => {
          this.startTimer()
        })
      },500)
    }
  }
</script>

<style scoped>
  #swiper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .container {
    display: flex;
    width: 100%;
  }

  .indicator {
    position: absolute;
    bottom: 8px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .indicator-item {
    width: 5px;
    height: 5px;
    border-radius: 5px;
    margin: 5px;
    background-color: #ffffff;
  }
  .directions {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .arrow img{
    width: 30px;
    height: 30px;
  }
  .active {
    background-color: #ff0000;
  }
</style>
