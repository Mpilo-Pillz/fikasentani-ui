<style lang="scss" scoped>
.card-summary {
  line-height: 1.5;
  margin: 2rem auto;
  max-width: 150rem;
  padding: 2rem;
  background-color: #fff;
}
</style>
<template>
  <div class="card shadow-lg compnent--mb">
    <h2>About Me</h2>
    <p class="font-weight--300">
      I have over
      {{ myYearsOfExperience?.yearsOfExperience?.totalEngineering - 3 }} years
      working professionally with NodeJS and JavaScript, and over
      {{ myYearsOfExperience?.yearsOfExperience?.totalEngineering }} years
      working in Software Engineering. I would describe myself as an individual
      that loves to learn. I have spent a majority of my career learning how to
      learn more efficiently and effectively (to add value) and that is my
      greatest strength. I like to keep an open mind. I have worked primarily in
      the Quality Assurance (Testing) side of the Software Development Lifecycle
      (SDLC). I have spent a majority of my career working as a Test Automation
      Engineer. I have switched to work on the Development side of the SDLC
      currently working as a Web Developer. I work as a front-end web developer
      and I enjoy the unique challenges it brings forth on a day to day. Outside
      of work hours, I focus on learning full stack web development, and mobile
      app development. I enjoy learning on Udemy.
    </p>
  </div>
</template>

<script>
// import API_URL from "../common/config";
import LOCAL_API_URL from "../common/config";
export default {
  name: "Years",
  data() {
    return {
      myYearsOfExperience: {},
    };
  },

  mounted() {
    this.fetchMyYearsOfExperience();
  },

  methods: {
    async fetchMyYearsOfExperience() {
      const response = await fetch(
        `${LOCAL_API_URL}/api/v1/summary/yearsOfExperience`
      );
      const yearsOfExperience = await response.json();
      this.myYearsOfExperience = yearsOfExperience;
    },
  },
};
// import { mapActions, mapGetters } from "vuex";
// export default {
//   name: "AboutMe",
//   computed: mapGetters(["allYears"]),
//   methods: mapActions(["fetchYears"]),
//   created() {
//     this.fetchYears();
//     console.log("AA-->", allYears);
//   },
// };
</script>
