<template>
  <div class="text-left">
    <h2>Child Two</h2>
    <p>
      <button @click="callback()" class="btn btn-primary">CallBack</button>
      Communication with callback
    </p>
    <p>
      <button @click="changeColor" class="btn btn-primary">Custom Event</button>
      Communication with custom event
    </p>
    <p>
      Status for bus from child one:
      <span>{{reciveBus}}</span>
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
span {
  color: red;
}
</style>