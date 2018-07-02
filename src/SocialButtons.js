import React, { Component } from 'react';
import CommentForm from './CommentForm'

class SocialButtons extends Component{

    render(){
        return(
          <div>
            <div  className="article-links">
            
            <a  className="article-link"   >
              <i className="fa fa-comments-o"></i>
              <span className="article-link-text">Comments</span>
            </a>
           
            <a className="article-link" >
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>
          </div>
          <CommentForm/>
          </div>
        )
    }

}

export default SocialButtons