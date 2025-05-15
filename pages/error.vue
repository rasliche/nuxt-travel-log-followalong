<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occured.";
</script>

<template>
  <div>{{ error }}</div>
</template>
