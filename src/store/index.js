import { createStore } from "vuex";
import auth from "./modules/auth";
import projects from "./modules/projects";
import training from "./modules/training";
import workHistory from "./modules/workHistory";

export default createStore({
  modules: { auth, projects, training, workHistory },
});
