import React, { Component } from 'react'

export default class CardPhoneItem extends Component {
  render() {
    // Để lấy được các dữu liệu truyền vào component ta sẽ sử dụng this.Props this.props
    // console.log(this.props.item);
    console.log(this.props);
    let { hinhAnh, gia, hang, ten } = this.props.item;
    return (
        <div className="card text-white bg-primary">
            <img className="card-img-top" src={hinhAnh} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">{ten}</h4>
                <p className="card-text">{hang}</p>
                <p>{gia}</p>
                <p>{this.props.hoTen}</p>
                <p>{this.props.tuoi}</p>
                {/* <button onClick={() => {
                  // props là một dữ liệu dạng real-only nên không cho phép thay đổi giá trị khi ở component con
                  this.props.hoTen = 'Nam';
                  console.log(this.props.hoTen)
                }}>
                  Thay đổi props
                </button> */}
                <button onClick={() => {
                  this.props.thayDoiHoTen('Nhựt');
                }}
                >
                  Đổi tên
                </button>
            </div>
        </div>        
    );
  }
}
