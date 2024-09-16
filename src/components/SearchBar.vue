<template>
  <div class="search-bar">
    <form @submit.prevent="">
        <div class="form-group">
            <input @input="inputCity = $event.target.value" type="search" placeholder="지역을 입력해 주세요">
            <button @click="store.searchCity(inputCity);
                            store.getWeather()"
            >

            </button>
        </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useStore} from '../store/store'
import {storeToRefs} from 'pinia'

const store = useStore()


const inputCity = ref('');
const emits = defineEmits(['searchCity']);

</script>

<style lang="scss" scoped>
  .search-bar {
    padding: 8px 20px;
    border-radius: 40px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 20px;
  
    form {
      .form-group {
        display: flex;
        input {
          width: 100%;
          border: none;
          padding: 1em 0;
          font-size: 18px;
          outline: none;
        }
        button {
          background: transparent;
          border: none;
          &:hover { cursor: pointer; }
          .icon { font-size: 24px; }
        }
      }
    }
  }
</style>