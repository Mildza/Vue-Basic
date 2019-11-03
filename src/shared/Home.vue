<template>
  <div>
    <h1>Home Components</h1>
    <button class="btn btn-primary" @click="navigateToForm">To Form</button>
  </div>
</template>


<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    navigateToForm() {
      this.$router.push({ name: "form" });
    }
  }
};
</script>
