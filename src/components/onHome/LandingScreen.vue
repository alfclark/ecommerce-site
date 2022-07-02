<template>
  <div
    id="landpageCarousel"
    class="carousel slide"
    data-bs-ride="carousel"
    data-interval="0"
  >
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#landpageCarousel"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#landpageCarousel"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#landpageCarousel"
        data-bs-slide-to="2"
      ></button>
    </div>

    <!-- The slideshow/carousel -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="landing">
          <div class="land-img">
            <img
              class="image"
              src="https://www.apple.com/v/ipad-pro/ai/images/overview/thunderbolt/thunderbolt_hero__fg7vx8fb8ve6_large_2x.jpg"
              alt=""
            />
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
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="landing">
          <div class="land-msg">
            <img src="@/assets/img/brands/apple.svg" alt="" class="logo" />
            <div class="upper-msg">
              <h3>
                Get <span class="supercharged">supercharged</span> for college.
              </h3>
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
          <div class="land-img">
            <video
              src="https://www.apple.com/105/media/us/ipad-air/2022/5abf2ff6-ee5b-4a99-849c-a127722124cc/anim/features/large_2x.mp4"
              autoplay
              loop
            ></video>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="landing">
          <div class="land-img">
            <img
              src="@/assets/img/extras/assistants.png"
              alt=""
              class="image"
            />
          </div>
          <div class="land-msg">
            <div class="brand">
              <img src="@/assets/img/brands/google.svg" alt="" class="logo" />
              <h3>vs</h3>
              <img src="@/assets/img/brands/amazon.svg" alt="" class="logo" />
            </div>

            <div class="upper-msg">
              <h3>
                The war of the <span class="assistants">assistants</span> is
                here.
              </h3>
              <h5>Buy one and get the other for half the price.</h5>
              <div class="buy-options">
                <div class="mac">
                  <h6>Buy Google Devices</h6>
                  <a href="">Compare models.</a>
                </div>
                <div class="ipad">
                  <h6>Buy Alexa Devices</h6>
                  <a href="">Compare models.</a>
                </div>
              </div>
              <p>Or</p>
              <a href="">Explore smart accesories.</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Left and right controls/icons -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#landpageCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#landpageCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
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
  height: 400px;
  padding: 1rem 3rem;
}
.land-msg {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 0.5rem;
  padding: 2rem;
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

.upper-msg > h3 {
  font-style: italic;
}
.supercharged {
  color: var(--pink);
}
.assistants {
  color: var(--blue);
}

.buy-options {
  display: flex;
  gap: 5rem;
  margin-top: 1rem;
}
.brand {
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 50px;
  margin: 1rem;
}
.land-img {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
}
.image {
  height: auto;
  max-height: 100%;
  padding: 2rem;
}
video {
  width: 100%;
  height: auto;
  border-radius: 2rem;
  max-height: 100%;
}
@media screen and (max-width: 900px) {
  .landing {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .land-msg {
    padding: 2rem;
  }
  .image,
  video {
    display: none;
  }
}
</style>
