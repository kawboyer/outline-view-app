<template>
  <div id="nodes">
    <ul>
      <li v-for="node in nodes" v-on:click="node.show = !node.show">
        <h2>{{ node.name }}</h2>
        <h3 v-show="node.show">{{ node.specialty }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNode">Delete Node</button>
  </div>
</template>

<script>
import axios from 'axios';
let requestUrl
if (window.location.href.includes('localhost')) {
  requestUrl = 'http://localhost:8080'
} else {
  requestUrl = 'whereveryoudeploy.com'
}

export default {
  props: {
    nodes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      info: null
      // node: [
      //   {
      //     name: req.body.node_name, 
      //     start: req.body.node_range_start,
      //     end: req.body.node_range_end,
      //     children: req.body.node_children,
      //     created_at: req.body.created_at,
      //     show: false
      //   }
      // ]
      // },
    }
  },
  mounted() {
    axios
    .get(`${requestUrl}/nodes`)
    .then(response => {
      console.log(response.data);
      this.info = response.data;
    })
    .catch((error) => {
      console.log(error)
    });
  },
  methods: {
    deleteNode: function() {
      this.nodes.pop()
    }
  }
}
</script>

<style scoped>
#nodes {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
