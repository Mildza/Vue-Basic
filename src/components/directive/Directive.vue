<template>
  <div class="container text-center">
    <h2>Custom directives</h2>
    <p class="bg-primary rounded" v-padding:y="20">&lt;p v-padding:y="20"&gt;</p>
    <p class="bg-primary rounded" v-padding:top="20">&lt;p v-padding:top="20"&gt;</p>

    <p v-color="'orange'" class="rounded p-2">&lt;p v-color="'orange'"&gt;</p>
    <p v-color:text="'red'" class="rounded p-2">&lt;p v-color:text="'red'"&gt;</p>
    <p
      v-color:text.inverted="'red'"
      class="rounded p-2"
    >Modifiers &lt;p v-color:text.inverted="'red'"&gt;</p>

    <label for="input">Focus on load page &lt;input v-focus&gt;</label>
    <input type="text" class="my-3" v-focus id="input" />
    <p
      class="bg-primary rounded p-2"
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
