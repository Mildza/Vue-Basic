<template>
  <div>
    <h2>Child One</h2>
    <p>
      Passing by props by value - string
      <span style="color:red">{{childCat}}</span>
      <button @click="changeCat" class="btn btn-primary">Change Primitive property</button>
    </p>
    <p>
      Bind to props, rerender by Parent
      <span style="color:red">{{cat}}</span>
      <button @click="changeCatProps" class="btn btn-primary">Change Props property</button>
    </p>
    <p>
      Passing by reference - Object
      <span style="color:red">{{dog.name}}</span>
      <button @click="changeDog" class="btn btn-primary">Change Object property</button>
    </p>
    <p>
      Eventbus to child one
      <button @click="busTransport" class="btn btn-primary">Ride</button>
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
</style>