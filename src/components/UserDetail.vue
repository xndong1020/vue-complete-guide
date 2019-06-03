<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <p>User Age: {{ age }}</p>
    <input type="text" @keyup="resetName" name="newName" />
  </div>
</template>

<script>
import eventBus from "../eventBus";
export default {
  name: "UserDetail",
  data: function() {
    return {
      age: undefined
    };
  },
  props: {
    name: {
      type: [String, Array],
      required: true
    }
  },
  mounted() {
    eventBus.$on("updateAge", age => {
      this.age = age;
    });
  },
  methods: {
    resetName: function() {
      // Publish a custom event
      this.$emit("nameWasReset", event.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
div {
  background-color: lightcoral !important;
}
</style>
