import { createStore } from "vuex";
import auth from "./modules/auth";
import projects from "./modules/projects";
import training from "./modules/training";
import workHistory from "./modules/workHistory";
import years from "./modules/years";

export default createStore({
  modules: { auth, projects, training, workHistory, years },
});
