import React, { Component } from 'react';
import CommentListItem from './CommentList'

class CommentForm extends Component{

    constructor() {
        super()
        
        this.state = {
          comments: [],
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

        this.setState({comments: comments})

    }

    


}

export default CommentForm