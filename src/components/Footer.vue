<template>
  <footer>
    <p> &copy; {{ copyright }} {{ title }}</p>
  </footer>
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
      copyright: '2018'
    }
  },
  methods: {
    changeTitle: function() {
      this.title = 'Vue Wizard';
      bus.$emit('titleChanged', 'Vue Wizards');
    }
  }
}
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}

</style>