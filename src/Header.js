import React, { Component } from 'react';
import LogoAxe from './LogoAxe'
import NavLinks from './NavLinks'
import HeaderText from './HeaderText'

class Header extends React.Component{

    render(){
        return (
            <div className="expanded row header">
          <div className="clearfix">
            <LogoAxe />
            <NavLinks />
          </div>
            <HeaderText />
        </div>

        )
    }
}

export default Header