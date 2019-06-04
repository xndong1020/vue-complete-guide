<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppperCase | to-lowercase }}</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <input type="text" v-model="filter">
      <div v-for="(fruit, index) in filteredFruits" :key="index">
        <div>{{ fruit }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from "./mixins/fruitMixin";
export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: "Some text here"
    };
  },
  filters: {
    toUppperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>
