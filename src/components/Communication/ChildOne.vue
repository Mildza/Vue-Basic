<template>
  <div class="text-left">
    <h2>Child One</h2>
    <p>
      <button @click="changeCat" class="btn btn-primary">Change Primitive property</button>
      Passing by props by value - string
      <span>{{childCat}}</span>
    </p>
    <p>
      <button @click="changeCatProps" class="btn btn-primary">Change Props property</button>
      Bind to props, rerender by Parent
      <span>{{cat}}</span>
    </p>
    <p>
      <button @click="changeDog" class="btn btn-primary">Change Object property</button>
      Passing by reference - Object
      <span>{{dog.name}}</span>
    </p>
    <p>
      <button @click="busTransport" class="btn btn-primary">Ride</button>
      Eventbus, passing value to child Two
    </p>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: {
    cat: String,
    dog: Object
  },
  data() {
    return {
      childCat: this.cat
    };
  },
  methods: {
    changeDog() {
      this.dog.name == "Cezar"
        ? (this.dog.name = "Reks")
        : (this.dog.name = "Cezar");
    },
    changeCat() {
      this.childCat = "Puma";
    },
    changeCatProps() {
      this.cat = "Puma";
    },
    busTransport() {
      eventBus.$emit("child2", "It's comes!!!");
    }
  }
};
</script>


<style scoped>
span {
  color: red;
}
</style>