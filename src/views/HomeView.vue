<template>
  <div class="HomeView">
    <LandingScreen />
    <ProductsOverview />
  </div>
</template>

<script>
import LandingScreen from "@/components/onHome/LandingScreen.vue";
import ProductsOverview from "@/components/onHome/productsLine.vue";

export default {
  components: {
    LandingScreen,
    ProductsOverview,
  },
};
</script>

<style scoped>
.HomeView {
  background-color: var(--grey);
}
</style>
