<template>
  <div>切换身份</div>
</template>

<script>
  export default {
    name: "SwitchStatus",
    data() {
      return {
        allId: [],
        loading: false
      }
    },
    methods: {
      getAll() {
        this.api.allIdentity({
          userId: this.$store.getters.getUser.user_id
        }).then(res => {
          if (res.data.code === 200) {
            this.allId = res.data.data
          } else {
            this.$message.error(res.data.message)
          }
        })
      },
      switchId(id) {
        this.loading = true
        const params = {
          identityId: id,
          userId: this.$store.getters.getUser.user_id
        }
        this.api.switchId(params).then(res => {
          if (res.data.code === 200) {
            this.getAll()
            const user = res.data.data.user
            let obj = this.$store.state.userData
            for (let key in obj) {
              obj[key] = user[key]
            }
            obj.name = res.data.data.name
            obj.identity = res.data.data.identity
            const login = {
              menu: res.data.data.menu,
              user: obj
            }
            this.$store.dispatch('updateLogin', login)
            this.$store.commit('set_token', res.data.data.token)
            this.$message.success('操作成功')
            this.loading = false
          } else {
            this.$message.error('操作失败')
          }
        })
      }
    },
    mounted() {
    },
    filters: {
      role(val) {
        switch (val) {
          case '1':
            return '个人';
          case '2':
            return '企业';
          case '3':
            return '组织';
          case '4':
            return '机构';
        }
      },
      roleAddclass(val) {
        switch (val) {
          case '1':
            return 'personal';
          case '2':
            return 'ent';
          case '3':
            return 'group';
          case '4':
            return 'mechanism';
        }
      },
      ellipsis(value) {
        if (!value) return "";
        if (value.length > 15) {
          return value.slice(0, 13) + "...";
        }
        return value;
      }

    }
  }
</script>

<style scoped>

</style>
