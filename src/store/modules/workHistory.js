// import { makeRequest } from "../../services/api.service";

const state = {
  workHistory: [],
};

const getters = {
  allWorkHistorys: (state) => state.workHistory,
};

const actions = {
  async fetchWorkHistory({ commit }) {
    // const response = await makeRequest.get("/works");
    const response = [
      {
        id: 1,
        employer: "Standard Bank Group",
        start: "May 2013",
        end: "November 2018",
        position: "QA/Test Engineer",
        summary:
          "Standard bank is one of the biggest banks in Africa. I started my Software Engineering career as a tester in a Testing Learnership. As I gained experience I learned NodeJS and started writing automated tests in JavaScript. In my 5 and a half years at the bank, I set up various Test Automation frameworks and I mentored Graduates. I worked primarily with Internet Banking collaborating with developers in ensuring quality across the platform.",
        published_at: "2021-08-01T12:36:34.755Z",
        created_at: "2021-08-01T12:36:31.446Z",
        updated_at: "2021-08-01T12:36:34.765Z",
        applications: [],
      },
      {
        id: 2,
        employer: "Osiris Trading / Betway",
        start: "November 2018",
        end: "April 2021",
        position: "Frontend Developer",
        summary:
          "Osiris Trading is a business that powers a global sports book called Betway. In my 2 and a half years at Osiris, I served as a developer and I built and maintained and tested the Betway sports betting web applications using Angular7, Kentico CMS HTML CSS and JavaScript consuming REST services. I also assisted QA with setting up a Test Automation framework for Web, iOS and Android Apps. I also built various mini games, leaderboards and promotional splash pages. I also trained a Junior Developer.",
        published_at: "2021-08-01T12:38:32.610Z",
        created_at: "2021-08-01T12:38:22.330Z",
        updated_at: "2021-08-01T12:38:32.620Z",
        applications: [],
      },
    ];

    commit("setWorkHistory", response);
    // console.log("work api request");
  },
};

const mutations = {
  setWorkHistory: (state, workHistory) => {
    state.workHistory = workHistory.reverse();
  },
};

export default { state, getters, actions, mutations };
