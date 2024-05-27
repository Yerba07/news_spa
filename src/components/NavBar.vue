<template>
  <div class="navbar">
    <div @click="$router.push('/')" style="cursor: pointer">Главная</div>
    <div class="navbar__btns">
      <custom-button @click="$router.push('/articles')">Новости</custom-button>
      <custom-button style="margin-left: 20px" @click="$router.push('/about')"
        >О сайте</custom-button
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
