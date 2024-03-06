<template>
    <Header/>
    <div class="m-2.5">
        <Nav/>
    </div>
   


    <div class="m-2.5 bg-base-200 border-2 rounded-md shadow-sm">
        <Output/>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import LayoutStore from '../components/LayoutStore.vue';
import Output from '../components/Output.vue';

</script>

<style scoped>

</style>