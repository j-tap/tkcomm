export default {
  methods: {
    async fetchData(url, method = 'get', data = null) {
      const params = {
        method,
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
      };
      if (data) params.body = JSON.stringify(data);

      const response = await fetch(`${process.env.strapiBaseUri}${url}`, params);
      const result = await response.json();

      return result
    }
  }
}
