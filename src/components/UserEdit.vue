<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit Age</p>
    <input type="text" name="age" v-model="age" />
    <button @click="updateAge">Update Age</button>
  </div>
</template>

<script>
import eventBus from "../eventBus";
export default {
  data: function() {
    return {
      age: undefined
    };
  },
  methods: {
    updateAge: function() {
      eventBus.updateAge(this.age);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen !important;
}
</style>
