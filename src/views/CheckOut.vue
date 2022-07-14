<template>
  <section class="checkoutScreen">
    <div class="checkOutCard">
      <!-- Billing section -->
      <div class="billing">
        <h3 class="title"><i class="fa-solid fa-lock"></i>Secure Checkout</h3>
        <hr />
        <div class="sections">
          <div class="section">
            <h4 @click="isShown = !isShown" class="subtitle">
              <div><i class="fa-solid fa-1"></i>Delivery</div>
              <i class="fa-solid fa-caret-down"></i>
            </h4>
            <Transition name="slide-fade">
              <div v-show="!isShown" class="content">
                <form action="" class="deliveryInfo">
                  <input class="email" type="email" placeholder="Email" />
                  <div class="name">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <input type="text" placeholder="Address" />
                  <div class="location">
                    <input type="text" placeholder="Postal Code" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Country" />
                  </div>
                </form>
                <form action="" class="deliveryMethods">
                  <div class="method">
                    <h5></h5>
                    <h5>Method</h5>
                    <h5>Time</h5>
                    <h5>Cost</h5>
                  </div>
                  <div class="method">
                    <input type="radio" name="gender" value="male" checked />
                    <h6>Standard</h6>
                    <h6>5-7 days</h6>
                    <h6>FREE</h6>
                  </div>
                  <div class="method">
                    <input type="radio" name="gender" value="male" />
                    <h6>Express</h6>
                    <h6>1-3 days</h6>
                    <h6>$5.99</h6>
                  </div>
                </form>
              </div>
            </Transition>
          </div>
          <div class="section">
            <h4 @click="isShown = !isShown" class="subtitle">
              <div><i class="fa-solid fa-2"></i>Payment</div>
              <i class="fa-solid fa-caret-down"></i>
            </h4>
            <Transition name="slide-fade">
              <div v-show="isShown" class="content">
                <div class="cardSection">
                  <div class="card">
                    <h4 class="cardNumber">1234 1234 1234 1234</h4>
                    <h6 class="cardHolder">holder name</h6>
                    <h6 class="cardDate">02/29</h6>
                    <img
                      src="https://www.svgrepo.com/show/362011/mastercard.svg"
                      alt=""
                      class="cardVendor"
                    />
                  </div>
                </div>
                <div class="paymentOptions">
                  <h5 class="payMethods">Payment methods accepted:</h5>
                  <div class="payments">
                    <img
                      class="payMethod"
                      src="https://www.svgrepo.com/show/362033/visa.svg"
                      alt="visa"
                    />
                    <img
                      class="payMethod"
                      src="https://www.svgrepo.com/show/362011/mastercard.svg"
                      alt="mastercard"
                    />
                    <img
                      class="payMethod"
                      src="https://www.svgrepo.com/show/328145/paypal.svg"
                      alt="paypal"
                    />
                  </div>
                </div>
                <div class="paymentInfo">
                  <form action="" class="paymentDetails">
                    <input
                      type="text"
                      class="cardNo"
                      placeholder="Cardholder Name"
                    />
                    <div class="cardDetails">
                      <input type="number" placeholder="Card Number" />
                      <input type="number" placeholder="MM/YY" />
                      <input type="number" placeholder="CVV" />
                    </div>
                  </form>
                  <div class="action">
                    <button class="continue">
                      Continue <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                    or
                    <button class="continue paypal">
                      <img
                        class="paypalImg"
                        src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <hr />
          <div class="section">
            <p class="disclaimer">
              By placing your order, you agree to our
              <a href="">Terms & Conditions</a> of GeekCave.
            </p>
          </div>
        </div>
      </div>
      <!-- Checkout section -->
      <div class="check">
        <h3 class="title">
          <i class="fa-solid fa-cart-shopping"></i>Your Order
        </h3>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}
.checkOutCard {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
}
.billing {
  width: 60%;
  padding: 0 0.5rem;
}
.title {
  font-size: 1rem;
  color: var(--carbon);
  display: flex;
  gap: 0.4rem;
}
.subtitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
  transition: 0.4s;
  padding: 0.3rem 0.5rem;
}
.subtitle:hover {
  background-color: var(--grey);
}
.subtitle div {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
input {
  width: 100%;
  margin: 0.8rem 0;
  font-size: 1.2rem;
  outline: none;
  font-size: Roboto;
  font-weight: 400;
  padding: 0 5px;
}

input::placeholder {
  color: var(--carbonLight);
  font-size: 1rem;
  font-weight: 300;
  padding: 0 0.5rem;
}

.name {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
}
.location {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
}
.deliveryMethods {
  display: flex;
  flex-direction: column;
}
.method {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}
input[type="radio"] {
  width: 1rem;
}
.method h5 {
  font-size: 0.8rem;
  margin: 0;
}
.method h6 {
  font-weight: 300;
  margin: 0;
  padding: 0.5rem 0;
}

.disclaimer {
  text-align: center;
  color: var(--carbonLight);
  font-size: 0.9rem;
  font-weight: 300;
}
.cardSection {
  display: flex;
  justify-content: center;
  height: 70%;
}
.paymentOptions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.payMethods {
  font-size: 0.8rem;
  margin: 0;
  font-weight: 300;
}
.payments {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.payMethod {
  width: 2rem;
}

.card {
  background: linear-gradient(
    90deg,
    rgb(36, 36, 41) 0%,
    rgb(68, 68, 106) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 52%;
  height: 16vw;
  border: none;
  border-radius: 1rem;
}

.cardNumber {
  position: absolute;
  font-size: 1.6vw;
  bottom: 20%;
  left: 1rem;
  color: white;
}
.cardHolder {
  position: absolute;
  bottom: 5%;
  left: 1rem;
  font-weight: 300;
  font-size: 1vw;
  color: white;
  text-transform: uppercase;
}
.cardDate {
  position: absolute;
  bottom: 5%;
  left: 52%;
  font-weight: 300;
  font-size: 1vw;
  color: white;
}
.cardVendor {
  width: 4.5vw;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 1rem;
}

.cardDetails {
  display: grid;
  grid-template-columns: 1.6fr 0.7fr 0.7fr;
  grid-template-rows: 1fr;
  gap: 0px 8px;
  grid-template-areas: ". . .";
}
.cardDetails input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
}
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.continue {
  border: none;
  background: var(--carbon);
  color: white;
  padding: 0.5rem 1rem;
  width: 8rem;
  height: 3rem;
  border-radius: 2rem;
}

.paypal {
  background-color: #fdc33a;
}
.paypalImg {
  height: 2rem;
}
.check {
  width: 40%;
}

/* Transition config */
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .billing {
    padding: 0;
  }
  input {
    padding: 0 3px;
    margin: 0.4rem 0;
  }
  input::placeholder {
    font-size: 0.8rem;
    padding: 0 3px;
  }
  .method {
    gap: 0.5rem;
  }
  .method h5 {
    font-size: 0.6rem;
    padding: 0.3rem;
  }
  .method h6 {
    font-size: 0.8rem;
  }
  .disclaimer {
    font-size: 0.7rem;
  }
  .card {
    display: none;
  }
  .action {
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 0.2rem;
  }
  .cardDetails {
    gap: 0px 3px;
  }
}
</style>
