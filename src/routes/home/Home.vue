<template>
  <div>
    <h1>{{title}}</h1>
    <SearchForm
      :onHandleSubmit="handleSubmit"
    />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm/SearchForm.vue';

export default {
  data() {
    return {
      title: 'Search Github',
    };
  },
  methods: {
    handleSubmit({ query, type }) {
      this.$router.push({
        name: 'Search',
        params: { type, query },
      });
    },
  },
  components: {
    SearchForm,
  },
};
</script>
