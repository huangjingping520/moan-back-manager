<script setup lang="ts">
const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)
const router = useRouter()

// for (const item of userMenus.value) {
//   const itemIcon = item.icon
//   const icon = computed(() => itemIcon.split('-')[2])
//   item.icon = icon
// }

const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? '/not-found'
  })
}
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="https://merlinalex-pic.oss-cn-hangzhou.aliyuncs.com/img/Frame%201logo.svg" alt="" class="img">
      <span class="title">沫岸后台</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical"
      default-active="2"
      text-color="#fff"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="`${item.id}`">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="`${subitem.id}`" @click="handleMenuItemClick(subitem)">
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="`${item.id}`">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

  .el-sub-menu {
    background-color: #001529 !important;

    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  .el-menu-item:hover {
    color: #fff !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60ad !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
