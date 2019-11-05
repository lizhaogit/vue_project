<template>
  <el-container>
    <el-container>
      <el-aside width="240px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="menuOpeneds" :default-active="menuActive" text-color="#414351"
                 :unique-opened="true" router>

          <el-submenu :index="index+'-'" :key="index" v-for="(item,index) in menuData">
            <template slot="title"><i class="el-icon-message"></i>{{item.menu_name}}</template>
            <template v-for="(son,num) in item.sonMenu">
              <el-submenu :index="index+'-'+num" v-if="son.sonMenu">
                <template slot="title">{{son.menu_name}}</template>
                <el-menu-item :index="three.menu_url" :key="index+'-'+num+'-'+key"
                              :route="{path:three.menu_url,query:{parent:son.menu_name,subset:three.menu_name}}"
                              v-for="(three,key) in son.sonMenu">
                  {{three.menu_name}}
                </el-menu-item>
              </el-submenu>
              <el-menu-item :index="son.menu_url" v-else
                            :route="{path:son.menu_url,query:{parent:item.menu_name,subset:son.menu_name}}">
                {{son.menu_name}}
              </el-menu-item>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="right">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "AdminManage",
    data() {
      return {
        menuActive: this.$route.path,
        menuOpeneds: [this.$route.query.parent || '账号信息管理', this.$route.query.subset || '个人信息'],
        menuData: this.$store.getters.getMenu,
      }
    },
    computed: {
      changeMemberTab() {
        return this.$store.getters.getMenu;
      }
    },
    watch: {
      $route(to, from) {
        this.menuActive = to.path
      },
      changeMemberTab(val) {
        this.menuData = val
      }
    }
  }
</script>

<style scoped >

  .left{
    width: 240px;
  }

  .right {
    flex: 1;
    padding: 40px;
  }

</style>
