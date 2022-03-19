<style lang="scss" scoped>
.footer {
  display: flex;

  background-color: #000;
  color: #fff;
  align-items: center;
  flex-direction: column;
  line-height: 2.5;
  padding: 3rem;
}
</style>
<template>
  <footer class="footer">
    <h3>&copy; Fikasentani Technologies</h3>
    <p>{{ year }} All rights reserved</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
