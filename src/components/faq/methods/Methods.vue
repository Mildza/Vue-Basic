<template>
  <div>
    <h3 class="text-center mb-3">Methods, watcers and computed.</h3>
    <p>
      We use methods to react on some event happening in the DOM.
      To call a function when something happens in our component, we can call a methods from computed properties or watchers.
    </p>
    <h5>Computed</h5>
    <ul>
      <li>We need to listen to changes of more than one data property.</li>
      <li>We have a variable you use in your template that’s built from one or more data properties</li>
      <li>Want to reduce a complicated, nested property name to a more readable and easy to use one, yet update it when the original property changes.</li>
      <li>We need to reference a value from the template. In this case, creating a computed property is the best thing because it’s cached.</li>
    </ul>
    <h5>Watch</h5>
    <ul>
      <li>We want to listen when a data property changes, and perform some action.</li>
      <li>We want to listen to a prop value change.</li>
      <li>We only need to listen to one specific property (we can’t watch multiple properties at the same time).</li>
      <li>We want to watch a data property until it reaches some specific value and then do something.</li>
      <li>Most useful when we want to perform asynchronous or expensive operations in response to changing data.</li>
    </ul>
  </div>
</template>


<script>
export default {};
