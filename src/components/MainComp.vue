<template>
  <div class="container">
    <search-bar />
    <weather-info />
    
  </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue'
import WeatherInfo from './WeatherInfo.vue'


</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
  }
</style>