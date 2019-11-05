<template>
  <div class="hello">
    <h2>登录</h2>
    <ul>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="测试" prop="number">
          <el-input v-model.number="form.number" type="number"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        form: {
          name: '',
          password: '',
          number: ''
        },
        rules: {
          number: [{type: 'number', required: true, message: '请输入数字类型', trigger: 'blur'}]
        },
        menu: []
      }
    },
    methods: {
      onSubmit() {
        const params = {
          username: this.form.name,
          password: this.form.password,
        }

        this.api.userLogin(params).then(res => {
          if (res.data.code === 200) {

            this.$store.dispatch('updateLogin', {
              menu: res.data.data.menu,
              user: {...res.data.data.user}
            })


            this.splic(res.data.data.menu)

            const arr = this.filter_menu(this.menu)

            const routes = [{
              path: '/usercenter',
              name: 'usercenterLink',
              meta: {requireAuth: true},
              component: () => import('@/components/AdminManage.vue'),
              children: arr
            }]

            this.$router.addRoutes(routes)

            this.$router.push({
              path: '/usercenter/personal', query: {
                parent: '账号信息',
                subset: '个人信息'
              }
            })
          }
        })
      },
      splic(treeList) {
        treeList.forEach(item => {
          if (item.sonMenu) {
            this.splic(item.sonMenu)
          } else {
            if (item.menu_url) {
              this.menu.push(item)
            }
          }
        })
      },
      filter_menu(list) {
        return list.map(item => {
          const str = item.menu_component.replace('@/components/', '')
          console.log(str)
          return {
            path: item.menu_url,
            name: item.menu_name,
            meta: {requireAuth: true},
            // component: () => import(`@/components/${str}.vue`)
            component: resolve => require([`@/components/${str}.vue`], resolve)
          }
        })
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    margin: 0 auto;
    width: 500px;
  }

</style>
