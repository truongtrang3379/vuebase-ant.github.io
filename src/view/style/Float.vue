<template>
  <div>
    <h2>{{$t('float')}}</h2>
    <p>{{$t('introduce-float')}}</p>
    <h2>{{$t('classes')}}</h2>
    <p>{{$t('introduce-classes')}}</p>
    <div class="pa-3 mb-2 v-markdown" style="background: #f2f4f5;">
      <div class="float-left">
        Float left on all viewport sizes
        <code>.float-left</code>
      </div>
      <br />
      <div class="float-right">
        Float right on all viewport sizes
        <code>.float-right</code>
      </div>
      <br />
      <div class="float-none">
        Don't float on all viewport sizes
        <code>.float-none</code>
      </div>
    </div>
  </div>
</template>
