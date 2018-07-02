import React, { Component } from 'react';

import ClickBait from './ClickBait';
import LeftArticle from './LeftArticle'
import RightArticle from './RightArticle'


class Main extends Component{
    render(){
        return(
            <main className="expanded row">
            <LeftArticle />
           <RightArticle />
  
            <ClickBait />
          </main>
        )
    }
}

export default Main