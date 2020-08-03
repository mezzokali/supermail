<template>
  <div class="goods-list">
    <good-list-item v-for="item in goodslist" :item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "@/components/content/goods/GoodListItem";

export default {
  name: "GoodsList",
  props: {
    goodslist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style scoped>
 .goods-list {
   display: flex;
   flex-wrap: wrap;
 }
</style>
