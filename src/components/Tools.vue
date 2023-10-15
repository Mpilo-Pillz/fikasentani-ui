<style lang="scss" scoped>
.margin-md {
  margin: 1.5rem;
}

.tools {
  display: flex;
  flex-wrap: wrap;

  &__item {
    width: 60rem;
  }

  &__progress {
    width: 100%;
  }
}
@media only screen and (max-width: 1100px) {
  .tools {
    &__item {
      width: 100%;
    }
    &__progress {
      width: revert;
    }
  }
}
</style>

<template>
  <h1 class="fikasentani-heading">Skills</h1>
  <section class="card shadow-lg compnent--mb">
    <h1>My Tool Box</h1>
    <div class="tools">
      <div
        class="tools__item flex-col margin-md"
        v-for="tool in myTools"
        :key="tool.id"
      >
        <label>{{ tool.name }}</label>
        <progress
          class="tools__progress"
          :id="tool.id"
          :value="tool.proficiency"
          max="100"
        >
          32%
        </progress>
      </div>
    </div>
  </section>
</template>

<script>
import API_URL from "../common/config";
export default {
  name: "Tools",
  data() {
    return {
      myTools: [],
    };
  },

  mounted() {
    this.fetchMyTools();
  },

  methods: {
    async fetchMyTools() {
      const response = await fetch(`${API_URL}/api/v1/cv/tool`); // TODO: use makeRequest
      this.myTools = await response.json();
    },
  },
};
</script>
