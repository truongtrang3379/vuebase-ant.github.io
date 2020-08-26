<template>
  <a-layout id="components-layout" class="height-10">
    <Sider />
    <a-layout :style="{marginRight: '16px', borderRadius: '16px'}">
      <Header :collapsed="collapsed"/>
      <Content />
    </a-layout>
  </a-layout>
</template>
<script>
import Header from "@/Layout/Header";
import Sider from "@/Layout/Sider";
import Content from "@/Layout/Content";
export default {
  store: ['collapsed'],
  data() {
    return {
    };
  },
  components: {
    Header,
    Sider,
    Content,
  },
  methods: {
    changeLang(e) {
      this.$i18n.locale = e.key;
    },
  },
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
/* .ant-layout {
  background-color: white;
} */
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