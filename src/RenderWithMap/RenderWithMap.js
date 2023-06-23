import React, { Component } from 'react'
import { movieArr } from './dataMovie';

export default class RenderWithMap extends Component {
  renderListMovie=() => {
    // return 1: renderListMovie
    // return 2: function nằm trong map

    // return movieArr.map((item) => {}
    return movieArr.map(({hinhAnh, tenPhim, moTa}, index) => {
      return (
      <div key={index} className="card text-left col-2">
        <img className="card-img-top" src={hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{tenPhim}</h4>
          <p className="card-text">{moTa}</p>
        </div>
      </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h2>RenderWithMap</h2>
        <div className='row'>{this.renderListMovie()}</div>
      </div>
    );
  }
}
