<template>
  <NavBar />
  <router-view />
  <CompFooter />
</template>

<script>
import NavBar from "@/components/onAppVue/NavBar.vue";
import CompFooter from "@/components/onAppVue/CompFooter.vue";

export default {
  components: {
    NavBar,
    CompFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");
:root {
  --carbon: #414042;
  --carbonLight: #5c5c5c;
  --black: #010101;
  --blue: #2997ff;
  --pink: #ca2166;
  --green: green;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
