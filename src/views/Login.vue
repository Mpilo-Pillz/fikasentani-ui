<template>
  <form @submit.prevent="onSubmit(identifier, password)">
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="text"
        v-model="identifier"
        placeholder="Email"
      />
    </fieldset>
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="password"
        v-model="password"
        placeholder="Password"
      />
    </fieldset>
    <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
  </form>
</template>

<script>
// import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";
export default {
  name: "Login",
  data() {
    return {
      identifier: null,
      password: null,
    };
  },
  methods: {
    onSubmit(identifier, password) {
      console.log(identifier, password);
      this.$store.dispatch(LOGIN, { identifier, password });
      // .then(() => this.$router.push({ name: "home" }));
    },
  },
};
</script>
