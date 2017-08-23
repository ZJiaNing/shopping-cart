<template>
  <div class="container">
    <VSidebar />
    <router-view></router-view>
  </div>
</template>

<script>
  import Sidebar from './Nav'

  export default{
    data() {
      return {
        msg: 'This is App'
      }
    },
    components: {
      VSidebar: Sidebar
    }
  }
</script>


<style media="screen">
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .container{
    width: 960px;
    margin: 0 auto;
  }
  .container::after{
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
  .container>div{
    float: left;
    border: 1px solid #eee;
    box-shadow: 0 0 2px #eee;
  }
  .container .nav{
    width: 18%;
    margin-right: 2%;
  }
  .container .content{
    width: 80%;
    height: 60vh;
  }
</style>
