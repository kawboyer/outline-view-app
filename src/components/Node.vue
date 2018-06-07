<template>
  <div id='node'>
    <ul>
      <li v-for='node in nodes' v-on:click ='!node.show'></li>
        <h2>{{ node.name }}</h2>
        <h3 v-show='node.show'>{{ node.speciality }}</h3>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {

      Node: {},

      // nodes: [

      //   // {name: 'Ryo', specialty: 'Vue Components', show: false},
      //   // {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
      //   // {name: 'Hitoshi', specialty: 'Click Events', show: false},
      //   // {name: 'Tango', specialty: 'Conditionals', show: false},
      //   // {name: 'Kami', specialty: 'Webpack', show: false},
      //   // {name: 'Yoshi', specialty: 'Data Diggin', show: false}
      // ]
    }
  },
  mounted() {
    axios.get('http://localhost:3000')
    .then((res) => {
      console.log(res.data);
      this.Node = res.data;
    })
    .catch((err) => {
      console.log(err)
    });
  } 
}
</script>

<style scoped>
#node {
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