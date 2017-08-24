<template>
  <div class="content">
    <div class="con">
      <!-- shopping list starts -->
      <div class="cart-list" v-if="cart.length">
        <div class="cart-panel">
          <span>购物车</span>
          <span>总计：￥<b>{{totalPrice}}</b></span>
        </div>
        <ul>
          <li v-for="item in cart">
            <span class="remove" @click="removeItem(item)"></span>
            <span class="name">Apple/苹果 iPhone6s</span>
            <span class="info">{{item.type}}</span>
            <span class="price">{{item.price}}</span>
          </li>
        </ul>
      </div>
      <div class="cart-empty" v-else>
        <span>E M P T Y</span>
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
      ...mapGetters({
        cart: 'getCart'
      }),
      totalPrice() {
        let totalPrice = 0
        for (let i in this.cart) {
          totalPrice += parseFloat(this.cart[i].price);
        }
        return totalPrice
      }
    },
    methods: {
      ...mapActions([
        'removeItem'
      ])
    }
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
  .cart-empty{
    text-align: center;
    min-height: 200px;
    line-height: 200px;
  }
  .cart-empty span{
    font-size: 24px;
  }
</style>
