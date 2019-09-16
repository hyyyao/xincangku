<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
}
#app,
html,
body,
.wrap,
.top,
.cit,
.adt,
.din,
.dan {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  /* // display: flex;
  // flex-direction: column; */
}

#app,
.wrap,
.adt,
.dan {
  display: flex;
  flex-direction: column;
}

.head {
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  text-align: center;
  line-height: 50px;
}

.main {
  width: 100%;
  flex: 1;
  overflow: auto;
}

.foot {
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  display: flex;
  text-align: center;
  line-height: 50px;
}
a {
  flex: 5;
  line-height: 50px;
  text-align: center;
}
</style>
