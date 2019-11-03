<template>
  <div>
    <h2>Child Two</h2>
    <p>
      Communication with callback
      <button @click="callback()" class="btn btn-primary">CallBack</button>
    </p>
    <p>
      Communication with custom event
      <button
        @click="changeColor"
        class="btn btn-primary"
      >Custom Event</button>
    </p>
    <p>
      Status for bus from child one:
      <span style="color:red">{{reciveBus}}</span>
    </p>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      color: "blue",
      reciveBus: "Wait"
    };
  },
  props: {
    callback: Function
  },
  methods: {
    changeColor() {
      this.$emit("happen", { color: this.color, isTrue: true });
    }
  },
  mounted() {
    eventBus.$on("child2", data => (this.reciveBus = data));
  }
};
</script>


<style scoped>
</style>