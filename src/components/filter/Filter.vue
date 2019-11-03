<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3">
      <h1 class="text-center">Filter and Mixins</h1>
      <h4>Global filter - lowerCase</h4>
      <input
        type="text"
        class="form-control mb-3"
        v-model="smallText"
        placeholder="Type Big and small char"
      />
      <p>Output: {{smallText | toLowerCase }}</p>
      <h4>Local filter - upperCase</h4>
      <input
        type="text"
        class="form-control mb-3"
        v-model="bigText"
        placeholder="Type Big and small char"
      />
      <p>Output: {{bigText | toUpperCase }}</p>
      <h4>Mixin</h4>
      <input type="text" class="form-control" v-model="filterText" placeholder="filter array" />
      <ul class="form-group mt-4">
        <li class="form-control" v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitsMixin } from "./fruitsMixin";
export default {
  mixins: [fruitsMixin],
  data() {
    return {
      smallText: "",
      bigText: ""
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>