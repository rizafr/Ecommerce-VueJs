
<template>
  <div id="headerDiv">
    <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <span>Gift Box</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>
        <b-nav-item>Home</b-nav-item>
        <router-link to="/about"<b-nav-item>About Us</b-nav-item></router-link>
        <b-nav-item-dropdown text="Categories" >
          <b-dropdown-item to="#" v-for="category in categories">{{category.name}}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
      
      <b-nav is-nav-bar class="ml-auto">
        
        <!-- Navbar dropdowns -->
        
        
        <b-nav-item-dropdown right-alignment>
          
          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">User</span>
          </template>
          
          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
       
      </b-nav>
    </b-collapse>
  </b-navbar>
  </div>


</template>

<script>


export default {
  name: 'Header',
  components: {
    
  },
  data () {
    return {
      categories: [
        {
          name: 'Furniture'
        },
        {
          name: 'Electronics'
        },
        {
          name: 'Games'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style>
  ul.ml-auto{
    margin-right: 20px;
  }
  

</style>