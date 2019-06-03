<template>
  <div>
    <h1>Quote Author Page</h1>
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>
