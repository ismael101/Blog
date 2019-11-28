<template>
  <div>
      <b-jumbotron id='jumbotron'>
          <b-container>
              <h1 class='mt-5' style='font-size:75px; text-align:center;color:white;' data-aos='fade-left' data-aos-delay='300'>Latest Articles</h1>
              <hr/>
                  <b-card-group deck columns data-aos='fade-right' data-aos-delay='300'>
                      <b-card :title='$store.state.articles[0].title'
                            :img-src='$store.state.articles[0].picture'
                            img-top
                      >
                      <b-card-text>
                          {{$store.state.articles[0].content.substring(0,100)}} ... 
                      </b-card-text>
                      <b-link :to='$store.state.articles[0].category + "/" + $store.state.articles[0].id'>Read More</b-link>
                        <h5><b-badge>{{$store.state.articles[0].category}}</b-badge></h5>
                      </b-card>
                      <b-card :title='$store.state.articles[1].title'
                            :img-src='$store.state.articles[1].picture'
                            img-top
                      >
                      <b-card-text>
                          {{$store.state.articles[1].content.substring(0,100)}} ... 
                      </b-card-text>
                      <b-link :to='$store.state.articles[1].category + "/" + $store.state.articles[1].id'>Read More</b-link>
                        <h5><b-badge>{{$store.state.articles[1].category}}</b-badge></h5>
                      </b-card>
                      <b-card :title='$store.state.articles[2].title'
                            :img-src='$store.state.articles[2].picture'
                            img-top
                      >
                      <b-card-text>
                          {{$store.state.articles[2].content.substring(0,100)}} ... 
                      </b-card-text>
                      <b-link :to='$store.state.articles[2].category + "/" + $store.state.articles[2].id'>Read More</b-link>
                        <h5><b-badge>{{$store.state.articles[2].category}}</b-badge></h5>
                      </b-card>
                      <b-card :title='$store.state.articles[3].title'
                            :img-src='$store.state.articles[3].picture'
                            img-top
                      >
                      <b-card-text>
                          {{$store.state.articles[3].content.substring(0,100)}} ... 
                      </b-card-text>
                      <b-link :to='$store.state.articles[3].category + "/" + $store.state.articles[3].id'>Read More</b-link>
                        <h5><b-badge>{{$store.state.articles[3].category}}</b-badge></h5>
                      </b-card>
                  </b-card-group>
          </b-container>
      </b-jumbotron>
  </div>
</template>

<script>
export default {
    name:'Index',
    methods:{
        getArticles(){
            this.$article.get()
                .then(res => {
                    this.$store.dispatch('setArticles',res.data)
                })
                .catch(err => {
                    this.$store.dispatch('setError',err)
                })
        }
    },
    mounted(){
        this.getArticles()
    }
}
</script>

<style>
#jumbotron{
    background-image: url('../assets/geeljire.jpeg');
    background-size: cover;
    justify-content: center;
    height: 90vh;
}
</style>