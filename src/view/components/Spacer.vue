<template>
  <div>
    <h2>{{$t('spacer')}}</h2>
    <i18n path="introduce-spacer" tag="p" class="mt-2 v-markdown">
      <template v-slot:code>
        <code>v-spacer</code>
      </template>
    </i18n>
    <div class="pa-3 mb-2 v-markdown" style="background: #f2f4f5;">
      <div style="display: flex">
        <v-spacer>
          <a-button type="primary">button</a-button>
        </v-spacer>
        <a-button type="primary">button</a-button>
      </div>
      <div class="my-2" style="display: flex">
        <v-spacer />
        <a-button type="primary">button</a-button>
      </div>
      <div style="display: flex">
        <a-button type="primary">button</a-button>
        <v-spacer />
        <a-button type="primary">button</a-button>
        <v-spacer />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
