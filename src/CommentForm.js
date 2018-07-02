import React, { Component } from 'react';

class CommentForm extends Component{



    render(){
        return(
            <div >
                <form onSubmit={(event) => {
                    event.preventDefault() } }>
                <input type="text">
                </input>
                </form>
          </div>
        )
    }


}

export default CommentForm