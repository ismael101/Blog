<template>
  <div>
    <b-container>
            <b-img fluid :src="article.picture" class="my-5" center data-aos='zoom-in' data-aos-delay='300' style=" min-width : 1200px;"/>
          <h1 data-aos='zoom-in' data-aos-delay='300'>{{article.title}}</h1>
          <p data-aos='zoom-in' data-aos-delay='300'><i>Author: {{article.author}}  Published: {{new Date(article.published).toDateString()}}</i></p>
      <hr/>
      <p style="font-size:25px;" data-aos='zoom-in' data-aos-delay='300' class="my-5">
        {{article.content}}
      </p>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      article:'',
      error:''
    }
  },
  methods:{
    getArticle(){
      this.$article.getOne(this.$route.params.id)
                    .then(res => {
                      this.article = res.data
                    })
                    .catch(err => {
                      this.error = err
                    })
    }
  },
  mounted(){
    this.getArticle()
  }
}
</script>

<style>

</style>
