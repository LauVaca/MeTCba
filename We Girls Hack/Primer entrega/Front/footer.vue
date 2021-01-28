<template>
  <v-footer class="footercolor"
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="escribenosA">Escribenos a info.desafioapp@gmail.com</strong>

        <div class="flex-grow-1"></div>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          :to="icon.link"
        >
          <v-icon size="24px" class="iconos">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 gray--text text-center">
        {{ new Date().getFullYear() }} — <strong>Desafío App</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style lang="CSS" scoped scr="./footer.css">
    
</style>

<script>
  export default {
    data: () => ({
      icons: [
        {link:'https://www.facebook.com/DesafioApp/', name:'fab fa-facebook'},
        {link:'https://twitter.com/desafio_app',name:'fab fa-twitter'},
        {link:'https://www.linkedin.com/company/desafio-app/',name:'fab fa-linkedin'},
        {link:'https://www.instagram.com/desafioapp/',name:'fab fa-instagram'},
      ],
    }),
  }
</script>