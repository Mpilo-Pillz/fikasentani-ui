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
  <div
    v-for="summary in mySummary"
    :key="summary.id"
    class="card shadow-lg compnent--mb"
  >
    <h2>{{ summary.title }}</h2>
    <p class="font-weight--300">{{ summary.content }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      // mySummary: [],
      mySummary: [
        {
          id: 1,
          title: "About Me",
          slug: "about-me",
          content:
            "I have over 6 years working professionally with NodeJS and JavaScript, and over 8 years working in Software Engineering. I would describe myself as an individual that loves to learn. I have spent a majority of my career learning how to learn more efficiently and effectively (to add value) and that is my greatest strength. I like to keep an open mind. I have worked primarily in the Quality Assurance (Testing) side of the Software Development Lifecycle (SDLC). I have spent a majority of my career working as a Test Automation Engineer. I have switched to work on the Development side of the SDLC currently working as a Web Developer. I work as a front-end web developer and I enjoy the unique challenges it brings forth on a day to day. Outside of work hours, I focus on learning full stack web development, and mobile app development. I enjoy learning on Udemy.",
          published_at: "2021-07-20T03:23:52.678Z",
          created_at: "2021-07-20T03:23:42.388Z",
          updated_at: "2021-07-27T19:34:30.095Z",
          thumbnail: null,
        },
      ],
    };
  },

  mounted() {
    // this.fetchMySummary();
  },

  methods: {
    async fetchMySummary() {
      const response = await fetch("http://localhost:1337/articles");
      const aboutMe = await response.json();
      this.mySummary = aboutMe;
    },
  },
};
</script>
