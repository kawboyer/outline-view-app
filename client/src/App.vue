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
      title: 'Outline View App'
    }
  }
  // ,
  // methods: {
  //   updateTitle: function(updatedTitle) {
  //     this.title = updatedTitle;
  //   }
  // }
}
</script>

<style scoped>

</style>