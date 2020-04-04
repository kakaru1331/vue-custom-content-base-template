<template>
  <div>
    {{ todos }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: {}
    }
  },
  async created () {
    await this.fetchTodos()
  },
  methods: {
    async fetchTodos () {
      const response = await this.$axios.get('https://jsonplaceholder.typicode.com/todos/1')

      this.todos = response.data

      return new Promise((resolve, reject) => resolve())
    }
  }
}
</script>
