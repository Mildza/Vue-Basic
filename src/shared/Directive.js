import Vue from 'vue';

Vue.directive('padding', {
  bind(el, binding) {
    switch (binding.arg) {
      case 'top':
        el.style.paddingTop = binding.value + 'px';
        break;
      case 'bootom':
        el.style.paddingBottom = binding.value + 'px';
        break;
      case 'left':
        el.style.paddingLeft = binding.value + 'px';
        break;
      case 'right':
        el.style.paddingRight = binding.value + 'px';
        break;
      case 'y':
        el.style.paddingTop = binding.value + 'px';
        el.style.paddingBottom = binding.value + 'px';
        break;
      case 'x':
        el.style.paddingRight = binding.value + 'px';
        el.style.paddingLeft = binding.value + 'px';
        break;
      default:
        el.style.padding = binding.value + 'px';
    }
  },
});

Vue.directive('color', {
  bind(el, binding) {
    if (binding.modifiers['inverted']) {
      el.style.backgroundColor = binding.value;
      el.style.color = 'white';
      return;
    }
    if (binding.arg == 'text') {
      el.style.color = binding.value;
    } else {
      el.style.backgroundColor = binding.value;
    }
  },
});

Vue.directive('focus', {
  inserted: function(el) {
    el.focus();
  },
});

Vue.directive('fixed', {
  bind(el, binding) {
    el.style.position = 'fixed';
    let pos = binding.arg;
    el.style[pos] = binding.value + 'px';
  },
});
