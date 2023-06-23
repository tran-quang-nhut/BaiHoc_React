import React, { Component } from 'react'
// import './style.css'
import style from './style.module.css';


export default class ComponentWithCss extends Component {
    styleForComponent = 'bg-success text-white fs-1';
  render() {
    return (
      <div>
        {/* <h1 className={`${style.demo} bg-success fs-1`}>Tôi ở componentWithCss</h1> */}
        {/* <h2 style={{color:'red', backgroundColor: 'black', fontSize:'30px'}}>Demo Inline Css</h2> */}
        <h2 className={this.styleForComponent}>Demo Inline Css</h2>
        <h3 className={this.styleForComponent}>lorem ipsum dolor sit amet</h3>
      </div>
    );
  }
}
