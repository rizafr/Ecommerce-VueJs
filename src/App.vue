<template>
  <div id="app">
    <appHeader></appHeader>
    <appBody></appBody>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
export default {
  components: {
    appHeader: Header,
    appBody : Body
  },
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
  .itemContainer {
    width: 25%;
    margin-top: 20px;
    
  }
  .md-layout{
    justify-content: center;
  }
  .itemContainer .md-card {
    width: 95%;
    
  }
</style>
