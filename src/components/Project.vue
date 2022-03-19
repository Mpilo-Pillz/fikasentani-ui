<template>
  <h1 class="fikasentani-heading">Projects</h1>
  <Card :items="projects" />
</template>

<script lang="ts">
import Card from "./Card.vue";
export default {
  name: "Project",
  components: {
    Card,
  },
  data() {
    return {
      // projects: [],
      projects: [
        {
          id: 2,
          title: "Time Energy",
          description:
            "Logistics Application aimed at providing mobile fuel for vehicles in logistics services.",
          slug: "swazi-tunes",
          url: "http://time-energy.co.za/",
          image:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627840116/timeenergy_vjorsn.png",
          published_at: "2021-07-27T19:13:53.778Z",
          created_at: "2021-07-27T19:13:46.050Z",
          updated_at: "2021-08-01T17:50:32.647Z",
          stacks: [
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
              id: 26,
              name: "Apollo",
              proficiency: 50,
              thumbnail:
                "https://res.cloudinary.com/mpilopillz/image/upload/v1627814069/apollographql_ppjmny.svg",
              published_at: "2021-08-01T10:35:40.797Z",
              created_at: "2021-08-01T10:35:37.753Z",
              updated_at: "2021-08-01T10:35:40.806Z",
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
          ],
        },
        {
          id: 3,
          title: "Property Ads",
          description:
            "Web app aimed at making advertising property To Let and For Sale",
          slug: "property-ads",
          url: "https://v101propertyads.netlify.app/",
          image:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627840116/propertyads_ivrdcb.png",
          published_at: "2021-07-27T19:17:57.532Z",
          created_at: "2021-07-27T19:17:54.909Z",
          updated_at: "2021-08-01T17:49:29.033Z",
          stacks: [
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
              id: 25,
              name: "SQLite",
              proficiency: 50,
              thumbnail:
                "https://res.cloudinary.com/mpilopillz/image/upload/v1627813846/sqlite_tuzean.svg",
              published_at: "2021-08-01T10:31:07.322Z",
              created_at: "2021-08-01T10:31:04.566Z",
              updated_at: "2021-08-01T10:31:07.332Z",
            },
          ],
        },
        {
          id: 1,
          title: "Village Web",
          description:
            "Village Web is every resident's answer to affordable 21st-century living. ",
          slug: "village-web",
          url: "http://villageweb.co.za/",
          image:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627840117/villageweb_elwgjp.png",
          published_at: "2021-07-20T04:47:56.696Z",
          created_at: "2021-07-20T04:43:04.927Z",
          updated_at: "2021-08-01T17:50:49.768Z",
          stacks: [
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
              id: 9,
              name: "Docker",
              proficiency: 20,
              thumbnail:
                "https://res.cloudinary.com/mpilopillz/image/upload/v1627757216/docker_kzv4yk.svg",
              published_at: "2021-07-27T19:28:52.492Z",
              created_at: "2021-07-27T19:28:50.414Z",
              updated_at: "2021-07-31T18:47:15.195Z",
            },
          ],
        },
        {
          id: 4,
          title: "Fikasentech",
          description:
            "Website for Fikasentani Technoligies. Yes I built this website too.",
          slug: "fikasentech",
          url: "https://fikasentech.web.app/",
          image:
            "https://res.cloudinary.com/mpilopillz/image/upload/v1627840116/fikasentech_hlr4sy.png",
          published_at: "2021-07-27T19:20:44.074Z",
          created_at: "2021-07-27T19:20:42.342Z",
          updated_at: "2021-08-01T17:49:10.073Z",
          stacks: [
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
            // {
            //   id: 8,
            //   name: "Strapi",
            //   proficiency: 60,
            //   thumbnail:
            //     "https://res.cloudinary.com/mpilopillz/image/upload/v1627757216/strapi_ilyqsg.svg",
            //   published_at: "2021-07-27T19:28:37.803Z",
            //   created_at: "2021-07-27T19:28:36.078Z",
            //   updated_at: "2021-08-01T10:44:21.406Z",
            // },
            // {
            //   id: 25,
            //   name: "SQLite",
            //   proficiency: 50,
            //   thumbnail:
            //     "https://res.cloudinary.com/mpilopillz/image/upload/v1627813846/sqlite_tuzean.svg",
            //   published_at: "2021-08-01T10:31:07.322Z",
            //   created_at: "2021-08-01T10:31:04.566Z",
            //   updated_at: "2021-08-01T10:31:07.332Z",
            // },
          ],
        },
      ],
    };
  },

  mounted() {
    console.log("MEEE");
    // this.fetchProjects();
  },

  methods: {
    async fetchProjects() {
      const response = await fetch("http://localhost:1337/projects");
      const myProjects = await response.json();
      console.log(myProjects);
      this.projects = myProjects;
    },
  },
};
</script>
