<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
  
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      title: 'Outline View App'
    }
  },
  created() {
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  },
  methods: {
    changeTitle: function() {
      this.$emit('changeTitle', 'Tree View App')
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: 222;
  text-align: center;
}
</style>
