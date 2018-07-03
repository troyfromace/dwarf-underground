import React, { Component } from 'react';

class CommentListItem extends Component{



    render(){
        return(
           <li>{this.props.comment}</li>
        )
    }


}

export default CommentListItem