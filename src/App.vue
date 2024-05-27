<template>
  <div class="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default { components: { NavBar } };
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
