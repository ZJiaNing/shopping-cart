<template>
  <!-- 混合在一起的store的写法 -->
  <div class="content">
      <h1>iPhone 6</h1>
      <div class="con">
        <dl class="">
          <dd>描述：</dd>
          <dt>3D Touch、1200万像素照片、4k视频，强大功能于一身。</dt>
        </dl>
        <dl class="">
          <dd>价格：</dd>
          <dt>￥6088</dt>
        </dl>
        <dl class="">
          <dd>外观：</dd>
          <dt>
            <ul>
              <li class="active">银色</li>
              <li>深空灰色</li>
              <li>玫瑰金</li>
              <li>金色</li>
            </ul>
          </dt>
        </dl>
        <dl class="">
          <dd>存储容量：</dd>
          <dt>
            <ul>
              <li class="active">32G</li>
              <li>64G</li>
              <li>128G</li>
            </ul>
          </dt>
        </dl>
        <!-- 注意一下这个click的事件绑定的写法哈~~~ -->
        <button type="button" name="button" class="add-btn" @click=increment(msg)>加入购物车</button>
      </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        msg: 'This is Index page'
      }
    },
    methods: mapActions([
      'increment'
    ])
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
