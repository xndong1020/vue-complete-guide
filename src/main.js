import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.directive('highlight', {
//   bind(el, binding) {
//     if (binding.modifiers['upper']) el.style.textTransform = 'uppercase'
//     if (binding.arg === 'background')
//       el.style.backgroundColor = binding.value || 'red'
//     else el.style.color = binding.value || 'red'
//   }
// })

new Vue({
  render: h => h(App)
}).$mount('#app')
