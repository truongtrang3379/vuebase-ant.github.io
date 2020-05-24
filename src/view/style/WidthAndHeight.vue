<template>
  <div>
    <h2>{{$t('width-and-height')}}</h2>
    <p>{{$t('introduce-spacing')}}</p>
    <h2>{{$t('how-it-works')}}</h2>
    <i18n
      path="the-helper-classes-apply-width-or-height-to-an-element-ranging-from-0-to-10-or-1-to-12"
      tag="p"
    >
      <template v-slot:strongWidth>
        <strong>{{$t('width')}}</strong>
      </template>
      <template v-slot:strongHeight>
        <strong>{{$t('height')}}</strong>
      </template>
    </i18n>

    <i18n path="the-property-applies-the-type-of-width-and-height" tag="p" class="mt-2">
      <template v-slot:strongProperty>
        <strong>{{$t('property')}}</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <ul>
        <li>
          <code>{{$t('width')}}</code>
          - {{$t('applies')}}
          <code>{{$t('width')}}</code>
        </li>
        <li>
          <code>{{$t('height')}}</code>
          - {{$t('applies')}}
          <code>{{$t('height')}}</code>
        </li>
      </ul>
    </span>

    <i18n path="the-examples-applies-the-type-of-min-and-max" tag="p" class="mt-2">
      <template v-slot:strongExamples>
        <strong>{{$t('extreme')}}</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <ul>
        <li>
          <code>{{$t('min')}}</code>
          - {{$t('applies')}}
          <code>{{$t('min')}}</code>
        </li>
        <li>
          <code>{{$t('max')}}</code>
          - {{$t('applies')}}
          <code>{{$t('max')}}</code>
        </li>
      </ul>
    </span>
    <h2 class="v-markdown">
      If
      <code>{{'{'+$t('property')+'}-{'+$t('size')+'}'}}</code>
    </h2>
    <i18n
      path="the-size-controls-the-increment-of-the-property-in-size-intervals"
      tag="p"
      class="mt-2"
    >
      <template v-slot:strongSize>
        <strong>{{$t('size')}}</strong>
      </template>
      <template v-slot:strongProperty>
        <strong>{{$t('property')}}</strong>
      </template>
      <template v-slot:size>
        <strong>10%</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <ul>
        <li>
          <code>0</code>
          -
          <i18n path="eliminates-all-margin-or-padding-by-setting-it-to-0" tag="span" class="mt-2">
            <template v-slot:directionMargin>
              <code>{{$t('width')}}</code>
            </template>
            <template v-slot:directionPadding>
              <code>{{$t('height')}}</code>
            </template>
          </i18n>
        </li>
        <li v-for="i in 10" :key="i">
          <code>{{i}}</code>
          -
          <i18n path="sets-margin-or-padding-to-px" tag="span" class="mt-2">
            <template v-slot:directionMargin>
              <code>{{$t('width')}}</code>
            </template>
            <template v-slot:directionPadding>
              <code>{{$t('height')}}</code>
            </template>
            <template v-slot:px>{{i* 10}}%</template>
          </i18n>
        </li>
      </ul>
    </span>
    <p class="v-markdown">
      {{$t('examples')}}
      <code>{{$t('width')+'-'+'5'}}</code>
      {{$t('output')}}
      <code>{{$t('width')}}: 50%</code>
    </p>

    <h2 class="v-markdown">
      If
      <code>{{'{'+$t('extreme')+'}-{'+$t('property')+'}-{'+$t('size')+'}'}}</code>
    </h2>

    <i18n
      path="the-size-controls-the-increment-of-the-property-in-size-intervals"
      tag="p"
      class="mt-2"
    >
      <template v-slot:strongSize>
        <strong>{{$t('size')}}</strong>
      </template>
      <template v-slot:strongProperty>
        <strong>{{$t('property')}}</strong>
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
          <i18n path="sets-margin-or-padding-to-px" tag="span" class="mt-2">
            <template v-slot:directionMargin>
              <code>{{$t('width')}}</code>
            </template>
            <template v-slot:directionPadding>
              <code>{{$t('height')}}</code>
            </template>
            <template v-slot:px>{{i* 100}}px</template>
          </i18n>
        </li>
      </ul>
    </span>
    <p class="v-markdown">
      {{$t('examples')}}
      <code>{{$t('max-width')+'-'+'5'}}</code>
      {{$t('output')}}
      <code>{{$t('max-width')}}: 500px</code>
    </p>
  </div>
</template>
