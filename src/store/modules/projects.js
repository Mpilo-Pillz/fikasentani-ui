// import { makeRequest } from "../../services/api.service";

const state = {
  projects: [],
};

const getters = {
  allProjects: (state) => state.projects,
};

const actions = {
  async fetchProjects({ commit }) {
    // const response = await makeRequest.get("/projects");
    const response = [
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
            name: "PostgreSQL",
            proficiency: 50,
            thumbnail:
              "https://res.cloudinary.com/mpilopillz/image/upload/v1627756497/postgresql_yeewlq.svg",
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
        ],
      },
      {
        id: 5,
        title: "SwaziTunes",
        description:
          "MEAN stack application aiming to be a music streaming service.",
        slug: "swazi-tunes-1",
        url: "https://swazi-tunes.web.app/",
        image:
          "https://res.cloudinary.com/mpilopillz/image/upload/v1627839576/swazitunes_rohuax.png",
        published_at: "2021-07-27T19:23:28.534Z",
        created_at: "2021-07-27T19:21:09.962Z",
        updated_at: "2021-08-01T17:40:13.286Z",
        stacks: [
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
            id: 2,
            name: "Angular",
            proficiency: 70,
            thumbnail:
              "https://res.cloudinary.com/mpilopillz/image/upload/v1627756495/angular_zooej9.svg",
            published_at: "2021-07-27T19:26:25.759Z",
            created_at: "2021-07-27T19:26:22.311Z",
            updated_at: "2021-07-31T18:43:14.664Z",
          },
        ],
      },
      {
        id: 6,
        title: "Online CV",
        description: "My personal online CV",
        slug: "online-cv",
        url: "https://mpilo-pillz.github.io/mtfknd-cv/",
        image:
          "https://res.cloudinary.com/mpilopillz/image/upload/v1627840116/onlinecv_nyvmm6.png",
        published_at: "2021-07-27T19:23:33.008Z",
        created_at: "2021-07-27T19:22:10.879Z",
        updated_at: "2021-08-01T17:49:58.826Z",
        stacks: [
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
            id: 13,
            name: "JavaScript",
            proficiency: 90,
            thumbnail:
              "https://res.cloudinary.com/mpilopillz/image/upload/v1627756498/javascript_lfwij2.svg",
            published_at: "2021-07-27T19:29:59.130Z",
            created_at: "2021-07-27T19:29:56.717Z",
            updated_at: "2021-07-31T18:41:30.683Z",
          },
        ],
      },
      {
        id: 7,
        title: "Clinic Workflow",
        description:
          "Hospital administration system to centralise patient files",
        slug: "clinic-workflow",
        url: "https://clinic-workflow.web.app/",
        image:
          "https://res.cloudinary.com/mpilopillz/image/upload/v1627839400/clinic_yrcfls.png",
        published_at: "2021-07-27T19:23:19.974Z",
        created_at: "2021-07-27T19:22:52.052Z",
        updated_at: "2021-08-01T17:39:47.864Z",
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
            id: 21,
            name: "NodeJS",
            proficiency: 80,
            thumbnail:
              "https://res.cloudinary.com/mpilopillz/image/upload/v1627756495/nodedotjs_ve25ia.svg",
            published_at: "2021-07-27T19:33:06.969Z",
            created_at: "2021-07-27T19:33:04.944Z",
            updated_at: "2021-07-31T18:37:27.832Z",
          },
        ],
      },
    ];
    commit("setProjects", response);
  },
};

const mutations = {
  setProjects: (state, projects) => {
    state.projects = projects;
  },
};

export default { state, getters, actions, mutations };

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
