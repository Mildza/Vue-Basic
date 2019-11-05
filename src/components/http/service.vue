<template>
  <div class="text-center">
    <h2>Accessing HTTP via Vue-resource</h2>
    <hr />
    <p>Getting data via $http.get</p>
    <button class="btn btn-primary" @click="getData">getData</button>
    <ul class="mt-3 list-unstyled">
      <li v-for="el in reciveData" :key="el.id">{{el.name}}</li>
    </ul>
    <hr />
    <p>Post data via $http.post and get feedback</p>
    <button class="btn btn-primary" @click="postRequest">postData</button>
    <p v-if="postData" class="mt-3">{{postData.body}}</p>
    <p>Open console to view interceptors log</p>
    <hr />
    <p>Using $resource to fetch data and pass different endpoints</p>
    <div class="form-group">
      <label for="comments">
        <input type="radio" v-model="api" id="comments" value="comments" /> comments
      </label>
      <label for="todos">
        <input type="radio" v-model="api" id="todos" value="todos" /> todos
      </label>
      <label for="users">
        <input type="radio" v-model="api" id="users" value="users" /> users
      </label>
      <label for="albums">
        <input type="radio" v-model="api" id="albums" value="albums" /> albums
      </label>
    </div>
    <button class="btn btn-primary" @click="getResource">Get custom data</button>

    <ul class="mt-3 list-unstyled">
      <li v-for="el in resourceData" :key="el.id">{{el}}</li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      reciveData: Array,
      postData: Object,
      resourceData: [],
      api: "todos"
    };
  },
  methods: {
    getData() {
      this.$http
        .get("users")
        .then(response => response.json())
        .then(data => (this.reciveData = data));
    },
    postRequest() {
      let data = JSON.stringify({
        method: "POST",
        status: "200"
      });

      this.$http
        .post("posts", { body: data })
        .then(response => response.json())
        .then(result => (this.postData = result));
    },
    getResource() {
      this.resource
        .get()
        .then(response => response.json())
        .then(result => (this.resourceData = result));
    }
  },
  watch: {
    api: function() {
      this.resource = this.$resource(this.api);
    }
  },
  created() {
    this.resource = this.$resource(this.api);
  }
};
</script>