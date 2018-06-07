<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-nodes v-bind:nodes="nodes"></app-nodes>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Nodes from './components/Nodes.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-nodes': Nodes
  },
  data() {
    return {
      nodes: [
        {name: 'Ryo', specialty: 'Vue Components', show: false},
        {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', specialty: 'Click Events', show: false},
        {name: 'Tango', specialty: 'Conditionals', show: false},
        {name: 'Kami', specialty: 'Webpack', show: false},
        {name: 'Yoshi', specialty: 'Data Diggin', show: false},
        {name: 'Yoshi', specialty: 'Data Diggin', show: false}
      ],
      title: 'Outline View App'
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>

</style>