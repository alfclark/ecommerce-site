<template>
  <nav class="navbar">
    <div class="burger-menu">
      <i onclick="showMenu()" class="fa-solid fa-bars"></i>
    </div>
    <div class="brand">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.png" alt="" />
      </router-link>
    </div>
    <div class="tools">
      <router-link to=""><i class="fa-solid fa-cart-shopping"></i></router-link>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    const showMenu = () => {};
    return {
      showMenu,
    };
  },
};
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
  top: 0;
}

.burger-menu {
  cursor: pointer;
}

.logo {
  width: 100px;
  margin: 0;
  transition: 1s;
}

.logo:hover {
  transform: scale(1.05);
  transition: 0.4s;
}

.tools {
  display: flex;
}

.fa-solid {
  color: var(--carbon);
  font-size: 1.5rem;
  transition: 0.6s;
}

.fa-solid:hover {
  color: grey;
  transition: 0.4s;
}

@media screen and (max-width: 900px) {
  .logo {
    width: 60px;
  }
  .fa-solid {
    font-size: 1rem;
  }
}
</style>
