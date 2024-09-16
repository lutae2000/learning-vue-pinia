<script setup>
import { onMounted, ref } from "vue";
import MainCompVue from "./components/MainComp.vue";
import Navbar from "./components/Navbar.vue";
import SearchBar from "./components/SearchBar.vue";
// import {useStore} from 'vuex'
import AboutVue from "./components/About.vue";
import { useStore } from './store/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const { weatherData, toggle } = storeToRefs(store);

onMounted(() => {
  console.log('mounted')
  // store.dispatch('getWeather');
  store.getWeather();
})

const searchCity = (city) => {
  console.log(city);
  weatherData.value.city = city
  // store.dispatch('getWeather');
  store.getWeather();
}


</script>

<template>
  <Navbar />
  <div v-if="toggle">
    <MainCompVue />
  </div>
  <div v-else>
    <AboutVue />
  </div>
  <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
</template>

<style scoped lang="scss">

</style>
