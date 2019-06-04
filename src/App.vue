<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 v-highlight:background.upper="titleColor">Directives</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleColor: "green"
    };
  },
  directives: {
    highlight: {
      bind(el, binding) {
        if (binding.modifiers["upper"]) el.style.textTransform = "uppercase";
        if (binding.arg === "background")
          el.style.backgroundColor = binding.value || "red";
        else el.style.color = binding.value || "red";
      }
    }
  }
};
</script>
