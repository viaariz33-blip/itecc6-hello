<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <p>Kamusta! Ako si Via Ariz.</p>
    <p>Welcome to ITECC6!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello from Vue.js!')
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 2rem;
}
</style>