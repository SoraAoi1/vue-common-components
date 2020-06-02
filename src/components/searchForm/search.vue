<template>
  <div class="search-form">
    <el-form ref="form" class="clear" :rules="rules" :inline="isInline" :model="formData">
      <el-col :span="item.colSpan? item.colSpan: 6" v-for="(item, index) in searchConfig" :key="index" >
        <el-form-item class="form-item" :label-width="item.labelWidth? item.labelWidth: 'auto'" :label="item.label? item.label + '：': ''" :prop="item.props">
          <el-input :disabled="item.disabled" v-if="item.type === 'input'|| !item.type " v-model="formData[item.props]" :placeholder="item.placeholder? item.placeholder : '请输入' + item.label"></el-input>
          <el-input-number :disabled="item.disabled" v-if="item.type === 'number'" v-model="formData[item.props]" :controls-position="item.controlsPosition" @change="handleChange" :min="item.min? item.min: 0" :max="item.max? item.max: 100"></el-input-number>
          <el-select :disabled="item.disabled" v-else-if="item.type === 'select'" v-model="formData[item.props]" :placeholder="item.placeholder? item.placeholder : '请选择' + item.label">
            <el-option v-for="(optItem, optIndex) in item.options? item.options: []" :key="optIndex" :label="optItem[optItem.defaultPropsLabel]? optItem[optItem.defaultPropsLabel] : optItem.label" :value="optItem.defaultPropsValue? optItem[optItem.defaultPropsValue]: optItem.value"></el-option>
          </el-select>
          <!-- 单选框 -->
          <el-radio-group :disabled="item.disabled" v-else-if="item.type === 'radio'" v-model="formData[item.props]">  
            <el-radio-button v-for="(item, index) in item.options? item.options: []" :key="index" :label="item.label"></el-radio-button>
          </el-radio-group>
          <!-- 日期选择框 -->
          <el-date-picker v-if="item.type === 'dateRange'"
            v-model="formData[item.props]"
            :disabled="item.disabled"
            type="daterange"
            :align="item.align? item.align: 'right'"
            unlink-panels
            range-separator="至"
            :start-placeholder="item.startPlaceHolder? item.startPlaceHolder: '开始日期'"
            :end-placeholder="item.endPlaceHolder? item.endPlaceHolder: '结束日期'">
          </el-date-picker>
          <!-- 时间选择框 -->
          <el-time-picker
            is-range
            v-if="item.type === 'dateTimeRange'"
            v-model="formData[item.props]"
            range-separator="至"
            :start-placeholder="item.startPlaceHolder? item.startPlaceHolder: '开始时间'"
            :end-placeholder="item.endPlaceHolder? item.endPlaceHolder: '结束时间'"
            :placeholder="item.placeHolder? item.placeHolder: '请选择时间'">
          </el-time-picker>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item v-if="showSearchButton">
          <el-button type="primary" @click="submit">查 询</el-button>
          <el-button type="default" @click="reset">重 置</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    rules: {
      type: Object,
      default: () => {}
    },
    formData: {
      type: Object,
      default: () => {},
      required: true
    },
    searchConfig: {
      type: Array,
      default: () => [],
      required: true
    },
    isInline: {
      type: Boolean,
      default: true
    },
    showSearchButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    submit() {
      this.$emit('handleSubmit', this.formData)
    },
    reset() {
      const form = this.$refs.form
      form.resetFields()
      this.$emit('reset')
    },
    handleChange() {
      this.$emit('numberChange')
    }
  }
}
</script>
<style lang="less" scoped>
  .form-item {
    width: 100%;
  }
</style>