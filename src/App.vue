<template>
  <div class="container">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave {
}
.fade-leave-active {
}
.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  /* animation: slide-out 1s ease-out forwards; */
}
@keyframes slide-in {
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(100px);
  }
}
</style>
