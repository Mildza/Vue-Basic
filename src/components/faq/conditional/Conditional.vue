<template>
  <div>
    <h3 class="text-center mb-3">Conditional Renedring</h3>
    <p>
      For conditional rendering we can use directives, just one (v-if) or in this order
      <span>v-if, v-else-if, v-else</span>. v-else-if must follow v-if and v-else must follow v-else-if or otherwise it will not be recognized.
    </p>
    <p>
      When we use v-if and v-else to display two separate input its good practice to use
      <span>key</span> on input element to avoid reusing input block, insted new one will be created.
    </p>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
span {
  color: blue;
}
</style>