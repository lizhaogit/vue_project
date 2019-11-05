<template>
  <div>我的发票
  </div>
</template>

<script>
  export default {
    name: "MyInvoice",
    data() {
      return {
        tableData: [],
        time: '',
        title: '',
        page: 1,
        total: 0,
        rows: 10,
      }
    },
    methods: {
      seeInfo(data) {
        this.itemData = data
        this.info = true
      },
      getData() {
        const params = {
          role_id: this.$store.getters.getUser.identity_id,
          offSet: this.page,
        }
        this.api.getInvoice(params).then(res => {
          if (res.data.code === 200) {
            this.tableData = res.data.data.items
            this.total = res.data.data.totalRows
          } else {
            this.$message.error(res.data.message)
          }
        })
      }
    },
    mounted() {
    },
    watch: {
      page: {
        handler(val, oldval) {
          this.getData()
        }
      }
    }
  }
</script>

<style scoped>

</style>

