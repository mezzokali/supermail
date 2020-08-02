<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="isActive(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    isActive(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 4px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: var(--color-tint) 3px solid;
}
</style>
