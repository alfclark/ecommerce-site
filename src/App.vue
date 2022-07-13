<template>
  <NavBar />
  <Transition>
    <router-view></router-view>
  </Transition>
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
@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
:root {
  --carbon: #414042;
  --carbonLight: #8e8e8e;
  --grey: #eaeded87;
  --black: #010101;
  --blue: #2997ff;
  --blueLight: #e8f0fe;
  --pink: #ca2166;
  --green: green;
  --yellow: #fed761;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
