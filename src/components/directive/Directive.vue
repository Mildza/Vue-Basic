<template>
  <div class="container text-center">
    <p class="bg-primary" v-padding:y="20">&lt;p v-padding:y="20"&gt;</p>
    <p class="bg-primary" v-padding:top="20">&lt;p v-padding:top="20"&gt;</p>
    <p v-color="'orange'">&lt;p v-color="'orange'"&gt;</p>
    <p v-color:text="'red'">&lt;p v-color:text="'red'"&gt;</p>
    <p v-color:text.inverted="'red'">Modifiers &lt;p v-color:text.inverted="'red'"&gt;</p>
    <label for="input">Focus on load page &lt;input v-focus&gt;</label>
    <input type="text" class="my-3" v-focus id="input" />
    <p
      class="bg-primary"
      v-fixed:[direction]="10"
    >Position fixed throw the property &lt;p v-fixed:[direction]="10"&gt;</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      direction: "right"
    };
  },
  methods: {},

  components: {}
};
</script>

<style>
</style>
