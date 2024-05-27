<template>
  <div class="about-page">
    <h1>О сайте</h1>
    <p>
      Этот сайт предоставляет последние новости и обновления по различным темам,
      включая технологии, спорт, здоровье, бизнес и развлечения.
    </p>
    <div class="contact-info">
      <h2>Контактная информация</h2>
      <p>
        Если у вас есть вопросы или предложения, свяжитесь с нами по электронной
        почте:
        <a href="mailto:sultangaiev0415@gmail.com">sultangaiev0415@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-page {
  padding: 20px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.contact-info {
  margin-top: 30px;
}

.contact-info h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.contact-info a {
  color: #007bff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}
</style>
