<style lang="scss" scoped>
a {
  color: #000;
  font-weight: 800;
  text-decoration: none;
}
.header {
  background-color: #eee;
  padding: 2rem;
}

.limit-width {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 150rem;
}

#mobile-nav {
  display: none;
}

.nav-item {
  text-decoration: none;
  margin: 2rem;
}

@media only screen and (max-width: 1100px) {
  /*Big smartphones [426px -> 600px]*/
  .header {
    padding: 0 2rem;
  }
  #mobile-nav {
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    width: 100%;
  }

  .mobile-nav-item {
    // margin: 1rem;
  }
  #nav {
    display: none;
    padding: 0;
  }
  .nav-item {
    text-decoration: none;
    margin: 0.5rem;
  }
  .limit-width {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
}
</style>
<template>
  <header class="header">
    <div class="limit-width">
      <div class="fika-logo" @click="goToHome">FIKASENTECH</div>
      <nav id="nav">
        <span class="nav-item"> <router-link to="/">Home</router-link> </span>
        <span class="nav-item">
          <router-link to="/projects">Projects</router-link>
        </span>
        <span class="nav-item">
          <router-link to="/training">Training</router-link>
        </span>
        <span class="nav-item">
          <router-link to="/cv">CV</router-link>
        </span>
      </nav>

      <nav id="mobile-nav">
        <span class="mobile-nav-item">
          <router-link to="/">Home</router-link>
        </span>
        <span class="mobile-nav-item">
          <router-link to="/projects">Projects</router-link>
        </span>
        <span class="mobile-nav-item">
          <router-link to="/training">Training</router-link>
        </span>
        <span class="mobile-nav-item">
          <router-link to="/cv">CV</router-link>
        </span>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
