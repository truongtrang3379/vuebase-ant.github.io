<template>
  <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    width="250"
    @collapse="onCollapse"
    v-model="collapsed"
    @breakpoint="onBreakpoint"
    :style="{marginRight: '15px', borderRight: 'none', borderRadius: '16px'}"
    :trigger="null"
  >
    <div class="logo text-center">
      <img alt="Vue logo " class="trigger max-width-1 width-2 my-auto" src="@/assets/logo.png" />
      <span class="font-bold ml-2">E-Commerce</span>
    </div>
    <a-menu :default-selected-keys="[$route.path]" mode="inline">
      <template v-for="item in $router.options.routes">
        <a-menu-item
          v-if="(item.hideChildrenInMenu || !item.children) && !item.hidden"
          @click="$router.push(item.path)"
          :key="item.path"
        >
          <span>{{$t(item.name)}}</span>
        </a-menu-item>
        <a-sub-menu
          :key="item.path"
          v-else-if="(!item.hideChildrenInMenu || item.children) && !item.hidden"
        >
          <span slot="title">{{$t(item.name)}}</span>
          <template v-for="(itemInChildren) in item.children">
            <a-menu-item
              @click="$router.push(itemInChildren.path)"
              :key="itemInChildren.path"
            >{{$t(itemInChildren.meta.title)}}</a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
export default {
  store: ["showSider", "collapsed"],
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      this.showSider = !broken;
    },
  },
};
</script>