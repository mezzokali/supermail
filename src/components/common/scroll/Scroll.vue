<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'
  BScroll.use(PullUp)
  export default {
    name: "Scroll",
    data() {
      return {
        bs: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    methods:{
      scrollTo(x, y, time=300) {
        this.bs && this.bs.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.bs && this.bs.finishPullUp()
      },
      refresh() {
        console.log('refrash')
        this.bs && this.bs.refresh()
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.bs = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        })
        this.bs.on('scroll',(position) => {
          this.$emit('scrollPostion',position)
        })
        this.bs.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      })
    }
  }
</script>

<style scoped>

</style>
