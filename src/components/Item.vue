<template>
  <b-card :img = "this.itemImg"
            :title="this.itemTitle"
            class="mb-2"
    >
        {{this.itemDescription}}<br />
        {{this.itemPrice}}
    </b-card>

</template>

<script>
export default {
  components: {
    
  },
  props: ['itemTitle', 'itemDescription', 'itemPrice', 'itemImg'],
  name: 'item',
  data () {
    return {
      
    }
  },
  
}
</script>

<style>
  .mb-2.card{
    flex: 4;
    float: left;
    width: 100%;
  }
  .card-img{
    width: 100%;
  }
</style>