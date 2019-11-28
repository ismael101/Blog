import axios from 'axios'

export default{
    get(){
        return axios.get('/articles')
                    .then(articles => {
                        return articles
                    })
                    .catch(err => {
                        return err
                    })
    },
    search(search){
        return axios.get('/articles',{
            params: {
              search: search
            }
          })
            .then(articles => {
                return articles
            })
            .catch(err => {
                return err
            })

    },
    getOne(id){
        return axios.get(`/articles/${id}`)
                    .then(article => {
                        return article
                    })
                    .catch(err => {
                        return err
                    })
    }
}