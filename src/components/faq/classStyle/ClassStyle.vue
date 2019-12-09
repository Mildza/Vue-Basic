<template>
  <div>
    <h3 class="text-center mb-3">Class and Style.</h3>
    <h5>Class</h5>
    <p>
      For styling we use
      <span>class</span> and also we can use
      <span>:class</span> at same element to bind some classes depends to condition.
    </p>
    <p>
      Vue accepts it like array
      <span>:class="[activeClass, errorClass]"</span> or like objects
      <span>:class="{ activeClass: isActive, 'errorClass': hasError }</span>
    </p>
    <p>
      The bound object doesn’t have to be inline:
      <span>:class="classObject"</span> and
      <span>
        classObject: {
        active: true,
        'text-danger': false
        }
      </span>
    </p>
    <p>
      Powerful patern is to bind a computed property that return object.
      <span>
        classObject: function () {
        return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
        }
      </span>
    </p>
    <h5>Style</h5>
    <p>
      Binding is like for classes.
      <span>:style</span> accepts object.
    </p>
    <p>
      We can use camelCase and if use kebab-case we must provide quotes for property names
      <span>:style="{'background-color': 'red'}</span>
    </p>
    <p>
      We can use array to pass objects
      <span>:style="[styleObject, styleObject2]"</span>
    </p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isValid: true,
      styleObject: {
        "background-color": "red"
      }
    };
  }
};
</script>

<style scoped>
span {
  color: blue;
}
.red {
  color: red;
}
.bg {
  background-color: orange;
}
</style>