<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top" sticky>
    <b-navbar-brand href="/">Geeljire News</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/politics">Politics</b-nav-item>
        <b-nav-item href="/business">Business</b-nav-item>
         <b-nav-item href="/sports">Sports</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent='search'>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model='query'></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
    name:'Nav',
    data(){
      return{
        query:''
      }
    },
    methods:{
      search(){
        if (this.query !== '') {
            this.$router.push({path:'search',query:{article:this.query}})
            this.query = ''
            this.$router.go()
          }
        
      }
      }
    }
</script>

<style>

</style>