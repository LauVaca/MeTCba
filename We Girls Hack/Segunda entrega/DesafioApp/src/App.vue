<template>
  <div>
    <HomeDA/>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import HomeDA from './components/HomeDA.vue'
import Footer from './components/Footer.vue'
import Contacto from './components/Contacto.vue'
import QuienesSomos from './components/QuienesSomos.vue'
import Evento from './components/Evento.vue'

export default {
  name: 'App',
  components: {
    HomeDA
  }
}
</script>

<style>
</style>