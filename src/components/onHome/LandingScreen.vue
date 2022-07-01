<template>
  <div class="landing">
    <div class="land-img">
      <img class="image" src="@/assets/img/extras/pc.jpg" alt="" />
    </div>
    <div class="land-msg">
      <div class="upper-msg">
        <img src="@/assets/img/brands/apple.svg" alt="" class="logo" />
        <div class="msg">
          <h2>The Apple week is here!</h2>
          <h4>Save up to a 40% on MacBook Series this week.</h4>
        </div>
        <div class="features">
          <p>Supercharged by</p>
          <img class="M1" src="@/assets/img/extras/M1Pro.png" alt="" />
          <p>and</p>
          <img class="M1" src="@/assets/img/extras/M1ProMax.png" alt="" />
        </div>
        <div class="links">
          <a href="" class="link">Learn more ></a>
          <a href="" class="link">Buy ></a>
        </div>
      </div>
      <hr class="divider" />
      <div class="lower-msg">
        <h3>Get <span class="supercharged">supercharged</span> for college.</h3>
        <h5>Save on Mac or iPad. Get in instant gift card up to $150.</h5>
        <div class="buy-options">
          <div class="mac">
            <h6>Buy Mac.</h6>
            <a href="">Compare models.</a>
          </div>
          <div class="ipad">
            <h6>Buy iPad.</h6>
            <a href="">Compare models.</a>
          </div>
        </div>
        <p>Or</p>
        <a href="">Explore Apple college accesories</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
.landing {
  display: flex;
  background-color: var(--black);
  border-radius: 2rem;
  margin: 1rem;
}
.land-msg {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 1rem;
  padding: 1rem;
}
.upper-msg {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.msg {
  text-align: center;
}
.features {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
}

.M1 {
  width: 50px;
  -webkit-box-shadow: 0px 0px 20px 6px rgba(255, 46, 116, 0.68);
  -moz-box-shadow: 0px 0px 20px 6px rgba(255, 46, 116, 0.68);
  box-shadow: 0px 0px 20px 6px rgba(255, 46, 116, 0.68);
}

.links {
  display: flex;
  gap: 2rem;
}

a {
  color: var(--blue);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.divider {
  border: solid white 1px;
  width: 80%;
}
.lower-msg {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.lower-msg > h3 {
  font-style: italic;
}
.supercharged {
  color: var(--pink);
}

.buy-options {
  display: flex;
  gap: 5rem;
  margin-top: 1rem;
}
.logo {
  width: 50px;
  margin: 1rem;
}
.land-img {
  width: 50%;
}
.image {
  width: 90%;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
}

@media screen and (max-width: 900px) {
  .landing {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: 1;
  }
  .image {
    display: none;
  }
}
</style>
