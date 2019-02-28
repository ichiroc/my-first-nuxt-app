<template>
  <section class='container'>
    <div>
      <h3>Nuxt.js のタグがつけられた投稿の一覧</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span>{{item.title}}</span>
            <small>
              <span>by </span>
              <nuxt-link :to="`/users/${item.user.id}`">
                {{item.user.id}}
              </nuxt-link>
            </small>
          </h4>
          <div>{{item.body.slice(0, 130)}}......</div>
          <p><a :href="item.url">{{item.url}}</a></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

  export default {
    // asyncData はコンポーネント読み込み前に呼ばれるので、thisが使えない、その代替として app を利用する
    // さらにサーバー上でレンダリングされるので、すぐに表示される
    async asyncData({store}) {
      if(store.getters['items'].length) {
        return
      }
      await store.dispatch('fetchItems')
    },
    computed: {
      // mapGetters を使ってstore の getter をこのコンポーネントの算出プロパティにマッピングする
      ...mapGetters(['items'])
    }
  }
</script>

<style scoped>
  .container {
      min-height: 100vh;
      padding: 16px
  }
  h3 {
      margin: 16px 0;
      padding: 8px 0;
      border-bottom: solid 1px #e5e5e5;
  }
  li + li {
      margin: 16px 0;
  }
  p {
      margin: 8px 0;
  }
</style>
