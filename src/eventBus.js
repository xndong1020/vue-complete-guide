import Vue from "vue";
const eventBus = new Vue({
  methods: {
    updateAge: function(age) {
      this.$emit("updateAge", age);
    }
  }
});
export default eventBus;
