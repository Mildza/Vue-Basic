<template>
  <div>
    <h3 class="text-center mb-3">Event modifiers</h3>
    <div>
      <p>Vue provides below event modifiers for v-on and these modifiers are directive postfixes denoted by a dot.</p>
      <ul>
        <li>
          <span>@click.stop</span> - The click event's propagation will be stopped. Propagation means bubbling up to parent elements or capturing down to child elements.
        </li>
        <li>
          <span>@submit.prevent="onSubmit"</span> - Prevent default submit form and reloading the page.
        </li>
        <li>
          @click.once="increment" - Listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
          <button
            class="btn btn-primary"
            @click="increment++"
          >increment</button>
          <button class="btn btn-warning" @click.once="increment++">increment once</button>
          increment:
          <span>{{increment}}</span>
        </li>
        <li>
          @click.capture - event targeting an inner element is handled here before being handled by outer element
          <div>
            default behavior
            <div class="outer" @click="capture='outer'">
              <div class="inner" @click="capture='inner'"></div>
            </div>clicked:
            <span>{{capture}}</span>
            <div class="outer" @click.capture="capture='outer'">
              <div class="inner" @click="capture='inner'"></div>
            </div>using capture
          </div>
        </li>
        <li>
          @click.self - only trigger handler if event.target is the element itself, not trigger if clicked on inner element
          <div>
            default behavior
            <div class="outer" @click="self='outer'">
              <div class="inner"></div>
            </div>clicked:
            <span>{{self}}</span>
            <div class="outer" @click.self="self='outer'">
              <div class="inner"></div>
            </div>using self
          </div>
        </li>

        <li>@scroll.passive- Indicates that the function specified by listener will never call preventDefault()</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lazy: "",
      num: "",
      trim: "",
      increment: 0,
      capture: "",
      self: ""
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
li {
  margin-bottom: 20px;
}
.outer {
  width: 100px;
  height: 100px;
  background-color: blue;
  display: inline-block;
}
.inner {
  width: 50px;
  height: 50px;
  background-color: orange;
}
</style>