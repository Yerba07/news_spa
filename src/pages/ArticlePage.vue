<template>
  <div>
    <h1>NEWS API</h1>
    <div class="searchAndSort">
      <custom-input
        v-model="searchedTitle"
        style="margin-right: 10px"
        placeholder="Поиск..."
      />
      <custom-select :categories="categories" v-model="selectedCategory" />
    </div>
    <p style="margin-top: 15px">
      Количество новостей {{ filteredArticles.length }}
    </p>
    <article-list :articles="paginatedArticles" @open-article="openArticle" />
    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Предыдущая</button>
      <span>Страница: {{ page }}</span>
      <button @click="nextPage" :disabled="page >= totalPages">
        Следующая
      </button>
    </div>
    <article-modal
      v-if="selectedArticle"
      :show="isModalVisible"
      :article="selectedArticle"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ArticleList from "@/components/ArticleList.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";
import ArticleModal from "@/pages/ArticleModal.vue";

export default {
  components: {
    ArticleList,
    CustomInput,
    CustomSelect,
    ArticleModal,
  },
  data() {
    return {
      searchedTitle: "",
      selectedCategory: "",
      selectedArticle: null,
      isModalVisible: false,
      categories: [
        "Technology",
        "Sports",
        "Health",
        "Business",
        "Entertainment",
      ],
      categoryKeywords: {
        Technology: ["tech", "technology", "gadgets", "software", "hardware"],
        Sports: ["sport", "football", "basketball", "cricket", "tennis"],
        Health: ["health", "wellness", "medicine", "fitness", "diet"],
        Business: ["business", "economy", "market", "finance", "stocks"],
        Entertainment: [
          "entertainment",
          "movies",
          "music",
          "celebrity",
          "showbiz",
        ],
      },
      page: 1,
      pageSize: 10,
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.article.articles,
      totalResults: (state) => state.article.totalResults,
      isLoading: (state) => state.article.isLoading,
    }),
    filteredArticles() {
      const selectedKeywords =
        this.categoryKeywords[this.selectedCategory] || [];
      return this.articles.filter((article) => {
        const matchesTitle = article.title
          .toLowerCase()
          .includes(this.searchedTitle.toLowerCase());
        const matchesCategory = selectedKeywords.some(
          (keyword) =>
            article.content && article.content.toLowerCase().includes(keyword)
        );
        return matchesTitle && (this.selectedCategory ? matchesCategory : true);
      });
    },
    paginatedArticles() {
      const start = (this.page - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredArticles.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredArticles.length / this.pageSize);
    },
  },
  methods: {
    ...mapActions(["fetchNews"]),
    nextPage() {
      if (this.page < this.totalPages) {
        this.page += 1;
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page -= 1;
      }
    },
    openArticle(article) {
      this.selectedArticle = article;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedArticle = null;
    },
  },
  mounted() {
    this.fetchNews();
  },
  watch: {
    searchedTitle: "fetchNews",
    selectedCategory: "fetchNews",
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin-top: 20px;
}
.searchAndSort {
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: 20px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.pagination button:not(:disabled):hover {
  background-color: #0056b3;
}
.pagination span {
  margin: 0 10px;
  font-size: 1.2em;
}
</style>
