<template>
  <footer class="footer">
    <a href="#" class="go-top">
      <h3>Go to top</h3>
    </a>
    <div class="footer-top">
      <div class="sections">
        <div class="logo-section">
          <img class="logo" src="@/assets/logo.png" alt="" />
          <p class="description">The best place to buy tech items.</p>
        </div>
        <div class="section">
          <h3 class="subtitle">Service</h3>
          <ul class="links">
            <li><a class="link" href="">About Us</a></li>
            <li><a class="link" href="">Contact Us</a></li>
            <li><a class="link" href="">Features</a></li>
            <li><a class="link" href="">Support</a></li>
          </ul>
        </div>
        <div class="section">
          <h3 class="subtitle">Resources</h3>
          <ul class="links">
            <li><a class="link" href="">Careers</a></li>
            <li><a class="link" href="">Settings</a></li>
            <li><a class="link" href="">Privacy</a></li>
            <li><a class="link" href="">Conditions</a></li>
          </ul>
        </div>
        <div class="section">
          <h3 class="subtitle">Contact</h3>
          <div class="contact">
            <ul class="links">
              <li>
                <a class="link" href="mailto:email@email.com">
                  <i class="fa-solid fa-envelope"></i>
                  Email Us
                </a>
              </li>
              <li>
                <a class="link" href="">
                  <i class="fa-solid fa-comment"></i>
                  Text Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="divider" />
    <div class="footer-bottom">
      <p class="credits">© 2022 GeekCave - All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  bottom: 0;
  align-items: center;
  background-color: var(--carbon);
  color: white;
  width: 100%;
}
.go-top {
  background-color: var(--carbonLight);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1rem 0;
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;
}

.go-top:hover {
  background-color: grey;
}

.go-top > h3 {
  font-size: 1rem;
  margin: 0;
  padding: 0.5rem;
  color: white;
}
.footer-top {
  display: flex;
  justify-content: center;
}
.sections {
  display: flex;
  gap: 10rem;
}
.logo-section {
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  text-align: center;
}
.section {
  display: flex;
  flex-direction: column;
  width: 25%;
}

.logo {
  width: 70px;
  background-color: white;
  margin-bottom: 0.3rem;
  padding: 0.4rem;
}

.description {
  font-size: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
}

.links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link {
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.4s;
  color: white;
}

.fa-solid {
  font-size: 0.8rem;
}

.link:hover {
  color: grey;
  text-decoration: underline;
  transition: 0.4s;
}

.contact {
  display: flex;
  transition: 0.4s;
  flex-direction: column;
}

.divider {
  width: 90vw;
}
.credits {
  font-size: 0.7rem;
}
@media screen and (max-width: 900px) {
  .sections {
    gap: 1rem;
  }
  .section {
    text-align: center;
    align-items: center;
  }
  .footer-top {
    padding: 0 1rem;
  }
  .subtitle {
    font-size: 1rem;
  }

  .link {
    font-size: 0.8rem;
  }

  .fa-solid {
    font-size: 0.8rem;
  }
}
</style>
