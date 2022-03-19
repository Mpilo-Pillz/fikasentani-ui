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
export default {
  name: "Tools",
  data() {
    return {
      // myTools: [],
      myTools: [
        {
          id: 1,
          name: "React",
          proficiency: 85,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756498/react_ymz4lk.svg",
          published_at: "2021-07-20T04:54:17.153Z",
          created_at: "2021-07-20T04:53:44.421Z",
          updated_at: "2021-07-31T18:40:55.963Z",
        },
        {
          id: 2,
          name: "Angular",
          proficiency: 70,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756495/angular_zooej9.svg",
          published_at: "2021-07-27T19:26:25.759Z",
          created_at: "2021-07-27T19:26:22.311Z",
          updated_at: "2021-07-31T18:43:14.664Z",
        },
        {
          id: 3,
          name: "Vue",
          proficiency: 65,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756499/vue_elunbo.svg",
          published_at: "2021-07-27T19:26:36.652Z",
          created_at: "2021-07-27T19:26:34.859Z",
          updated_at: "2021-07-31T18:42:23.664Z",
        },
        {
          id: 4,
          name: "NestJS",
          proficiency: 60,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756497/nestjs_kghd8d.svg",
          published_at: "2021-07-27T19:27:25.925Z",
          created_at: "2021-07-27T19:27:22.890Z",
          updated_at: "2021-07-31T18:36:59.835Z",
        },
        {
          id: 5,
          name: "ExpressJS",
          proficiency: 60,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756495/express_qorffl.svg",
          published_at: "2021-07-27T19:27:42.260Z",
          created_at: "2021-07-27T19:27:40.345Z",
          updated_at: "2021-07-31T18:38:19.593Z",
        },
        {
          id: 6,
          name: "MongoDB",
          proficiency: 45,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756495/mongodb_l1xqsi.svg",
          published_at: "2021-07-27T19:27:54.604Z",
          created_at: "2021-07-27T19:27:52.385Z",
          updated_at: "2021-07-31T18:37:48.157Z",
        },
        {
          id: 7,
          name: "PostgreSQL",
          proficiency: 50,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756497/postgresql_yeewlq.svg",
          published_at: "2021-07-27T19:28:20.645Z",
          created_at: "2021-07-27T19:28:18.819Z",
          updated_at: "2021-07-31T18:39:04.678Z",
        },
        {
          id: 8,
          name: "Strapi",
          proficiency: 60,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627757216/strapi_ilyqsg.svg",
          published_at: "2021-07-27T19:28:37.803Z",
          created_at: "2021-07-27T19:28:36.078Z",
          updated_at: "2021-08-01T10:44:21.406Z",
        },
        {
          id: 9,
          name: "Docker",
          proficiency: 20,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627757216/docker_kzv4yk.svg",
          published_at: "2021-07-27T19:28:52.492Z",
          created_at: "2021-07-27T19:28:50.414Z",
          updated_at: "2021-07-31T18:47:15.195Z",
        },
        {
          id: 10,
          name: "Cypress",
          proficiency: 75,
          thumbnail: null,
          published_at: "2021-07-27T19:29:15.486Z",
          created_at: "2021-07-27T19:29:13.327Z",
          updated_at: "2021-07-29T06:50:27.521Z",
        },
        {
          id: 11,
          name: "Jest",
          proficiency: 55,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627757216/jest_xia2sz.svg",
          published_at: "2021-07-27T19:29:31.015Z",
          created_at: "2021-07-27T19:29:28.803Z",
          updated_at: "2021-07-31T18:47:33.381Z",
        },
        {
          id: 12,
          name: "Protractor",
          proficiency: 70,
          thumbnail: null,
          published_at: "2021-07-27T19:29:43.507Z",
          created_at: "2021-07-27T19:29:41.740Z",
          updated_at: "2021-07-29T06:52:34.458Z",
        },
        {
          id: 13,
          name: "JavaScript",
          proficiency: 90,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756498/javascript_lfwij2.svg",
          published_at: "2021-07-27T19:29:59.130Z",
          created_at: "2021-07-27T19:29:56.717Z",
          updated_at: "2021-07-31T18:41:30.683Z",
        },
        {
          id: 14,
          name: "TypeScript",
          proficiency: 75,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756498/typescript_racv6t.svg",
          published_at: "2021-07-27T19:30:13.962Z",
          created_at: "2021-07-27T19:30:11.741Z",
          updated_at: "2021-07-31T18:42:05.946Z",
        },
        {
          id: 15,
          name: "HTML5",
          proficiency: 90,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756496/html5_l8buou.svg",
          published_at: "2021-07-27T19:31:01.179Z",
          created_at: "2021-07-27T19:30:35.760Z",
          updated_at: "2021-07-31T18:38:40.145Z",
        },
        {
          id: 16,
          name: "CSS3",
          proficiency: 85,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756495/css3_nmbjak.svg",
          published_at: "2021-07-27T19:30:57.704Z",
          created_at: "2021-07-27T19:30:46.278Z",
          updated_at: "2021-07-31T18:43:35.978Z",
        },
        {
          id: 17,
          name: "C#",
          proficiency: 45,
          thumbnail: null,
          published_at: "2021-07-27T19:31:15.795Z",
          created_at: "2021-07-27T19:31:13.946Z",
          updated_at: "2021-07-29T06:50:58.799Z",
        },
        {
          id: 18,
          name: "Cucumber",
          proficiency: 95,
          thumbnail: null,
          published_at: "2021-07-27T19:31:34.574Z",
          created_at: "2021-07-27T19:31:31.749Z",
          updated_at: "2021-07-29T06:50:43.949Z",
        },
        {
          id: 19,
          name: "Selenium",
          proficiency: 75,
          thumbnail: null,
          published_at: "2021-07-27T19:31:57.175Z",
          created_at: "2021-07-27T19:31:55.487Z",
          updated_at: "2021-07-29T06:53:00.096Z",
        },
        {
          id: 20,
          name: "Appium",
          proficiency: 75,
          thumbnail: null,
          published_at: "2021-07-27T19:32:11.129Z",
          created_at: "2021-07-27T19:32:09.255Z",
          updated_at: "2021-07-29T06:51:08.729Z",
        },
        {
          id: 21,
          name: "NodeJS",
          proficiency: 80,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627756495/nodedotjs_ve25ia.svg",
          published_at: "2021-07-27T19:33:06.969Z",
          created_at: "2021-07-27T19:33:04.944Z",
          updated_at: "2021-07-31T18:37:27.832Z",
        },
        {
          id: 22,
          name: "GraphQL",
          proficiency: 25,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627814070/graphql_n7luty.svg",
          published_at: "2021-07-27T19:37:51.421Z",
          created_at: "2021-07-27T19:37:47.096Z",
          updated_at: "2021-08-01T10:36:07.797Z",
        },
        {
          id: 23,
          name: "REST API",
          proficiency: 55,
          thumbnail: null,
          published_at: "2021-07-27T19:38:05.640Z",
          created_at: "2021-07-27T19:38:02.746Z",
          updated_at: "2021-07-29T06:52:42.275Z",
        },
        {
          id: 24,
          name: "SCSS/SASS",
          proficiency: 70,
          thumbnail: null,
          published_at: "2021-07-30T04:36:30.401Z",
          created_at: "2021-07-30T04:36:26.478Z",
          updated_at: "2021-07-30T04:36:30.412Z",
        },
        {
          id: 25,
          name: "SQLite",
          proficiency: 50,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627813846/sqlite_tuzean.svg",
          published_at: "2021-08-01T10:31:07.322Z",
          created_at: "2021-08-01T10:31:04.566Z",
          updated_at: "2021-08-01T10:31:07.332Z",
        },
        {
          id: 26,
          name: "Apollo",
          proficiency: 50,
          thumbnail:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627814069/apollographql_ppjmny.svg",
          published_at: "2021-08-01T10:35:40.797Z",
          created_at: "2021-08-01T10:35:37.753Z",
          updated_at: "2021-08-01T10:35:40.806Z",
        },
      ],
    };
  },

  mounted() {
    // this.fetchMyTools();
  },

  methods: {
    async fetchMyTools() {
      const response = await fetch("http://localhost:1337/stacks");
      //   const tools = await response.json();
      this.myTools = await response.json();
    },
  },
};
</script>
