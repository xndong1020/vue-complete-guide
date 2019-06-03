<template>
  <div class="container">
    <progressbar :total="quotes.length" :max="maxQuote"></progressbar>
    <new-quote @addQuote="addQuote($event)"></new-quote>
    <quote-grid
      :quotes="quotes"
      @deleteQuote="quotes.splice($event, 1)"
    ></quote-grid>
    <div class="row" v-if="quotes.length > 1">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it.</div>
      </div>
    </div>
    <div class="row" v-if="error">
      <div class="col-sm-12 text-center">
        <div class="alert alert-danger">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import NewQuote from "./components/NewQuote.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import Progressbar from "./components/Progressbar.vue";

export default {
  data: function() {
    return {
      quotes: ["Just a dummy quote"],
      maxQuote: 5,
      error: ""
    };
  },
  components: {
    QuoteGrid,
    NewQuote,
    Progressbar
  },
  methods: {
    addQuote: function(NewQuote) {
      if (this.quotes.length >= this.maxQuote) {
        this.error = `The max length of quotes is ${this.maxQuote}`;
        return;
      }
      this.error = "";
      this.quotes.push(NewQuote);
    }
  }
};
</script>
