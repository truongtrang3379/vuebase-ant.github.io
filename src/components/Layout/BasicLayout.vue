<template>
  <a-layout id="components-layout" class="height-10">
    <a-layout-header
      id="header"
      style="background: rgb(255, 255, 255);padding: 0 32px;display: flex;"
    >
      <img alt="Vue logo " class="trigger height-7 my-auto" src="@/assets/logo.png" />
      <span class="font-700 my-auto ml-3">Vue base use ant design</span>
      <v-spacer />
      <a-dropdown>
        <a-menu slot="overlay" @click="changeLang">
          <a-menu-item :key="lang.key" v-for="lang in langs">{{lang.text}}</a-menu-item>
        </a-menu>
        <a-button class="my-auto">
          <a-icon type="global" />
          {{langGlobal}}
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <a-menu :default-selected-keys="[$route.path]" mode="inline">
          <template v-for="item in menuRouter">
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
      <a-layout-content
        :style="{ margin: '14px', padding: '16px 24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      menuRouter: [],
      langs: [
        { key: "vi", text: "Việt Nam" },
        { key: "en", text: "English" },
        { key: "ja", text: "Japanese" }
      ]
    };
  },

  computed: {
    langGlobal() {
      return this.langs.filter(e => e.key == this.$i18n.locale)[0].text;
    }
  },
  async created() {
    this.menuRouter = this.$router.options.routes;
  },
  methods: {
    changeLang(e) {
      console.log("click", e);
      this.$i18n.locale = e.key;
    },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
};
</script>
<style>
#header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  max-width: 100%;
  display: flex;
}
.ant-layout {
  background-color: white;
}
.ant-menu {
  border-right: none;
}
.ant-layout-sider {
  background-color: white;
  border-right: 1px solid #e8e8e8;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: white;
}
.ant-layout-header {
  height: 64px;
  padding: 0 50px;
  line-height: 36px;
  background: #001529;
}
#components-layout .trigger {
  font-size: 18px;
  /* line-height: 64px; */
  /* padding: 0 24px; */
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout .trigger:hover {
  color: #1890ff;
}

#components-layout .logo {
  height: 32px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 16px;
}
</style>