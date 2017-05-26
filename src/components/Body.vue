<template>
  <div class="bodyDiv cardContainer row">
    <div v-for="item in items" class="cardDiv col-md-6">
      <appItem :itemPrice = "item.price" :itemImg = "item.img" :itemTitle = "item.name" :itemDescription = "item.description"></appItem>
    </div>
  </div>
</template>

<script>
  import item from './Item.vue'
  export default {
  components: {
    appItem: item
  },
  name: 'body',
  data () {
    return {
      items: [
        {
          name: 'Xbox One',
          description: 'The best console out',
          price: '$500',
          img: 'http://compass.xbox.com/assets/23/0d/230dc52a-8f0e-40bf-bbd1-c51fdb8371e3.png?n=Homepage-360-UA_Upgrade-big_1056x594.png'
        },
        {
          name: 'Playstation 4',
          description: 'This baby is pretty good',
          price: '$500'
        },
        {
          name: 'Playstation 4',
          description: 'This baby is pretty good',
          price: '$500'
        },
        {
          name: 'Playstation 4',
          description: 'This baby is pretty good',
          price: '$500'
        },
        {
          name: 'Playstation 4',
          description: 'This baby is pretty good',
          price: '$500'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<<style lang="css">
  .cardContainer{
    display: flex;
    width: 100%;
    float: left;
  }
  .bodyDiv{
    margin-top: 20px;
  }
  .cardDiv{
    width: 100%;
  }
</style>