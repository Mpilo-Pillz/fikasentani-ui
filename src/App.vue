<template>
  <div id="nav">
    <Contact />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

// #app {
//   max-width: 150rem;
// }

html {
  //defining what 1rem is
  font-size: 62.5%; //1rem = 10px, 10/16 = 62.5%
}

body {
  background-color: #dfdfdf;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  // margin: 0 30rem;
}
.btn {
  border: none;
  background-color: #fff;
  // border-radius: 5px;
  font-weight: 800;
  margin: 2rem 1rem;
  padding: 10px 20px;
  width: 20rem;

  &:hover {
    background-color: #575454;
    color: #fff;
    cursor: pointer;
    font-weight: 900;
  }
}

.element-center--width {
  margin: auto;
  max-width: 150rem;
}

.card {
  line-height: 1.5;
  margin: 2rem auto;
  max-width: 150rem;
  padding: 2rem;
  background-color: #fff;
}

.compnent--mb {
  margin-bottom: 5rem;
}

.fikasentani-heading {
  text-align: center;
  font-size: 3.2rem;
  font-weight: bolder;
  margin: 2rem;
}

.flex-row-center {
  display: flex;
  flex-direction: row;
}

.flex-space-evenly {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
}

.font-weight--300 {
  font-weight: 300;
}

.u-margin {
  &__md {
    margin: 2rem;
  }
  &__tb {
    margin: 2rem 0;
  }
}

.router-link-exact-active {
  color: #000;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 2rem;
}

p {
  font-weight: 300;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

::selection {
  background-color: #fff;
  color: #fff;
}

@media only screen and (max-width: 1100px) {
  .btn {
    margin: 0.5rem;
  }
  .router-link-exact-active {
    color: #000;
    border-bottom: 2px solid black;
    box-shadow: none;
    padding: 0.5rem;
  }
}
</style>
