<template>
  <Menu></Menu>

  <!--<header>
    <nav>
      <RouterLink to="/" class="font-titre text-blue-600 underline">Accueil</RouterLink>
      <RouterLink to="/projet1" class="text-blue-600 underline">Projet1</RouterLink>
      <IconMenu />
    </nav>
  </header>-->

  <main>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Adding Noise to the Background!</title>
        <link rel="stylesheet" href="./assets/noise_effect.gif" />
      </head>
      <body>
        <div class="noise"></div>
        <!--<div class="container">
          <div class="text"></div>
        </div>-->
      </body>
    </html>
  </main>

  <RouterView />
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
// import IconMenu from "../src/components/icons/IconMenu.vue";
import Menu from "../src/components/global/Menu.vue";
</script>
