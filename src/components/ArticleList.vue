<template>
  <div class="articles">
    <div
      v-for="article in articles"
      :key="article.url"
      class="article__list"
      @click="openArticle(article)"
    >
      <img :src="article.urlToImage" alt="article photo" />
      <div class="article__content">
        <h3>{{ article.title.toUpperCase() }}</h3>
        <div class="article__description">{{ article.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openArticle(article) {
      this.$emit("open-article", article);
    },
  },
};
</script>

<style scoped>
.articles {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article__list {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.article__list:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

img {
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 5px;
}

.article__content {
  margin-left: 20px;
  flex-grow: 1;
  overflow: hidden;
}

h3 {
  font-size: 1.2em;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.article__description {
  font-size: 0.9em;
  color: #555;
  max-height: 3.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
