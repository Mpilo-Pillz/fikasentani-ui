<template>
  <div>DETAILS - {{ details }}</div>
</template>

<script>
export default {
  name: "ItemDetails",

  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log("deets", this.details);
  },
};
</script>
