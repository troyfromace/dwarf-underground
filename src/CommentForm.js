import React, { Component } from 'react';
import CommentListItem from './CommentListItem'

class CommentForm extends Component{

    constructor() {
        super()
        this.oldComments=JSON.parse(localStorage.getItem('stringyArray'))
        if(this.oldComments){
            this.state= {comments: this.oldComments}
        }
        else{
        this.state = {
          comments: [],
        } 
        } 
      }

    render(){
        return(
            <div >
                <div>
                <form onSubmit={(ev) => {
                    ev.preventDefault()
                    this.addComment(ev.target.comment.value)
                    } }>
                <input className="comment" name="comment" type="text">
                </input>
                </form>
                </div>
                <ul>
                    {this.state.comments.map((currentComment,i) => <CommentListItem comment={currentComment} key={i} />)}
                </ul>
                
          </div>
        )
    }

    addComment = (comment) => {
        const comments = [...this.state.comments]
        comments.push(comment)
        localStorage.setItem('stringyArray', JSON.stringify(comments));
        this.setState({comments: comments})   
    }

}

export default CommentForm