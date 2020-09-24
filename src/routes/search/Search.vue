<template>
  <div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-if="!loading">
      <h1>Search results for {{query}}</h1>
      <p>{{items}}</p>
    </div>
  </div>
</template>

<script>
import { GoFetch } from '@/helpers/GoFetch';
import { GetEndpoint } from '@/helpers/GetEndpoint';

export default {
  data() {
    return {
      loading: true,
      query: '',
      items: [],
    };
  },
  async mounted() {
    const { query, type } = this.$route.params;
    this.query = query;
    this.fetchData(query, type);
  },
  methods: {
    async fetchData(query, type) {
      try {
        const endpoint = GetEndpoint(type, { query });
        const { items } = await GoFetch({ url: endpoint });
        this.items = items;
        this.loading = false;
      } catch (error) {
        console.log('error: ', error);
      }
    },
  },
};
</script>
