<template>
  <div>
    <h1>Filter and Mixins</h1>
    <p>{{text | toLowerCase }}</p>
    <input type="text" class="form-control" v-model="filterText" placeholder="filter array" />
    <ul class="form-control">
      <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import { fruitsMixin } from "../../shared/fruitsMixin";
export default {
  mixins: [fruitsMixin],
  data() {
    return {
      text: "MilaN"
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>