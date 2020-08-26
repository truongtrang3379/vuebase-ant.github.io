<template>
  <pre v-highlightjs="sourcecode">
      <code class="html ma-0">
      </code>
  </pre>
</template>

<script>
export default {
  name: "Highlight",
  props: ["sourcecode"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hljs {
  border-radius: 10px;
  margin: 10px;
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #253137;
}
.hljs,
.hljs-subst {
  color: #889798;
}
.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta-keyword,
.hljs-doctag,
.hljs-name {
  /* font-weight: bold; */
  color: #ff607b;
}
span.hljs-attr {
  color: #5fd7f5;
}
.hljs-type,
.hljs-string,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #ffaf62;
}
pre,
code,
kbd,
samp {
  font-size: 1em;
  font-family: Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono,
    monospace;
}
span.javascript {
  color: #fff;
}
span.hljs-number,
.hljs-literal {
  color: #c09cfe;
}
.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #5fd7f5;
}
</style>
