<template>
  <div>
      <b-container>
      <h1 class='my-5'>Search  Results</h1>
      <hr/>
      <div v-if='articles.length !== 0'>
        <b-media right-align vertical-align="center" v-for='article in articles' v-bind:key='article.id' class="my-5" data-aos='fade-right' :data-aos-delay='300 + (articles.indexOf(article) * 100)' >
    <template v-slot:aside>
      <b-img :src='article.picture' width="80"></b-img>
    </template>
    <h5 class="mt-0 mb-1">{{article.title}}</h5>
    <p class="mb-0">
      {{article.content.substring(0,100)}} ...<b-link :to='article.category + "/" + article.id'>Read More</b-link>
    </p>
  </b-media>
  </div>
  <div v-if='articles.length == 0'>
  <h2>No Results</h2> 
   </div>
      </b-container>

  </div>
</template>

<script>
export default {
    data(){
        return{
            articles:[],
            route:this.$route.query.article,
            error:''
        }
    },
    methods:{
        getResults(){
            this.$article.search(this.$route.query.article)
                          .then(res => {
                              this.articles = res.data
                          })
                          .catch(err => {
                            this.error = err
                          })    

        }
    },
    mounted(){
        this.getResults()

    }
}
</script>

<style>

</style>