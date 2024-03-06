<template>
 <div class="">
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" name="my_tabs_1" role="tab" class="tab" v-model:aria-label= />
      <div role="tabpanel" class="tab-content p-2.5">
        <LayoutStore/>
      </div>

      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="减少字段" checked />
      <div role="tabpanel" class="tab-content p-2.5">
        <LayoutStore/>
      </div>

      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="修改字段"  />
      <div role="tabpanel" class="tab-content p-2.5 mt-1">
        <LayoutStore/>
      </div>
    </div>
  </div>
</template>

<script setup>

import LayoutStore from "./LayoutStore.vue";
import ActionConfig from "./ActionConfig.js";
const action = ref("")
const activeIndex = ref(0)

const changeTab = (index) => {
  activeIndex.value = index;
}


</script>

<style lang="scss" scoped>

</style>