<template>
  <div class="foot">
    <router-link to="/zhu">注册</router-link>
    <router-link to="/deng">登录</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
.foot {
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  display: flex;
}
a {
  flex: 5;
  line-height: 50px;
  text-align: center;
}
</style>