<template>
  <div>
    <h1>HTTP</h1>
    <button class="btn btn-primary" @click="getData">getData</button>

    <hr />
    <button class="btn btn-primary" @click="postData">postData</button>

    <ul>
      <li v-for="el in data" :key="el.id">{{el.title}}</li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      data: Array
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => (this.data = data));
    },
    postData() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", { status: "ok" })
        .then(response => response.json())
        .then(repsonse => console.log(response));
    }
  }
};
</script>