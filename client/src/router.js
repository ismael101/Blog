import Router from 'vue-router'
import Article from './components/Article'
import Category from './components/Category'
import Index from './components/Index'
import Search from './components/Search'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        },
        {
           path:'/sports',
           name:'sports',
           component:Category 
        },
        {
            path:'/politics',
            name:'politics',
            component:Category
        },
        {
            path:'/business',
            name:'business',
            component:Category
        },
        {
            path:'/politics/:id',
            component:Article
        },
        {
            path:'/sports/:id',
            component:Article
        },
        {
            path:'/business/:id',
            component:Article
        },
        {
            path:'/search',
            
            component:Search
        }
    ]
})