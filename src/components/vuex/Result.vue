<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{stringCounter}}</p>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  },
  // counter() {
  //   // return this.$store.state.counter;
  //   return this.$store.getters.doubleCounter;
  // },
  // clicks() {
  //   return this.$store.getters.stringCounter;
  // }
  methods: {
    reset() {
      this.$store.state.counter = 0;
    }
  }
};
</script>