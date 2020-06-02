<template>
  <div id="app">
    <img src="./assets/logo.png">
    <search-form :showSearchButton="showSearchButton" :inline="isInline" :formData="formData" :searchConfig="searchConfig"></search-form>
  </div>
</template>

<script>
import searchForm from './components/searchForm/index.js'
export default {
  name: 'app',
  components: {
    searchForm
  },
  data() {
    return {
      formData: {},
      isInline: true,
      showSearchButton: true,
      searchConfig: [
        {type: 'input', label: '名字2222', props: 'name', labelWidth: '100px'},
        {type: 'select', label: '下拉框', props: 'select', options: [
          {defaultPropsLabel: 'label', defaultPropsValue: 'value', label: '1号', value: 1},
          {defaultPropsLabel: 'label', defaultPropsValue: 'value', label: '2号', value: 2},
        ]},
        {type: 'radio', label: '单选框', options:[
          { label: '1号', value: 1},
          { label: '2号', value: 2},
        ]},
        {type: 'dateRange', label: '时间选择器'},
        {type: 'dateTimeRange', label: '时间日期选择器'},
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
