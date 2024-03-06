<template>
    <Header :actions  @generate="generate" @reset="reset"/>



    <div>
      要执行的参数{{activeAction}}
    </div>
    <span v-if="loading" class="loading loading-infinity loading-lg"></span>

    <div>
      <LayoutStore :element="activeAction" />
    </div>
    <div class="m-2.5 bg-base-200 border-2 rounded-md shadow-sm">
        <Output/>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import LayoutStore from '../components/LayoutStore.vue';
import Output from '../components/Output.vue';
import actions from "../components/ActionConfig.js";
import {ref} from "vue";

const loading = ref(false);

const NamedActionMap = actions.map((action) => {
  return {
    name: action.desc,
    action: action
  }
})


const activeAction = ref({});

const generate = (action) => {
  activeAction.value = action;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 500)
}

const reset = () => {
  activeAction.value = {};
}

</script>

<style scoped>

</style>