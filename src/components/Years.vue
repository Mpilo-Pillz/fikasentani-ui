<style lang="scss" scoped>
hr {
  margin: 10px auto;
  width: 50%;
}
.card-summary {
  line-height: 1.5;
  margin: 2rem auto;
  max-width: 150rem;
  padding: 2rem;
  background-color: #fff;
}

.profession {
  font-size: 25px;
  margin: 20px;

  &--heading {
    background-color: #000;
    color: #fff;
    padding: 10px;
  }
}

.text-center {
  text-align: center;
}

.total-years {
  display: flex;

  align-items: center;
  flex-direction: column;
}
.total-years__header {
  align-self: center;
  background: #078307;
  border-radius: 50%;
  color: #fff;
  font-size: 50px;
  width: 120px;
  height: 120px;
  margin: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.years-card-heading {
  border-bottom: solid 2px #949292;
  padding: 20px;
}

.years-figures {
  display: flex;
}

.year-pill {
  color: #078307;
}
</style>
<template>
  <section class="years-figures">
    <div class="card shadow-lg total-years">
      <h2 class="years-card-heading">
        Total Years of Software Engineering Experience
      </h2>
      <div class="total-years__header">
        <strong>
          <h1>
            {{ years?.years?.yearsOfExperience?.totalEngineering }}
          </h1>
        </strong>
      </div>
      <h1>Years</h1>
    </div>

    <div class="card shadow-lg compnent--mb text-center">
      <h1 class="profession--heading">
        Years of Software Engineering Experience
      </h1>

      <div class="profession-breakdown">
        <p class="font-weight--300 profession">
          Developer: <br />
          <strong class="year-pill">
            {{ years?.years?.yearsOfExperience?.developer }}
          </strong>
          years
        </p>
        <hr />
        <p class="font-weight--300 profession">
          Test Engineering: <br />
          <strong class="year-pill">
            {{ years?.years?.yearsOfExperience?.testEngineering }}</strong
          >
          years
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Years",
  computed: mapState({ years: (state) => state.years }),
  methods: mapActions(["fetchYears"]),
  created() {
    this.fetchYears();
  },
};
</script>
