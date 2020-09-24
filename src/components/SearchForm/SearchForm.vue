<template>
  <form @submit="handleSubmit">
    <input
      type="text"
      v-model="searchQuery"
    />
    <select v-model="searchType">
      <option value="repositories">Repo</option>
      <option value="users">Users</option>
    </select>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchType: 'repositories',
    };
  },
  props: ['onHandleSubmit'],
  methods: {
    handleSubmit(e) {
      if (e) {
        e.preventDefault();
      }
      this.onHandleSubmit({
        query: this.searchQuery,
        type: this.searchType,
      });
    },
  },
};
</script>
