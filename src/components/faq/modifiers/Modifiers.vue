<template>
  <div>
    <h3 class="text-center mb-3">v-model modifiers</h3>
    <div>
      <h4 class="mb-4">v-model modifiers</h4>v-model.lazy
      <input type="text" name="lazy" v-model.lazy="lazy" placeholder="Lazy modifiers" />
      Lazy modifiers activated on enter, blur:
      <span>{{lazy}}</span>
      <hr />v-model.number
      <input
        type="text"
        name="num"
        v-model.number="num"
        placeholder="Number modifiers"
      />
      Number modifiers - Return the type of number, not deafult a string:
      <span>{{typeof(num)}}</span>
      <hr />v.model.trim
      <input type="text" name="trim" v-model.trim="trim" placeholder="Trim modifiers" />
      Trim modifiers remove white spaces:
      <span>{{trim}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lazy: "",
      num: "",
      trim: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
input {
  margin-bottom: 20px;
}
span {
  color: blue;
}
</style>