<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./shared/Header";
export default {
  data() {
    return {};
  },
  components: {
    "app-header": Header
  }
};
</script>

