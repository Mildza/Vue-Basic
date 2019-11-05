<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement">AsuncIncrement</button>
    <button class="btn btn-primary" @click="decrement(2)">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["decrement", "asyncIncrement"])
    // increment() {
    //   //   this.$store.state.counter++;
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   //   this.$store.state.counter--;
    //   this.$store.commit("decrement");
    // }
  }
};
</script>