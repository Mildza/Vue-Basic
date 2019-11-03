<template>
  <div>
    <p>Parameters recived: {{ id }}</p>
    <p>We access to params by this.$route.params.id</p>
    <p>We must set watch on the $route(to, from) {this.id = to.params.id} to catch value od id</p>
    <p>To navigate from code we use this.$router.push("path");</p>    
  </div>
</template>


<script>
  export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  }
};
</script>

