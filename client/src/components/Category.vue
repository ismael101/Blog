<template>
  <div>
    <b-container>
      <h1 class="my-5">{{category}}</h1>
      <hr/>
      <b-media right-align vertical-align="center" v-for='article in articles' v-bind:key='article.id' class="my-5" data-aos='fade-right' :data-aos-delay='300 + (articles.indexOf(article) * 100)'>
    <template v-slot:aside>
      <b-img :src='article.picture' width="80"></b-img>
    </template>
    <h5 class="mt-0 mb-1">{{article.title}}</h5>
    <p class="mb-0">
      {{article.content.substring(0,100)}} ...<b-link :to='article.category + "/" + article.id'>Read More</b-link>
    </p>
  </b-media>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      articles:[],
      category:''
    }
  },
  methods:{
    getCategory(){
      if(this.$route.path.includes('business')){
        this.articles = this.$store.getters.business
        this.category = 'Business'
      }else if(this.$route.path.includes('sports')){
        this.articles = this.$store.getters.sports
        this.category = 'Sports'
      }else{
        this.articles = this.$store.getters.politics
        this.category = 'Politics'
      }

    }
  },
  mounted(){
    this.getCategory()
  }
}
</script>

<style>

</style>