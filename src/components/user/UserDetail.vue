<template>
  <div>
    <h3>Some User Details</h3>
    <h4>User loaded has ID: {{ id }}</h4>
    <router-link
      tag="button"
      :to="{
        name: 'UserEdit',
        params: { id },
        query: { foo: 'aaa', bar: 500 }
      }"
      class="btn btn-info"
      >Edit User</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>
