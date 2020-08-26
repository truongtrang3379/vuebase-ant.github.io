<template>
  <a-layout-header
    id="header"
    :style="{ position: 'fixed', zIndex: 1, width: showSider && !collapsed ?  'calc(100% - 298px)': 'calc(100% - 47px)', padding: '0 32px', borderRadius: '16px' }"
  >
    <a-icon
      class="trigger my-auto"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="() => (collapsed = !collapsed)"
    />
    <span class="font-700 my-auto ml-3">{{$route.name}}</span>
    <v-spacer />

    <!-- Change language -->
    <a-dropdown :trigger="['click']">
      <a-menu slot="overlay" @click="changeLang">
        <a-menu-item :key="lang.key" v-for="lang in langs">{{lang.text}}</a-menu-item>
      </a-menu>
      <a-button class="my-auto">
        <a-icon type="global" />
        {{langGlobal}}
        <a-icon type="down" />
      </a-button>
    </a-dropdown>

    <!-- Logout -->
    <a-dropdown :trigger="['click']">
      <a-menu slot="overlay">
        <a-menu-item @click="$router.push('/')">
          <a-icon type="poweroff"/>
          Logout
        </a-menu-item>
      </a-menu>
      <div class="d-flex my-auto ml-5 min-width-1">
        {{email}}
        <v-spacer />
        <a-icon type="down" class="my-auto"/>
      </div>
    </a-dropdown>
  </a-layout-header>
</template>
<script>
export default {
  store: ["showSider", "email", "collapsed"],
  data() {
    return {
      langs: [
        { key: "vi", text: "Việt Nam" },
        { key: "en", text: "English" },
        { key: "ja", text: "Japanese" },
      ],
    };
  },
  computed: {
    langGlobal() {
      return this.langs.filter((e) => e.key == this.$i18n.locale)[0].text;
    },
  },
  methods: {
    changeLang(e) {
      this.$i18n.locale = e.key;
    },
  },
};
</script>