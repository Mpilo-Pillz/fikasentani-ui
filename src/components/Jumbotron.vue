<style lang="scss" scoped>
// .btn {
//   background-color: #fff;
//   border: none;
//   // border-radius: 5px;
//   font-weight: 800;
//   margin: 2rem 1rem;
//   padding: 10px 20px;
//   width: 20rem;

//   &__link {
//     text-decoration: none;
//   }

//   &:hover {
//     background-color: #575454;
//     color: #fff;
//     cursor: pointer;
//     font-weight: 900;
//   }
// }

.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.jumbotron {
  background: #000;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);
  background-image: url("https://images.unsplash.com/photo-1616763355603-9755a640a287?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  // background-image: url("https://images.unsplash.com/photo-1489257712451-3a66755ca19c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  // background-image: url("https://images.unsplash.com/photo-1547658719-da2b51169166?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29yayUyMHN0YXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  line-height: 30px;
  padding: 2rem 0 5rem 0;

  &--align {
    display: flex;
    flex-direction: row;
  }
}
.profile-pic {
  position: relative;
  border-radius: 50%;
  height: 180px;
  width: 180px;
  padding: 0;
  margin: 2rem 0;
  border: 15px solid transparent;
  z-index: 9999;
  transition: all 0.3s ease-out;
  object-fit: cover;
}

@media only screen and (max-width: 1100px) {
  .jumbotron {
    text-align: center;
    &--align {
      flex-direction: column;
    }
    &-h1 {
      font-size: 2rem;
    }

    &-h4 {
      font-size: 1.4rem;
    }
  }
}
</style>
<template>
  <section class="flex-center jumbotron compnent--mb">
    <img
      class="profile-pic"
      src="https://lh3.googleusercontent.com/pWGKsbC67uKkiC4xQKOPM4juc2DCUN9oqsBKqaqpRawSTFAeYfPTW-MhTnvFGEUJ3nMJoqsbY3x6rs_uqZb9nts9npWdjgUtI0W3jhDfYd9LuSa7DFj6q9R5apEXi0JyTiuSJqQV=w2400"
      alt="fikasentani"
    />
    <h1 class="jumbotron-h1">MT Fikasentani KN Dlamini</h1>
    <h4 class="jumbotron-h4">
      Software Developer, Software Development Engineer in Test
    </h4>
    <div class="jumbotron--align">
      <button class="btn" @click="goToTraining">View Training</button>
      <button class="btn" @click="goToCV">View CV</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Jumbotron",
  methods: {
    goToCV() {
      this.$router.push("cv");
    },

    goToTraining() {
      this.$router.push("training");
    },
  },
};
</script>
