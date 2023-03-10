import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

/*const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute("style", "top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;");
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});*/
