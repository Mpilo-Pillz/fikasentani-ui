<style lang="scss" scoped>
.crafts-card {
  width: 49rem;

  & > img {
    height: 6rem;
    margin: auto;
    width: 6rem;
  }
}
.crafts--title {
  margin: 1rem auto;
}

.services-offered {
  display: flex;
}

@media only screen and (max-width: 1100px) {
  /*Big smartphones [426px -> 600px]*/
  .services-offered {
    display: flex;
    flex-direction: column;
  }

  .crafts {
    &-card {
      width: 100%;
    }
  }
}
</style>

<template>
  <section class="element-center--width compnent--mb">
    <h1 class="fikasentani-heading">Services</h1>
    <div class="services-offered">
      <div
        class="card flex-space-evenly crafts-card shadow-lg"
        v-for="craft in crafts"
        :key="craft.id"
      >
        <img :src="craft.icon" :alt="craft.title" />
        <h2 class="crafts--title">{{ craft.title }}</h2>
        <p class="font-weight--300">{{ craft.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Craft",
  data() {
    return {
      // crafts: [],
      crafts: [
        {
          id: 1,
          title: "Web Development",
          description:
            "After spending the early parts of my career writing automated tests for web applications. I grew very familiar with the browser, HTML, CSS, and JavaScript and I developed a love for it. The web is a very powerful way to communicate ideas and services to an audience world wide not limited by borders in anyway. I offer services to build and maintain companies web applications.",
          icon: "https://res.cloudinary.com/mpilopillz/image/upload/v1627816391/website_ruqbab.png",
          published_at: "2021-07-30T14:45:09.420Z",
          created_at: "2021-07-30T14:45:05.039Z",
          updated_at: "2021-08-01T11:47:00.512Z",
        },
        {
          id: 2,
          title: "Test Automation",
          description:
            "Mobile and Web applications are a very scalable, efficient and reliable way for companies to sell goods and offers services to a wide range of consumers across the globe. Consumer needs evolve with time. It is important for Business Web and Mobile applications evolve to cater for those needs. As such I write scripts to test if those applications still meet customers needs.",
          icon: "https://res.cloudinary.com/mpilopillz/image/upload/v1627816391/bug_ntlnev.png",
          published_at: "2021-07-30T14:45:39.067Z",
          created_at: "2021-07-30T14:45:35.432Z",
          updated_at: "2021-08-01T11:51:29.993Z",
        },
        {
          id: 3,
          title: "Mobile Development",
          description:
            "Native mobile apps play a very important role in my life. My mobile phone is with me everywhere I go. As such I started off my programming journey by Learning Swift for iOS development and Java for Android development. I was introduced to Dart with Flutter and it is now my preferred tool for building native mobile applications.",
          icon: "https://res.cloudinary.com/mpilopillz/image/upload/v1627816391/cross-platform_zzd78t.png",
          published_at: "2021-07-30T14:46:02.485Z",
          created_at: "2021-07-30T14:45:59.077Z",
          updated_at: "2021-08-01T11:39:27.138Z",
        },
      ],
    };
  },
  created() {
    // this.fetchCrafts();
  },
  methods: {
    async fetchCrafts() {
      const response = await fetch("http://localhost:1337/crafts");
      const myCraft = await response.json();
      this.crafts = myCraft;
    },
  },
};
</script>
