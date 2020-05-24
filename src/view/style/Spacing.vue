<template>
  <div>
    <h2>{{$t('spacing')}}</h2>
    <p>{{$t('introduce-spacing')}}</p>
    <h2>{{$t('how-it-works')}}</h2>
    <i18n path="how-it-works-intoduce" tag="p">
      <template v-slot:strongMargin>
        <strong>{{$t('margin')}}</strong>
      </template>
      <template v-slot:strongPadding>
        <strong>{{$t('padding')}}</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <code>{{'{'+$t('property')+'}{'+$t('direction')+'}-{'+$t('size')+'}'}}</code>
    </span>
    <i18n path="the-property-applies-the-type-of-spacing" tag="p" class="mt-2">
      <template v-slot:strongProperty>
        <strong>{{$t('property')}}</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <ul>
        <li>
          <code>m</code>
          - {{$t('applies')}}
          <code>{{$t('margin')}}</code>
        </li>
        <li>
          <code>p</code>
          - {{$t('applies')}}
          <code>{{$t('padding')}}</code>
        </li>
      </ul>
    </span>
    <i18n path="the-direction-designates-the-side-the-property-applies-to" tag="p" class="mt-2">
      <template v-slot:strongDirection>
        <strong>{{$t('direction')}}</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <ul>
        <li>
          <code>t</code>
          -
          <i18n
            path="applies-the-spacing-for-directionMargin-and-directionPadding-top"
            tag="span"
            class="mt-2"
          >
            <template v-slot:directionMargin>
              <code>margin-top</code>
            </template>
            <template v-slot:directionPadding>
              <code>padding-top</code>
            </template>
          </i18n>
        </li>
        <li>
          <code>b</code>
          -
          <i18n
            path="applies-the-spacing-for-directionMargin-and-directionPadding-top"
            tag="span"
            class="mt-2"
          >
            <template v-slot:directionMargin>
              <code>margin-bottom</code>
            </template>
            <template v-slot:directionPadding>
              <code>padding-bottom</code>
            </template>
          </i18n>
        </li>
        <li>
          <code>l</code>
          -
          <i18n
            path="applies-the-spacing-for-directionMargin-and-directionPadding-top"
            tag="span"
            class="mt-2"
          >
            <template v-slot:directionMargin>
              <code>margin-left</code>
            </template>
            <template v-slot:directionPadding>
              <code>padding-left</code>
            </template>
          </i18n>
        </li>
        <li>
          <code>r</code>
          -
          <i18n
            path="applies-the-spacing-for-directionMargin-and-directionPadding-top"
            tag="span"
            class="mt-2"
          >
            <template v-slot:directionMargin>
              <code>margin-right</code>
            </template>
            <template v-slot:directionPadding>
              <code>padding-right</code>
            </template>
          </i18n>
        </li>
        <li>
          <code>x</code>
          -
          <i18n path="applies-the-spacing-for-both-left-and-right" tag="span" class="mt-2">
            <template v-slot:directionLeft>
              <code>*-left</code>
            </template>
            <template v-slot:directionRigth>
              <code>*-right</code>
            </template>
          </i18n>
        </li>
        <li>
          <code>y</code>
          -
          <i18n path="applies-the-spacing-for-both-left-and-right" tag="span" class="mt-2">
            <template v-slot:directionLeft>
              <code>*-top</code>
            </template>
            <template v-slot:directionRigth>
              <code>*-bottom</code>
            </template>
          </i18n>
        </li>
        <li>
          <code>a</code>
          -
          {{$t('applies-the-spacing-for-the-property-in-all-directions')}}
        </li>
      </ul>
    </span>
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
        <strong>4px</strong>
      </template>
    </i18n>
    <span class="v-markdown">
      <ul>
        <li>
          <code>0</code>
          -
          <i18n path="eliminates-all-margin-or-padding-by-setting-it-to-0" tag="span" class="mt-2">
            <template v-slot:directionMargin>
              <code>{{$t('margin')}}</code>
            </template>
            <template v-slot:directionPadding>
              <code>{{$t('padding')}}</code>
            </template>
          </i18n>
        </li>
        <li v-for="i in 12" :key="i">
          <code>{{i}}</code>
          -
          <i18n path="sets-margin-or-padding-to-px" tag="span" class="mt-2">
            <template v-slot:directionMargin>
              <code>{{$t('margin')}}</code>
            </template>
            <template v-slot:directionPadding>
              <code>{{$t('padding')}}</code>
            </template>
            <template v-slot:px>{{i* 4}}px</template>
          </i18n>
        </li>
        <li>
          <code>auto</code>
          -
          {{$t('sets-the-spacing-to')}}
          <code>auto</code>
        </li>
      </ul>
    </span>
  </div>
</template>
