<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ article.title }}</h2>
      <img :src="article.urlToImage" alt="article image" />
      <p><strong>Author:</strong> {{ article.author }}</p>
      <p><strong>Source:</strong> {{ article.source.name }}</p>
      <p>
        <strong>Published At:</strong>
        {{ new Date(article.publishedAt).toLocaleString() }}
      </p>
      <p><strong>Description:</strong> {{ article.description }}</p>
      <p><strong>Content:</strong> {{ article.content }}</p>
      <a :href="article.url" target="_blank">Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: left;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}

a {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
