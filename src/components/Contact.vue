<style lang="scss" scoped>
.contact {
  display: flex;
  position: fixed;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  flex-direction: column;
  height: 6rem;
  margin-right: 2.5rem;
  right: 0;
  top: 50%;

  & > a {
    height: 100%;
    margin: 0.1rem;
  }

  &__img {
    background-color: #fff;
    height: 5rem;
    padding: 1rem;

    &:hover {
      background-color: #eee;
    }
  }
}

@media only screen and (max-width: 1100px) {
  .contact {
    background-color: #eee;
    position: static;
    height: 4.5rem;

    width: 100%;
    flex-direction: row;
    justify-content: center;
    box-shadow: none;
    // top: 50%;
    // left: 50%;
  }
}
</style>
<template>
  <section class="contact">
    <a href="https://github.com/Mpilo-Pillz/" target="_blank"
      ><img
        class="contact__img"
        src="https://res.cloudinary.com/mpilopillz/image/upload/v1628141133/icons/github_jkrfkj.svg"
        alt="GitHub"
    /></a>
    <a
      href="https://www.linkedin.com/in/mpilo-dlamini-38600b149/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="contact__img"
        src="https://res.cloudinary.com/mpilopillz/image/upload/v1628141133/icons/linkedin_m3skqf.svg"
        alt="LinkedIn"
      />
    </a>
    <a href="mailto:mpilo.pillz@gmail.com">
      <img
        class="contact__img"
        src="https://res.cloudinary.com/mpilopillz/image/upload/v1628141133/icons/gmail_oegbcj.svg"
        alt="Email"
      />
    </a>
  </section>
</template>
<script>
export default {
  name: "Contact",
};
</script>
