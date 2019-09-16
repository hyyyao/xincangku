<template>
  <div class="wrap">
    <div class="head">登录</div>
    <div class="main">
      <input type="text" placeholder="请输入用户名" />
    </div>
    <div class="foot">
      <Foot />
    </div>
  </div>
</template>
<script>
import Foot from "../components/Foot";

export default {
  components: {
    Foot
  }
};
</script>
<style>
</style>