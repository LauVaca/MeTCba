import Vue from 'vue'
import Router from 'vue-router'
import Formulario from './components/Formulario.vue'
import Contacto from './components/Contacto.vue'
import QuienesSomos from './components/QuienesSomos.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import HomeDA from './components/HomeDA.vue'
import Evento from './components/Evento.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/HomeDA',
      name: 'HomeDA',
      component: HomeDA
    },
    {
      path: '/Formulario',
      name: 'Formulario',
      component: Formulario
    },
    {
      path: '/Evento',
      name: 'Evento',
      component: Evento
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/QuienesSomos',
      name: 'QuienesSomos',
      component: QuienesSomos
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    }
      // component: () => import(/* webpackChunkName: "about" */ './components/Formulario.vue')
  ]
})
