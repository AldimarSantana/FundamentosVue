<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Menu v-if="this.$router.currentRoute.name!='Login'"></Menu>
    <router-view/>
  </div>
</template>


<script>
import Menu from '@/components/menu/Menu.vue';

export default {
    components:{
      Menu: Menu
    }
  }
</script>




<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  :root{
    --cor-primaria: #ff3d00;
    --cor-secundaria: #FF6E40;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }

  .container{
    margin-top: 15px;
  }

  .titulo{
    font-weight: 600px;
    color: #363636;
  }

  hr{
    margin: 0;
  }

  .sub-container{
    margin-top: 15px;
  }

</style>
