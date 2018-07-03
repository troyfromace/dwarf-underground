import React, { Component } from 'react';
import CommentForm from './CommentForm'

class SocialButtons extends Component{
constructor(){
  super()
  this.state={clicked: false}
}

addForm = () => {
  if(this.state.clicked){
    this.setState({clicked: false})
  }
  else this.setState({clicked: true})
}

    render(){
      if(this.state.clicked){
        return(
          <div className="Holder">
            <div   className="article-links">
            
            <a  onClick={this.addForm} className="article-link"   >
              <i className="fa fa-comments-o"></i>
              <span className="article-link-text">Comments</span>
            </a>
           
            <a className="article-link" >
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>
          </div>
          <CommentForm />
          </div>
        )
      }
      return(
        <div className="Holder">
          <div   className="article-links">
          
          <a  onClick={this.addForm} className="article-link"   >
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
         
          <a className="article-link" >
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
        </div>
        </div>
      )
    }

}

export default SocialButtons