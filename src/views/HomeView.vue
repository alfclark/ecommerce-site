<template>
  <LandingScreen />
  <ProductsOverview />
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

<style scoped></style>
