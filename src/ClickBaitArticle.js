import React, { Component } from 'react';

class ClickBaitArticle extends Component{

    render(){
        return(

            <div className="small-6 medium-3 columns other-article">
              <a href="#">
                <img src={this.props.article.image} alt={this.props.article.alt}/>
                <p>{this.props.article.name}</p>
              </a>  
            </div>
           
        )
    }
}

export default ClickBaitArticle