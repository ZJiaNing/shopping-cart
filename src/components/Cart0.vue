<template>
  <!-- 混合在一起的store的写法 -->
  <div class="content">
    <div class="con">
      <!-- cart header starts -->
      <div class="cart-panel">
        <span>购物车</span>
        <span>总计：￥<b>123456</b></span>
      </div>
      <!-- cart header ends -->
      <!-- shopping list starts -->
      <div class="cart-list">
        <ul>
          <li>
            <span class="remove" @click="decrement"></span>
            <span class="name">iPhone 6s</span>
            <span class="info">银色，64G</span>
            <span class="price">6088</span>
          </li>
          <li>
            <span class="remove" @click="decrement"></span>
            <span class="name">iPhone 6s</span>
            <span class="info">银色，64G</span>
            <span class="price">6088</span>
          </li>
        </ul>
      </div>
      <!-- shopping list ends -->
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data()   {
      return {
        msg: 'This is Cart page'
      }
    },
    created() {

    },
    mouted() {

    },
    computed: {

    },
    methods: mapActions([
      'decrement'
    ])
  }
</script>

<style media="screen" scoped>
  .con{
    width: 100%;
    margin-top: 20px;
  }
  .cart-panel{
    height: 30px;
    line-height: 30px;
    margin: 0 15px;
    padding: 0 15px;
    color: #a94442;
    border-color: #ebccd1;
    background-color: #f2dede;
  }
  .cart-panel span:first-child{}
  .cart-panel span:last-child{
    float: right;
  }
  .cart-list{
    margin: 0 15px;
    padding: 0 15px;
  }
  .cart-list ul{

  }
  .cart-list ul li{
    height: 50px;
    line-height: 50px;
  }
  .cart-list ul li .remove{
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
  }
  .cart-list ul li .remove::before{
    content: '×';
    position: absolute;
    top: -16px;
    left: 0;
    color: #fff;
  }
  .cart-list ul li .info{
    padding: 2px 10px;
    border-radius: 5px;
    color: #999;
    font-size: 12px;
    background-color: lightgreen;
  }
  .cart-list ul li .price{
    float: right;
  }
</style>
