<template>
  <div>
    <h2>{{$t('text')}}</h2>
    <p>{{$t('introduce-text')}}</p>
    <h2>{{$t('text-alignment')}}</h2>
    <p>{{$t('introduce-text-alignment')}}</p>
    <div class="pa-3 mb-2" style="background: #f2f4f5;">
      <i18n
        path="aligned-text-on-all-viewport-sizes"
        tag="p"
        v-for="align in alignment"
        :key="align"
        :class="`text-${align} v-markdown`"
      >
        <template v-slot:align>
          <strong>{{align}}</strong>
        </template>
        <template v-slot:code>
          <code>.text-{{align}}</code>
        </template>
      </i18n>
    </div>
    <h2 class="mt-2">{{$t('text-overflow')}}</h2>
    <i18n
      path="the-helper-classes-apply-max-width-to-an-element-ranging-from-1-to-12"
      tag="p"
      class="mt-2"
    >
      <template v-slot:strongMaxWidth>
        <strong>{{$t('max-width')}}</strong>
      </template>
    </i18n>
    <p class="v-markdown">
      <code>.text-truncate-{size}</code>
    </p>
    <i18n
      path="the-size-controls-the-increment-of-the-property-in-size-intervals"
      tag="p"
      class="mt-2"
    >
      <template v-slot:strongSize>
        <strong>{{$t('size')}}</strong>
      </template>
      <template v-slot:strongProperty>
        <strong>{{$t('overflow')}}</strong>
      </template>
      <template v-slot:size>
        <strong>100px</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <ul>
        <li v-for="i in 12" :key="i">
          <code>{{i}}</code>
          -
          <i18n path="sets-max-width-to" tag="span" class="mt-2">
            <template v-slot:px>{{i* 100}}px</template>
          </i18n>
        </li>
      </ul>
    </span>
    <h1>{{$t('examples')}}</h1>
    <div style="background: #f2f4f5;" class="pa-3 v-markdown">
      <template v-for="i in 3">
        <code :key="i">.text-truncate-{{i}}</code>
        <p
          :key="`text-truncate-${i}`"
          :class="`text-truncate-${i}`"
        >Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.</p>
      </template>
    </div>
    <h2 class="mt-2">{{$t('font-size')}}</h2>
    <i18n
      path="the-helper-classes-apply-max-width-to-an-element-ranging-from-1-to-12"
      tag="p"
      class="mt-2"
    >
      <template v-slot:strongMaxWidth>
        <strong>{{$t('font-size-code')}}</strong>
      </template>
    </i18n>
    <p class="v-markdown">
      <code>.font-size-{size}</code>
    </p>
    <i18n
      path="the-size-controls-the-increment-of-the-property-in-size-intervals"
      tag="p"
      class="mt-2"
    >
      <template v-slot:strongSize>
        <strong>{{$t('size')}}</strong>
      </template>
      <template v-slot:strongProperty>
        <strong class="text-lowercase">{{$t('font-size')}}</strong>
      </template>
      <template v-slot:size>
        <strong>3px</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <ul>
        <li v-for="i in 12" :key="i">
          <code>{{i}}</code>
          -
          <i18n path="sets-font-size-to" tag="span" class="mt-2">
            <template v-slot:px>{{i* 3}}px</template>
          </i18n>
        </li>
      </ul>
    </span>
    <h2 class="mt-2">{{$t('text-transform')}}</h2>
    <p>{{$t('intoduce-text-transformed')}}</p>
    <div class="pa-3 mb-2 v-markdown" style="background: #f2f4f5;">
      <p class="text-lowercase">
        Lowercased text.
        <code>.text-lowercase</code>
      </p>
      <p class="text-uppercase">
        Uppercased text.
        <code>.text-uppercase</code>
      </p>
      <p class="text-capitalize">
        CapiTaliZed text.
        <code>.text-capitalize</code>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alignment: ["left", "center", "right"]
    };
  }
};
</script>
