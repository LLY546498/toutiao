 <template>
    <el-container class="layout-container">
        <el-aside
         class="aside"
         width="200px"
         >
         <app-aside class="aside-menu"/>
         </el-aside>
        <el-container>
        <el-header class="header">
          <div>
            <i class="el-icon-s-fold"></i>
            <span>江苏传智播客教育有限公司</span>
          </div>
           <el-dropdown>
             <div class="avatar-wrap">
               <img class="avatar" :src="user.photo" alt="">
               <span>{{user.name}}</span>
             </div>
            <!-- <span>
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span> -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </el-header>
        <el-main class="main">Main
        <!-- 子路由出口 -->
            <router-view/>
            </el-main>
        </el-container>
    </el-container>
  <!-- </div> -->
</template>

<script>
import AppAside from './components/aside'
import { getUserProfile } from '@/api/user'

export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  props: {},
  data () {
    return {
      user: {}
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUserProfile()
  },
  mounted () {},
  methods: {
    loadUserProfile () {
      getUserProfile().then(res => {
        this.user = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="less">
.layout-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.aside {
    background-color: #d3dce6;
    .aside-menu {
        height: 100%;
    }
}
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: #b3c0d1;
  border-bottom: 10x solid #ccc;
  .avatar-wrap {
    display: flex;
    align-items: center;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
.main {
    background-color: #e9eef3;
}
</style>
