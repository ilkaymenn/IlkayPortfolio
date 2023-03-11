import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import Projet1View from "../views/Projet1View.vue";
import Projet2View from "../views/Projet2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    { path: "/projet1", name: "Projet1", component: Projet1View },
    { path: "/projet2", name: "Projet2", component: Projet2View },
  ],
});

export default router;
