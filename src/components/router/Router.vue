<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3 col-md-6 offset-md-3">
      <hr />
      <p>
        Parameters recived:
        <span>{{ id }}</span>
      </p>
      <hr />
      <a href="#" class="params">
        <router-link to="/router/5">Router/5</router-link>
      </a>
      <a href="#" class="params">
        <router-link to="/router/10">Router/10</router-link>
      </a>
      <a href="#" class="params">
        <router-link to="{ params: 15, query: { lang: 'en', country:'us' } }">Router query</router-link>
      </a>
      <p>We access to params by this.$route.params</p>
      <p>We must set watch on the $route(to, from) {this.id = to.params.id} to catch value of id</p>
      <hr />
      <p>We can control that user cant accidentaly leave the current page using beforeRouteLeave(to, from, next)</p>
      <hr />
      <p>To navigate from code we use this.$router.push("path");</p>
      <button class="btn btn-primary" @click="navigateToComunication">To Communication Tab</button>
      <hr />
      <p>Initialy we dont want load all code. Lazy loading the http section</p>
      <a href="#">
        <router-link to="/http">Go to the http module</router-link>
      </a>

      <hr />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      confirmed: false
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  methods: {
    navigateToComunication() {
      this.$router.push({ name: "communication" });
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure to leave this tab?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style scoped>
span {
  color: rgb(161, 0, 161);
  padding-left: 20px;
}

.params {
  display: inline-block;
  padding: 10px;
}
</style>
