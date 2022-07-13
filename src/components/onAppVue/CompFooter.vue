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
            <li>
              <router-link class="link" to="/about-us">About Us</router-link>
            </li>
            <li><router-link class="link" to="">Contact Us</router-link></li>
            <li><router-link class="link" to="">Features</router-link></li>
            <li><router-link class="link" to="">Support</router-link></li>
          </ul>
        </div>
        <div class="section">
          <h3 class="subtitle">Contact Us</h3>
          <div class="contactSection">
            <ul class="links">
              <li class="contact">
                <div class="contactItem">
                  <i class="fa-solid fa-house"></i>
                  <p>New York</p>
                </div>
                <div class="contactItem">
                  <i class="fa-solid fa-envelope"></i>
                  <p>mail@mail.com</p>
                </div>
                <div class="contactItem">
                  <i class="fa-solid fa-phone"></i>
                  <p>+ 01 234 567 88</p>
                </div>
              </li>
              <li class="social">
                <a class="socialLink" href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a class="socialLink" href="">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a class="socialLink" href="">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a class="socialLink" href="">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="divider" />
    <div class="footer-bottom">
      <p class="credits">
        © 2022 GeekCave - All rights reserved. | Made by
        <a target="blank" href="https://github.com/alfclark/ecommerce-site"
          >AlfClark</a
        >
      </p>
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
  gap: 5rem;
}
.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.section {
  display: flex;
  flex-direction: column;
}

.logo {
  width: 70px;
  background-color: white;
  margin-bottom: 0.3rem;
  padding: 0.4rem;
}

.description {
  font-size: 0.7rem;
  font-weight: 200;
}

.subtitle {
  font-size: 1.2rem;
}

.links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link,
.contactItem p {
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.4s;
  color: white;
  font-weight: 300;
  margin: 0;
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
  flex-direction: column;
  gap: 0.3rem;
}
.contactItem {
  display: flex;
  align-items: center;
}
.contactItem p {
  padding-left: 0.5rem;
}
.social {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.socialLink {
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.4s;
  color: white;
}

.socialLink:hover {
  color: var(--grey);
}

.divider {
  width: 90vw;
}
.credits {
  font-size: 0.7rem;
  font-weight: 300;
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

  .link,
  .contactItem p {
    font-size: 0.8rem;
  }

  .fa-solid {
    font-size: 0.8rem;
  }
  .contactItem p {
    padding-left: 0.3rem;
    font-size: 0.6rem;
  }
  .logo-section {
    width: 20%;
  }
  .sections {
    justify-content: center;
  }
}
</style>
