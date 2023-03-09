<script>
let menuOuvert = ref();
menuOuvert.value = false;
</script>

<template>
  <header class="flex place-content-between content-center items-center border-b-2 border-white p-3 shadow-md shadow-white">
    <routerLink to="/"><img src="../../assets/logo/IM.svg" alt="" /> </routerLink>

    <!--Bouton pour afficher menu-->
    <button
      class="w-fi relative p-1"
      aria-controls="menu"
      :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert"
      :class="[menuOuvert ? 'hidden' : '']"
    >
      <img src="@/assets/logo/menu.svg" class="" />
      <span class="sr-only">Menu</span>
    </button>

    <!--Bouton pour cacher menu-->
    <div @click="menuOuvert = !menuOuvert" :class="[menuOuvert ? '' : 'hidden']" class="mr-10 p-5">
      <button class="fixed z-[99]" aria-controls="menu" :aria-expanded="menuOuvert">
        <img src="@/assets/logo/menuFermer.svg" class="h-8 w-8" />
        <span class="sr-only">Menu</span>
      </button>
    </div>

    <!--Menu hamburger déroulé-->
    <div
      class="fixed inset-0 z-[90] translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
      :class="[' bg-black  ', menuOuvert ? 'translate-x-0' : '']"
    >
      <div class="mt-20">
        <ul @click="menuOuvert = !menuOuvert">
          <div class="grid justify-items-center font-iceberg uppercase">
            <div class="mt-20">
              <router-link class="flex items-center" to="/">
                <p class="font-iceberg text-9xl text-benimki2">01</p>
                <li class="-ml-32 text-5xl">Home</li>
              </router-link>
            </div>

            <div class="mt-20">
              <router-link class="flex items-center" to="/projet1">
                <p class="font-iceberg text-9xl text-benimki2">02</p>
                <li class="-ml-32 text-5xl">Project</li>
              </router-link>
            </div>

            <div class="mt-20">
              <router-link class="flex items-center" to="/">
                <p class="-mr-36 font-iceberg text-9xl text-benimki2">03</p>
                <li class="-ml-38 text-5xl">About Me</li>
              </router-link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "@vue/reactivity";
</script>
