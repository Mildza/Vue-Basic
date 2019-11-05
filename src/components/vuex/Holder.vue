<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <h1>Vuex</h1>
        <app-result></app-result>
        <hr />
        <app-counter></app-counter>
        <hr />
        <app-another-counter></app-another-counter>
        <p class="text-left mt-4">getters: centralize the place of accessing state.</p>
        <p
          class="text-left"
        >mutations: commit the mutation from component and all component who listetnig throw getters will update the state. Mutation are always runs synchronous.</p>
        <p
          class="text-left"
        >actions: extra function only commit the mutation whent async task is done.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import Result from "./Result.vue";
import AnotherCounter from "./anotherCounter";

export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherCounter: AnotherCounter
  }
};
</script> 