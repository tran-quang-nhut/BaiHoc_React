import React, { Component } from 'react'

export default class DemoState extends Component {
  // state: chứa các giá trị ảnh hưởng tới việc render layout
  // setState : update giá trị của State => State thay đổi => render() chạy lại

    state = {
        soLuong: 10,
    };
    handleTang = () => {
        this.setState({
            soLuong: this.state.soLuong + 1,
        });
    };
    handleGiam = () => {
        if (this.state.soLuong > 0) {
                this.setState({
                    soLuong: this.state.soLuong - 1,
                
            });
        }
    };
  render() {
    return (
      <div>
        <button onClick={this.handleGiam} className='btn btn-danger'>-</button>
        <span className='mx-5'>{this.state.soLuong}</span>
        <button onClick={this.handleTang} className='btn btn-success'>+</button>
      </div>
    );
  }
}
