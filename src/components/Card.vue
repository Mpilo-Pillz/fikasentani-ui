<style lang="scss" scoped>
.card {
  background-color: #fff;
  border: solid #c5c5c5 1px;
  height: 30rem;
  padding: 0;
  display: flex;
  justify-content: space-between;

  &--img {
    height: 100%;
  }

  &__text {
    color: #2196f3;
  }
}

.btn__link {
  display: inline-block;
  background-color: #2196f3;
  border-radius: 5px;
  color: #fff;
  margin: 1rem 0 0 0;
  padding: 1.5rem 2.5rem;
  text-decoration: none;
}

.icon-container {
  height: 3rem;
  & > img {
    height: 100%;
    margin-right: 0.5rem;
  }
}

.project {
  &__article {
    width: 30rem;
    padding: 2rem;
  }
  &__img {
    height: 100%;
    width: 70rem;
  }
  &--paragraph {
    font-weight: 300;
    margin: 1.5rem 0;
  }
}

ul.stack-items {
  display: flex;
  // align-items: stretch;
  // justify-content: space-between;
  // width: 100%; /* play with this number to get spacings correct */

  & > li {
    margin: 1rem 2rem;
  }
}

.col-sm {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

@media only screen and (max-width: 1100px) {
  .card {
    background-color: #fff;
    border: solid #c5c5c5 1px;
    height: auto;
    width: 100%;
    // margin: 2rem;
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    &--img {
      height: 100%;
    }

    &__text {
      color: #2196f3;
    }
  }
  .project {
    &__article {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &__img {
      // display: none;
      height: 100%;
      width: 100%;
    }
  }
  ul.stack-items {
    display: flex;
    flex-direction: column;
    // align-items: stretch;
    // justify-content: space-between;
    // width: 100%; /* play with this number to get spacings correct */

    & > li {
      margin: 1rem;
    }
  }
}
</style>
<template>
  <div
    class="card shadow-lg"
    id="render-projects"
    v-for="item in items"
    :key="item.id"
  >
    <article class="project__article">
      <h3>{{ item.title }}</h3>
      <p class="project--paragraph">{{ item.description }}</p>
      <h4>Built With:</h4>
      <ul class="stack-items">
        <li class="flex-row" v-for="stack in item.stacks" :key="stack.id">
          <div class="icon-container">
            <img class="icon-margin" :src="stack.thumbnail" :alt="stack.name" />
          </div>
          <span class="card__text">{{ stack.name }}</span>
        </li>
      </ul>
      <a class="btn__link" :href="item.url">See the Website</a>
    </article>
    <img class="project__img" :src="item.image" :alt="item.title" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      projects: [],
      stacks: [],
    };
  },
};
</script>
