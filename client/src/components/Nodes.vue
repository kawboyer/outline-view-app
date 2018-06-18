<template>
  <div id="nodes" class="container">

    <form>
      <input type="text" v-model="name" required />
      <md-button class="md-primary md-raised" v-on:click.prevent="post" @click="showDialog = true">Add a Node</md-button>
    </form>

    <md-card>
      <md-card-header>
        <div class="md-title">Node Card</div>
      </md-card-header>
    
      <md-card-content>
        Node children with generated random numbers
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary" @click="showDialog = true">Change Node Details</md-button>
      </md-card-actions>
    </md-card>

    <div>
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Add a new Subscription</md-dialog-title>

        <md-dialog-content md-dynamic-height>
          <md-tab>
            <h4>Change node here</h4>
          </md-tab>
        </md-dialog-content>
      </md-dialog>
    </div>



  </div>
</template>

<script>
import axios from 'axios'
import { MdCard, MdDialog, MdInput } from 'vue-material/dist/components'

let requestUrl
// let socket = io()

if (window.location.href.includes('localhost')) {
  requestUrl = 'http://localhost:8081'
} else {
  requestUrl = 'https://outline-app.herokuapp.com'
}

export default {
  // props: {
  //   nodes: {
  //     type: Array,
  //     required: true
  //   }
  // },
  data() {
    return {
      node: {
        name: '',
        children: ''
      },
      submitted: false,
    }
  },
  mounted() {
    axios
    .get(`${requestUrl}/nodes`)
    .then(response => {
      console.log(response.data)
      console.log("---------------")
      console.log(response.data)
      this.node = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
  // methods: {
  //   postNode: function() {
  //     this.$http.post(`${requestUrl}/nodes`, {
  //       node_name: this.node.name,
  //       // node_range_start: this.data.node_range_start,
  //       // node_range_end: this.data.node_range_end,
  //       node_children: this.node.children
  //     }).then(data => {
  //       console.log(data);
  //     })
  //     .catch (error => {
  //       console.log('Error: ' + error);
  //     });
  //   }
  // }
}
</script>

<style scoped>
#nodes {
  width: 500px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
label {
  display: block;
  margin: 20px 0 10px;
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
