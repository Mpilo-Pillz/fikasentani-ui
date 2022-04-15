<style lang="scss" scoped>
@media only screen and (max-width: 1100px) {
  .home {
    padding: 1rem;
  }
}
</style>
<template>
  <div class="home">
    <Jumbotron />
    <Years />
    <AboutMe />
    <Crafts />
    <Tools />
    <WorkHistory />
    <Project />
  </div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Years from "@/components/Years.vue";
import Tools from "@/components/Tools.vue";
import AboutMe from "@/components/AboutMe.vue";
import Crafts from "@/components/Crafts.vue";
import WorkHistory from "@/components/WorkHistory.vue";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Jumbotron,
    AboutMe,
    Crafts,
    WorkHistory,
    Project,
    Years,
    Tools,
  },
  methods: mapActions(["fetchYears"]),
  created() {
    this.fetchYears();
  },
};
</script>
