<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <component :is="layout" />
    <footer>
      <div class="Footer">
        MIT Licensed | Copyright © 2019-present
        <a href="https://github.com/mrapi-js">mrapi-js</a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    computed: {
      layout() {
        if (this.$page.path) {
          if (this.$frontmatter.layout) {
            // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
            return this.$frontmatter.layout
          }
          return 'Layout'
        }
        return 'NotFound'
      }
    }
  }
</script>
<style>
  .Footer {
    border-top: 1px solid #eaecef;
    padding: 30px 0;
    margin-top: 40px;
    text-align: center;
  }
</style>