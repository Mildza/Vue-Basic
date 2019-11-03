<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Vuex</h1>
        <app-result></app-result>
        <hr />
        <app-counter></app-counter>
        <hr />
        <app-another-counter></app-another-counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import Result from "./Result.vue";
import AnotherCounter from "./anotherCounter";

export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    reset() {
      this.counter = 0;
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherCounter: AnotherCounter
  }
};
</script> 