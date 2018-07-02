import React, { Component } from 'react';

import ClickBaitArticle from './ClickBaitArticle'

class ClickBait extends Component{
  constructor(){
    super()

    this.state={
      articles:[
        {image: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif', 
        alt: 'orc', name: 'Single Orcs in Indianapolis'},
        {image: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg', 
        alt: 'mountain', name: 'You won\'t believe what\'s under this mountain'},
        {image: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg', 
        alt: 'gold', name: 'Mine 20% more gold with One Weird Trick'},
        {image: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg', 
        alt: 'hobbit', name: 'Surprise for Indiana Hobbits born before 1999'},
      ]
    }
  }
  
    render(){
        return(
<div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
        {this.state.articles.map((currentArticle,i) => <ClickBaitArticle article={currentArticle} key={i} />)}
          </div>
        )
    }
}

export default ClickBait