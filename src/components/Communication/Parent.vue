<template>
  <div class="text-center">
    <h1>Parent</h1>
    <div class="row">
      <div class="col-sm-6">
        <h3>Child One</h3>
        <p>
          Primitive: cat
          <span style="color:red">{{cat}}</span>
        </p>

        <p>
          Object: dog
          <span style="color:red">{{dog.name}}</span>
        </p>
      </div>
      <div class="col-sm-6">
        <h3>Child Two</h3>
        <p>
          Callback change parrent property
          <span style="color:red">{{car}}</span>
        </p>
        <p>
          Custom Event change parrent property
          <span :class="[check ? 'blue' : 'red']">{{color}}</span>
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-6">
        <child-one :cat="cat" :dog="dog"></child-one>
      </div>
      <hr />
      <div class="col-sm-6">
        <child-two :callback="changeCar" @happen="changeColor($event)"></child-two>
      </div>
    </div>
  </div>
</template>

<script>
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
export default {
  components: {
    childOne: ChildOne,
    childTwo: ChildTwo
  },
  data() {
    return {
      cat: "Tiger",
      dog: {
        name: "Cezar"
      },
      car: "Punto 1",
      color: "red",
      check: false
    };
  },
  methods: {
    changeCar() {
      this.car == "Punto 1" ? (this.car = "Mazda 3") : (this.car = "Punto 1");
    },
    changeColor(event) {
      this.color = event.color;
      this.check = event.isTrue;
    }
  }
};
</script>


<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>