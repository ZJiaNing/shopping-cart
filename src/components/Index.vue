<template>
  <div class="content">
      <h1>{{products.name}}</h1>
      <div class="con">
        <dl class="">
          <dd>描述：</dd>
          <dt>{{products.desc}}</dt>
        </dl>
        <dl class="">
          <dd>价格：</dd>
          <dt>{{products.priceRange}}</dt>
        </dl>
        <dl class="">
          <dd>外观：</dd>
          <dt>
            <ul>
              <li v-for="(item, key) in products.style" @click="changeStyle({activeStyle: key})" :class="{active: products.activeStyle == key}">{{key}}</li>
            </ul>
          </dt>
        </dl>
        <dl class="">
          <dd>存储容量：</dd>
          <dt>
            <ul>
              <li v-for="(price, key) in products.storage" @click="changePrice({storage: key,price: price})" :class="{active: products.activeStorage == key}">{{key}}</li>
            </ul>
          </dt>
        </dl>
        <button type="button" name="button" class="add-btn" @click="addItem">加入购物车</button>
      </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        msg: 'This is Index page'
      }
    },
    computed: {
      ...mapGetters({
        products:'allProducts'             // 这样的话是将allProducts映射成products，CAUTION: “{}”  OR "[]"
      }),
      ...mapState({
        you: state => state.index.iPhone6s // CAUTION:  如果使用mapState获取的话，应该写成这样了，因为这边我增加了而一个modules（index）
      })
      // ...mapState([                     // CAUTION:  这个的访问路径为 this.$store.state.iPhone6s！！！！！
      //   'iPhone6s'
      // ])
    },
    created() {
    },
    methods: {
      ...mapActions([
        'addItem',
        'changeStyle',
        'changePrice'
      ])
    }
  }
</script>

<style media="screen" scoped>
  h1{
    padding: 0 10px;
    margin: 0 10px;
    border-bottom: 1px solid brown;
  }
  .con{
    width: 500px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .con dl{
    min-height: 50px;
  }
  .con dl dd{
    float: left;
    width: 90px;
    text-align: right;
    color: #95a5a6;
  }
  .con dl dt{
    margin-left: 90px;
  }
  .con dl dt ul{

  }
  .con dl dt ul li{
    display: inline-block;
    padding: 3px 15px;
    border: 1px solid gray;
    font-size: 14px;
    cursor: pointer;
  }
  .con dl dt ul li.active{
    border: 2px solid #c0392b
  }
  .add-btn{
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    text-align: center;
    border: none;
    outline: none;
    background-color: #c0392b;
    cursor: pointer;
  }
</style>
