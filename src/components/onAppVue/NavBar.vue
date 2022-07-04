<template>
  <div class="userLinks">
    <router-link class="link" to="">Help</router-link>|
    <router-link class="link" to="">Join Us</router-link>|
    <router-link class="link" to="">Sign In</router-link>
  </div>
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
      <div class="dropdown">
        <button
          class="btn dropdown-toggle cart"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <div
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuButton1"
        >
          <router-link to="">Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    /* Burger menu function on click */
    const showMenu = () => {};
    return {
      showMenu,
    };
  },
};
</script>

<style scoped>
.userLinks {
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  background-color: var(--grey);
  width: 100%;
  padding: 0 2rem 0 0;
  gap: 0.5rem;
}
.userLinks .link {
  color: var(--carbon);
  text-decoration: none;
}
.navbar {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 2rem;
  top: 0;
  position: sticky;
  background-color: white;
  z-index: 2;
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
  align-items: center;
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
.dropdown {
  background-color: transparent;
}
.dropdown-toggle::after {
  content: none;
}

@media screen and (max-width: 900px) {
  .logo {
    width: 60px;
  }
  .fa-solid {
    font-size: 1rem;
  }
  .navbar {
    padding: 0.4rem 1rem;
  }
}
</style>
