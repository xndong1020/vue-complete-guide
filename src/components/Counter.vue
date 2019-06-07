<template>
  <div>
    <button class="btn btn-primary" @click="incrementAsync(1)">
      Increment
    </button>
    <button class="btn btn-primary" @click="decrementAsync(1)">
      Decrement
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["incrementAsync", "decrementAsync"])
  }
};
</script>
