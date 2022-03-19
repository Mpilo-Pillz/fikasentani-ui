<style lang="scss" scoped>
.card {
  text-align: center;
}

@media only screen and (max-width: 1100px) {
  .projects-list {
    padding: 1rem;
  }
}
</style>
<template>
  <section class="projects-list">
    <div class="card shadow-lg">
      <h1>Continous Improvement & Continuous Development</h1>
      <p>
        My desire to be a world class Software Engineer is great. As such I am
        constantly practicing to sharpen my craft. Outside of working hours I
        have collaborated with other senior developers to turn ideas into
        software helping me improve as a developer whiles exposing me to a
        variety of Tools and Frameworks. I have worked on the projects below.
      </p>
    </div>
    <Card :items="allProjects" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../components/Card.vue";
export default {
  name: "ProjectList",
  components: {
    Card,
  },
  computed: mapGetters(["allProjects"]),
  methods: mapActions(["fetchProjects"]),
  created() {
    this.fetchProjects();
  },
};
</script>
