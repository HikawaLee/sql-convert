<template>

  <div class="mt-2.5">
    <p>布局渲染参数: {{ props.state }}</p>

  </div>
  <div class="divider divider-horizontal"/>
  <div v-if="props.state.form" class="flex w-full">
    <label  class="input input-bordered flex items-center gap-2">
<!--      {{ props.state.form.label}}-->
      <input type="text" class="grow" :placeholder="''"/>
    </label>
  </div>

  <!--    <a-form-model-item :label="element.title" v-if="element.type === 'input'">-->
  <!--      <a-input v-model="form.name" />-->
  <!--    </a-form-model-item>-->


  <!--    <a-form-model-item :label="element.title" v-if="element.type === 'select'">-->
  <!--      <a-select-->
  <!--          v-model="form.region"-->
  <!--          :placeholder="element.placeholder">-->
  <!--        <a-select-option-->
  <!--            v-for="(val, index) in element.defaultValue"-->
  <!--            :key="index"-->
  <!--            :value="index">-->
  <!--          {{val}}-->
  <!--        </a-select-option>-->
  <!--      </a-select>-->
  <!--    </a-form-model-item>-->


  <!--    <a-form-model-item :label="element.title" v-if="element.type === 'picker'">-->
  <!--      <a-date-picker-->
  <!--          v-model="form.date1"-->
  <!--          show-time-->
  <!--          type="date"-->
  <!--          :placeholder="element.placeholder"-->
  <!--          style="width: 100%;"-->
  <!--      />-->
  <!--    </a-form-model-item>-->


  <!--    <a-form-model-item :label="element.title" v-if="element.type === 'switch'">-->
  <!--      <a-switch v-model="form.delivery" />-->
  <!--    </a-form-model-item>-->


  <!--    <a-form-model-item :label="element.title" v-if="element.type === 'checkbox'">-->
  <!--      <a-checkbox-group v-model="form.type">-->
  <!--        <a-checkbox-->
  <!--            v-for="(val, index) in element.defaultValue"-->
  <!--            :key="index"-->
  <!--            :value="index"-->
  <!--            name="type">-->
  <!--          {{val}}-->
  <!--        </a-checkbox>-->
  <!--      </a-checkbox-group>-->
  <!--    </a-form-model-item>-->


  <!--    <a-form-model-item :label="element.title" v-if="element.type === 'radio'">-->
  <!--      <a-radio-group-->
  <!--          v-model="form.resource">-->
  <!--        <a-radio-->
  <!--            v-for="(val, index) in element.defaultValue"-->
  <!--            :key="index"-->
  <!--            :value="index">-->
  <!--          {{val}}-->
  <!--        </a-radio>-->
  <!--      </a-radio-group>-->
  <!--    </a-form-model-item>-->


  <!--    <a-form-model-item :label="element.title" v-if="element.type === 'textarea'">-->
  <!--      <a-input v-model="form.desc" type="textarea" />-->
  <!--    </a-form-model-item>-->


</template>
<script setup>

const props = defineProps({
  state: {
    type: Object,
    required: true,
    default: () => {
      return {
        form: {
          "type": "input",//不能为空
          "label": "默认输入框", //不能为空
          "desc": "这是一个默认输入框", //默认为空
          "placeholder": "这是默认的placeholder", // 仅input, radio, select具有
          "value": {
            "type": String,
            "default": "",
          },
          "options": [], // 仅radio, select, checkbox具有， 保存选项
          "data": {   //不能为空, 保存用户提交的数据
            "type": Array,
            "selected": []
          },
          "rules": [], // 表单的校验规则
        },

        fn: {}//特殊扩展函数
      }
    }
  }
})


// export default {
//   name: 'FormComponent',
//   props: {
//     element: {
//       type: Object
//     }
//   },
//   data () {
//     return {
//
//       form: {
//         name: '',
//         region: undefined,
//         date1: undefined,
//         delivery: false,
//         type: [],
//         resource: '',
//         desc: ''
//       }
//     }
//   },
// }
</script>
<style scoped>
</style>