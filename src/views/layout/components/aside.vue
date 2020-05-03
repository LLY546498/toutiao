 <template>
    <!-- index 不能重复 确保唯一即可 -->
<el-menu
    default-active="/"
    class="nav-menu"
    background-color="#002033"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :collapse="isCollapse"
>
    <div class="nav-header">
        <img class="header-logo" src="./logo_admin.png" alt="">
    </div>
    <el-menu-item
     index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/article">
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="/image">
        <i class="iconfont iconimg"></i>
        <span slot="title">素材管理</span>
    </el-menu-item>
    <el-menu-item index="/publish">
        <i class="iconfont iconfabu"></i>
        <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="/comment">
        <i class="iconfont iconpinglun"></i>
        <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="/fans">
        <i class="iconfont iconfensi"></i>
        <span slot="title">粉丝管理</span>
    </el-menu-item>
    <el-menu-item index="/settings">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
    </el-menu-item>
</el-menu>

</template>

<script>
export default {
  name: 'AppAside',
  components: {},
  props: ['is-collapse'],
  data () {
    return {
    //   isCollapse: true
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
  }
}
</script>

<style scoped lang="less">
.nav-menu {
    .nav-header {
    text-align: center;
    .header-logo {
    width: 50%;
    padding-top: 10px;
    }
}
    .iconfont {
        margin-right: 10px;
        padding-left: 5px;
    }

}
</style>
