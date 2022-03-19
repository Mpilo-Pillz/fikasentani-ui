<style lang="scss" scoped>
.card {
  background-color: #dfdfdf;
  color: #000;
  max-width: 100rem;
}
h1 {
  margin: 1rem auto;
  text-align: center;
}
.training-certificate {
  width: 100%;
  // height: 100%;
  // width: 35rem;
  // max-height: 35rem;
}
.training {
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &-certificate {
    display: block;
  }
  &__header {
    color: #fff;
    font-size: 1.7rem;
    font-weight: bolder;
    text-decoration: none;
  }

  &-item {
    border-radius: 5px;
    margin: 1rem;
    background-color: #000;
    width: 40rem;
  }

  &__text {
    font-weight: 300;
    line-height: 1.5;
    padding: 1rem;
    text-align: center;
  }

  &__link {
    color: #fff;
    text-decoration: underline;
  }
}

@media only screen and (max-width: 1100px) {
  .training-certificate {
    // max-height: 100% !important;
  }
}
</style>
<template>
  <section class="about">
    <div class="card shadow-lg">
      <h1>Continous Learning</h1>
      <p>
        I have completed a minimum of 230 hours doing coding boot camps on Udemy
        with certificates of completion obtained. I use Udemy, YouTube, Head
        First Programming text book series and Developer Documentation (mostly
        MDN and W3Schools) as my source of learning. I learn by doing (coding),
        and applying my knowledge by building web apps.
      </p>
    </div>
    <div class="training">
      <div
        v-for="training in allTrainings"
        :key="training.id"
        class="training-item shadow"
      >
        <img class="training-certificate" :src="training.img" alt="" />
        <section class="training__text">
          <span>
            <a class="training__header" :href="training.courselink"
              ><em>{{ training.name }}</em></a
            >
          </span>

          <div>
            <strong>Duration</strong>: <span>{{ training.hours }} hours</span>
          </div>
          <div>
            <strong>Training Institution</strong>:
            <span>{{ training.provider }}</span>
          </div>
          <div>
            <strong>Instructor</strong>:
            <a class="training__link" :href="training.instructorprofile">{{
              training.instructor
            }}</a>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Training",
  computed: mapGetters(["allTrainings"]),
  methods: mapActions(["fetchTraining"]),
  created() {
    this.fetchTraining();
  },
};
</script>
