<template>
  <div>
    <p>Double Counter is: {{ doubleCounter }}</p>
    <p>stringCounter is: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"]),
    test: function() {
      return "Hello World";
    }
  }
};
</script>
