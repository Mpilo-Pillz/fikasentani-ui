<style lang="scss" scoped>
.card {
  padding: 0;
}
.employer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(32, 29, 29);
  color: #fff;
  line-height: 2;
  min-width: 35rem;
  text-align: center;

  &--align {
    display: flex;
  }
}

.work-summary {
  line-height: 2;
  padding: 2rem;
}

@media only screen and (max-width: 1100px) {
  .employer {
    width: auto;
    min-width: 0;
    &--align {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
<template>
  <section class="">
    <h1 class="fikasentani-heading">Work History</h1>
    <div
      class="card employer--align shadow-lg"
      v-for="work in allWorkHistorys"
      :key="work.id"
    >
      <section class="employer">
        <div class="employer--heading">
          <h4>{{ work.start }} - {{ work.end }}</h4>
          <h2>{{ work.employer }}</h2>
        </div>
      </section>
      <div class="work-summary">
        <h2>{{ work.position }}</h2>
        <p>{{ work.summary }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WorkHistory",
  computed: mapGetters(["allWorkHistorys"]),
  methods: mapActions(["fetchWorkHistory"]),
  created() {
    // debugger;
    this.fetchWorkHistory();
    // console.log(allWorkHistorys);
  },
};
</script>
