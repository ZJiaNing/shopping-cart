<template>
  <div class="nav">
    <ul>
      <li><router-link to="/index" active-class="active">Shopping Cart</router-link></li>
      <li><router-link to="/cart" active-class="active">Cart<span v-text="count"></span></router-link></li>
      <li>{{localComputed}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default{
    data() {
      return {
        msg: 'This is Nav',
        totalItem: '0'
      }
    },
    computed:{
      // 使用对象展开运算符将 getters 混入 computed 对象中
      // 但是需要注意的是.babelrc的配置，需要加入state-3, 否则会报错的（即对...不认识）
      localComputed () {
        return this.totalItem + "123";
      },
      ...mapState([
        'count'
      ])
    }
  }
</script>

<style media="screen">
  .nav{

  }
  .nav ul{

  }
  .nav ul li{
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }
  .nav ul li a{
    display: inline-block;
    width: 100%;
    color: black;
    border-bottom: 1px solid #eee;
  }
  .nav ul li a.active, .nav ul li a:hover{
    color: white;
    background-color: silver;
  }
  .nav ul li a>span{
    position: relative;
    left: 10px;
    padding: 5px;
    border-radius: 50%;
    color: #fff;
    background-color: red;
  }
</style>
