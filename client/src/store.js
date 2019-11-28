import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
        createPersistedState()
      ],
    state:{
        articles:[],
        error:''
    },
    getters:{
        politics: state => {
            return state.articles.filter(article => article.category == 'politics')
        },
        business: state => {
            return state.articles.filter(article => article.category == 'business')
        },
        sports: state => {
            return state.articles.filter(article => article.category == 'sports')
        }
    },
    mutations:{
        setArticles(state,articles){
            state.articles = articles
        },
        setError(state, error){
            state.error = error
        }
    },
    actions:{
        setArticles({commit}, articles){
            commit('setArticles',articles)
        },
        setError({commit}, error){
            commit('setError', error)
        }
    }
})