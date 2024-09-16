<template>
  <nav class="navbar">
    <button class="toggle" @click="store.toggleSwitch()">
        <font-awesome-icon :icon="['fas', 'bars-staggered']" style="color: #000;"/>
    </button>
  </nav>
</template>

<script setup>
import { useStore } from '../store/store'
import { storeToRefs } from 'pinia'

const store = useStore();
// const { toggle } = storeToRefs(store);

</script>

<style lang="scss" scoped>
.navbar{
    background: #fff;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: end;

    button{
        border: none;
        background: transparent;
        cursor: pointer;
    }
    .icon{
        color: #333;
        font-size: 32px;
    }
}
</style>