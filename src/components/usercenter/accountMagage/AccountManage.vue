<template>
  <div>账号管理</div>
</template>

<script>
  export default {
    name: "AccountManage",
    data() {
      return {
        tabData: ['账号操作', '操作日志'],
        activeTab: 0,
        account: false,
        formInline: {
          user: '',
          region: ''
        },
        checked: true,
        show: false,
        page: 1,
        rows: 20,
        total: 128,
        tableData: [{date: '2019-09-08 12：20', name: '张三', type: '财务信息', info: '登录'}, {
          date: '2019-09-08 14：02',
          name: '张三',
          type: '财务信息',
          info: '退出'
        }, {date: '2019-09-08 09：20', name: '张三', type: '财务信息', info: '删除信息'}]
      }
    }
  }
</script>

<style scoped>
</style>
