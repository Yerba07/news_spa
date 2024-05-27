<template>
  <select @change="handleChange" v-model="selectedCategory">
    <option disabled value="">Выберите из списка</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ category }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    categories: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedCategory: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.selectedCategory = newVal;
    },
    selectedCategory(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
select {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border: 1px solid teal;
}
</style>
