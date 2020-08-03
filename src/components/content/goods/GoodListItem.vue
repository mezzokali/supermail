<template>
  <div class="goods-list-item">
    <img :src="item.show.img" alt="">
    <div class="good-list item-title">{{item.title}}</div>
    <span class="price">{{item.price}}</span>
    <span class="cfav">{{item.cfav}}</span>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
 .goods-list-item {
   width: 40%;
   flex: 1;
   padding: 10px;
   text-align: center;
   font-size: 12px;
 }
 .goods-list-item img {
   width: 100%;
   border-radius: 5px;
 }
 .item-title {
   width: 100%;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   word-wrap: break-word;
 }
 .price {
   color: var(--color-high-text);
 }
</style>
