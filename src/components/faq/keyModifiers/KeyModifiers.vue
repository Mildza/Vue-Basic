<template>
  <div>
    <h3 class="text-center mb-3">Key modifiers</h3>
    <p>Vue supports key modifiers on v-on for handling keyboard events.</p>
    <ul>
      <li>
        @keydown.enter - catch when enter is pressed
        <input
          type="text"
          class="ml-3"
          @keydown.enter="enter='enter is pressed'"
          placeholder="type and press enter"
        />
        <span>{{enter}}</span>
      </li>
      <li>
        @keydown.delete - catch both Delete or Backspace
        <input
          type="text"
          class="ml-3"
          @keydown.delete="deleted='delete or backspace is pressed'"
          placeholder="type and press enter"
        />
        <span>{{deleted}}</span>
      </li>
      <li>Also supports .tab .esc .space .up .down .left .right</li>
      <li>
        Vue supports below modifiers to trigger mouse or keyboard event listeners when the corresponding key is pressed.
        <div class="clickable" @click.ctrl="clicked='its clicked'">hold ctrl and click</div>
        <span>{{clicked}}</span>
      </li>
      <li>
        Mouse Button Modifiers - .left, .right, .middle
        <div class="clickable" @click.right="mouse='right mouse clicked'">right click</div>
        <span>{{mouse}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enter: "",
      deleted: "",
      clicked: "",
      mouse: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
span {
  color: blue;
}
li {
  margin-bottom: 20px;
}
.clickable {
  width: 140px;
  height: 30;
  background-color: orange;
}
</style>