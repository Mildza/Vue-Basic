<template>
  <div>
    <h3 class="text-center mb-3">Array detection muttation</h3>
    <div class="col-md-8 offset-md-2">
      <p>
        Mutation methods modifies the original array and which trigger view updates:
        <span>push(), pop(), shift(), unshift(), splice(), sort(), reverse()</span>
      </p>
      <p>
        Array detection non-mutation methods:
        <span>filter(), concat(), slice()</span>
      </p>
      <input type="text" v-model="newFruit" placeholder="enter new fruit" />
      <button class="btn btn-primary" @click="addFruit">add</button>
      <ul v-for="fruit of fruits" :key="fruit">
        <li>{{fruit}}</li>
      </ul>
      <p>
        Vue cannot detect changes for the array when we directly set an item with the index.
        <span>fruits[3]="kivi"</span>
      </p>
      <p>
        We must use Vue.set:
        <span>$set(array, index, newFruit);</span>
      </p>

      <input type="text" v-model="setFruit" placeholder="set fruit name" />
      <input type="text" v-model="setIndex" placeholder="set fruit index" />

      <button class="btn btn-primary" @click="setFruits">add</button>
      <p>
        This detecetion also apply for Objest
        <span>$set(object, propertyName, value);</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fruits: ["apple", "bannana", "mango"],
      newFruit: "",
      setFruit: "",
      setIndex: ""
    };
  },
  methods: {
    addFruit() {
      this.fruits.push(this.newFruit);
    },
    setFruits() {
      this.$set(this.fruits, this.setIndex, this.setFruit);
    }
  }
};
</script>

<style scoped>
span {
  color: blue;
}
</style>