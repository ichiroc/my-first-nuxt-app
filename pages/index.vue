<template>
<div></div>
</template>

<script>
  export default {
    async mounted() {
      console.log(
        JSON.stringify(
          // axios-module を導入すると全てのVueコンポーネントに $axios が格納され、 $methodName で nuxt の設定に合わせたリクエストをしてくれる
          await this.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js', true, '  ')
        )
      )
    }
  }
</script>
