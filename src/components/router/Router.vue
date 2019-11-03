<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3 col-md-6 offset-md-3">
      <p>
        Parameters recived:
        <span>{{ id }}</span>
      </p>
      <a href="#">
        <router-link to="/router/5">Router/5</router-link>
      </a>
      <a href="#">
        <router-link to="/router/10">Router/10</router-link>
      </a>
      <a href="#">
        <router-link
          to="{name = 'router', params: 10, query:{lang: 'en', country:'us'}  }"
        >Router query</router-link>
      </a>
      <p>We access to params by this.$route.params.id</p>
      <p>We must set watch on the $route(to, from) {this.id = to.params.id} to catch value od id</p>
      <p>To navigate from code we use this.$router.push("path");</p>
    </div>
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

<style scoped>
span {
  color: rgb(161, 0, 161);
}
</style>
