<template>
  <div>
    <div class="row">
      <quote
        v-for="(quote, index) in quotes"
        :key="index"
        @click.native="deleteQuote(index)"
      >
        {{ quote }}
      </quote>
    </div>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
  props: {
    quotes: {
      type: Array,
      required: true
    }
  },
  components: {
    Quote
  },
  methods: {
    deleteQuote: function(index) {
      this.$emit("deleteQuote", index);
    }
  }
};
</script>
