<template>
  <div class="home-page">
    <h1>Добро пожаловать</h1>
    <p>
      Это главная страница вашего приложения. Здесь вы можете найти последние
      новости и обновления.
    </p>
    <button @click="$router.push('/articles')">Перейти к новостям</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
  text-align: center;
  width: 80%;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
