<template>
  <div class="row mt-5">
    <div class="col-md-2 side-bar">
      <h3 class="mb-3">FAQ</h3>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="mutattion">Change Detetction</router-link>
        </li>
        <li class="nav-item">
          <router-link to="modifiers">Modifiers</router-link>
        </li>
      </ul>
    </div>
    <div class="col-md-10 side-bar">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.side-bar {
  border-right: 1px solid grey;
}
</style>