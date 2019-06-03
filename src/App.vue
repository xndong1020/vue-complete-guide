<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">App Quote</button>
        <button @click="selectedComponent = 'quoteAuthor'">App Author</button>
        <button @click="selectedComponent = 'quoteList'">App List</button>
      </div>
      <div class="col-xs-12">
        <keep-alive>
          <component :is="selectedComponent">
            <h2 slot="title">{{ title }}</h2>
            <p slot="content">A wonderful Quote</p>
            <p>Some other content</p>
            <p>Another paragraph</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import QuoteAuthor from "./components/QuoteAuthor.vue";
import QuoteList from "./components/QuoteList.vue";

export default {
  data() {
    return {
      title: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    quoteAuthor: QuoteAuthor,
    quoteList: QuoteList
  }
};
</script>

<style></style>
