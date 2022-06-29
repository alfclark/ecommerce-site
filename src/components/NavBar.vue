<template>
  <nav class="navbar">
    <div class="burger-menu"><i class="fa-solid fa-bars"></i></div>
    <div class="brand">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.png" alt="" />
      </router-link>
    </div>
    <div class="tools">
      <router-link to=""><i class="fa-solid fa-cart-shopping"></i></router-link>
      <router-link to=""><i class="fa-solid fa-user"></i></router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  padding: 0;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0 3rem;
}

.logo {
  width: 100px;
  margin: 0;
}

.tools {
  display: flex;
}

.fa-solid {
  color: var(--carbon);
  font-size: 1.5rem;
}

@media screen and (max-width: 900px) {
  .logo {
    width: 60px;
  }
}
</style>
