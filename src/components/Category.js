import React, {Component} from 'react'
import {connect} from 'react-redux'

class Category extends Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    sports: state.sports.articles,
    travel: state.travel.articles,
    business: state.business.articles,
    politics: state.politics.articles
  });
  export default connect(mapStateToProps,null)(Category);