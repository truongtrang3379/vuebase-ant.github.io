<template>
  <div>
    <h1>{{$t('getting-started')}}</h1>
    <i18n path="introduce" tag="p">
      <template v-slot:linkAnt>
        <a :href="linkAnt">{{$t('ant-design-vue')}}</a>
      </template>
      <template v-slot:strong>
        <strong>{{$t('good-development-experience')}}</strong>
      </template>
      <template v-slot:linkNode>
        <a :href="linkNode">{{$t('node-js')}}</a>
      </template>
    </i18n>

    <blockquote>
      <i18n path="blockquote" tag="p">
        <template v-slot:linkVue>
          <a :href="linkAnt">{{$t('vue')}}</a>
        </template>
        <template v-slot:linkAnt>
          <a :href="linkAnt">{{$t('ant-design-vue')}}</a>
        </template>
        <template v-slot:linkES2015>
          <a :href="linkES2015">{{$t('javascript-es2015')}}</a>
        </template>
      </i18n>
    </blockquote>

    <h1>{{$t('project-setup')}}</h1>
    <Highlight class="mt-0 mb-0" sourcecode="npm install" />

    <h1>{{$t('compiles-and-hot-reloads-for-development')}}</h1>
    <Highlight class="mt-0 mb-0" sourcecode="npm run serve" />

    <h1>{{$t('compiles-and-minifies-for-production')}}</h1>
    <Highlight class="mt-0 mb-0" sourcecode="npm run build" />

    <h1>{{$t('environment-support')}}</h1>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <span slot="titleIE">
        <a href="http://godban.github.io/browsers-support-badges/">
          <img
            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png"
            alt="IE / Edge"
            width="24px"
            height="24px"
          />
          IE / Edge
        </a>
      </span>
      <span slot="titleFirefox">
        <a href="http://godban.github.io/browsers-support-badges/">
          <img
            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png"
            alt="Firefox"
            width="24px"
            height="24px"
          />Firefox
        </a>
      </span>
      <span slot="titleChrome">
        <a href="http://godban.github.io/browsers-support-badges/">
          <img
            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png"
            alt="Chrome"
            width="24px"
            height="24px"
          />Chrome
        </a>
      </span>
      <span slot="titleSafari">
        <a href="http://godban.github.io/browsers-support-badges/">
          <img
            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png"
            alt="Safari"
            width="24px"
            height="24px"
          />Safari
        </a>
      </span>
      <span slot="titleOpera">
        <a href="http://godban.github.io/browsers-support-badges/">
          <img
            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png"
            alt="Opera"
            width="24px"
            height="24px"
          />Opera
        </a>
      </span>
      <span slot="titleElectron">
        <a href="http://godban.github.io/browsers-support-badges/">
          <img
            src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png"
            alt="Electron"
            width="24px"
            height="24px"
          />Electron
        </a>
      </span>
    </a-table>
  </div>
</template>
<script>
import Highlight from "@/components/Highlight/Highlight.vue";
const columns = [
  {
    dataIndex: "ieEdge",
    key: "IE / Edge",
    slots: { title: "titleIE" }
  },
  {
    dataIndex: "firefox",
    slots: { title: "titleFirefox" },
    key: "firefox"
  },
  {
    dataIndex: "chrome",
    slots: { title: "titleChrome" },
    key: "chrome"
  },
  {
    key: "safari",
    dataIndex: "safari",
    slots: { title: "titleSafari" }
  },
  {
    key: "opera",
    dataIndex: "opera",
    slots: { title: "titleOpera" },
    scopedSlots: { customRender: "tags" }
  },
  {
    key: "electron",
    dataIndex: "electron",
    slots: { title: "titleElectron" }
  }
];

const data = [
  {
    key: "browsers",
    ieEdge: "IE9, IE10, IE11, Edge",
    firefox: "last 2 versions",
    chrome: "last 2 versions",
    safari: "last 2 versions",
    opera: "last 2 versions",
    electron: "last 2 versions"
  }
];
export default {
  components: {
    Highlight
  },
  data() {
    return {
      data,
      columns,
      linkAnt: "https://www.antdv.com/docs/vue/introduce/",
      linkNode: "https://nodejs.org/",
      linkVue: "https://cn.vuejs.org/",
      linkES2015: "http://babeljs.io/docs/learn-es2015/"
    };
  }
};
</script>