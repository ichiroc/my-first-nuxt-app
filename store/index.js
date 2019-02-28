import Vuex from 'vuex'

// クラシックモードでの store の使い方
export default () =>
  new Vuex.Store({
    state: {
      items: []
    }
  })
